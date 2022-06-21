# Kvrocks Cluster Introduction

Before releasing the cluster mode of Kvrocks, we usually used the pre-sharding way to scale out the capacity like sharding with Twemproxy, and used Redis Sentinel to guarantee the availability. Although it works well in most scenes since the capacity of Kvrocks was far larger than Redis, it’s still trivial to scale-out in-flight, so we decided to implement the cluster mode to make it easier.

There’re two main types of Redis cluster solutions in the industry:

* Redis cluster decentralized solution
* Codis centralized solution

For Redis cluster, the biggest advantage was NOT needing to depend on other components, but the shortcoming was also obvious that it’s hard to write the right implementation and not easy to maintain the cluster topology. Another big issue was Gossip protocol would limit the cluster size. For Codis solution, we need to import the proxy and centralized storage to keep the metadata, the proxy also added extra network communication cost and delay.

In Kvrocks cluster design, we want to integrate advantages between those solutions, can access Kvrocks without the proxy, and scale-out easily.

## Internal Design

Each Kvrocks node can act as Redis node which can offer the cluster topology directly, and the Redis cluster client can also work on the Kvrocks cluster without any modifications. The topology was managed by the other control panel component which can avoid the complexity of the Gossip protocol(Redis community takes many years to complete the Gossip on cluster solution).

![cluster](https://user-images.githubusercontent.com/18362176/153791709-3a50210e-40b5-4604-ade4-29a8de0559c6.png)


### Topology Management

Kvrocks uses the [Clusterx SetNodes](https://github.com/KvrocksLabs/kvrocks/pull/302) command to set up the cluster topology, be careful that we should apply the entire topology information to all nodes since nodes didn't communicate with each other. The command is like below:

CLUSTERX SETNODES `$ALL_NODES_INFO` `$VERSION` `FORCE`

-  `$ALL_NODES_INFO`: was the cluster topology information, format: : `$node_id` `$ip` `$port` `$role` `$master_node_id` `$slot_range`
   - `$node_id`: 40 chars string, it represents as the unique id in the cluster
   - `$ip` and  `$port`: the node IP address and the listening port
   - `$role`: node's role, should be one of master or slave
   - `$master_node_id`:  set it to the master node id when the current node's role was a slave and set `-` if it's master
   - `slot_range`: slots were served by current node, the format can be the range or single value, like 0-100 200 205 which means slots 0 to 100, 200 and 205 were served by this node
-  `$VERSION`: the topology information version is used to control update the order, the topology information can be updated iff the version is newer than the current version
-  `FORCE`: force update the topology information without verifying the version, we can use this flag when the topology information was totally broken

**Example:**

```shell
CLUSTERX SETNODES
  "67ed2db8d677e59ec4a4cefb06858cf2a1a89fa1 127.0.0.1 30002 master - 5461-10922 16380 16383
    07c37dfeb235213a872192d90877d0cd55635b91 127.0.0.1 30004 slave 67ed2db8d677e59ec4a4cefb06858cf2a1a89fa1"
  1
```

Although Kvrocks can recognize the node id by comparing the `ip`:`port` pair then finding out the serving slots, but users may set the IP address to `0.0.0.0` so that we can't match the right topology information. So Kvrocks gives the extra command [CLUSTERX SETNODEID](https://github.com/KvrocksLabs/kvrocks/pull/302 "CLUSTERX SETNODEID command") to set the id. The format is like this:

```shell
CLUSTERX SETNODEID $NODE_ID
```

`$NODE_ID`: should be 40 chars unique id in cluster

### Node Management

Kvrocks cluster can be set up as simple as using those cluster commands, we even can write a script to watch and apply cluster changes. Those commands can be integrated into those companies which have their own cluster solution. Kvrocks also offers the `CLUSTERX VERSION` command to inspect current cluster topology information, the controller can force to update topology information when the version was out of date or wrong.

For a complete cluster solution, we need to depend on another controller to manage the topology information, failure detection, and failover. Kvrocks team was also developing the official controller to make the cluster manage and operate easier. But the manual resource was the bottleneck, welcome anyone who was interested in this project to build together.

### Client Access

Users can use Redis Cluster SDK to access the Kvrocks cluster since it's compatible with the Redis cluster solution(Kvrocks supported `CLUSTER NODES` and `CLUSTER SLOTS`  command to respond to the cluster topology).  Kvrocks also responds to the `MOVED $slot_id $ip:$port` to redirect the target node when the slot was NOT served by the current node. You can also use the Redis Cluster Proxy like `redis-cluster-proxy` to hide the cluster topology.

### Deploy And Operate

Users need to self-manage the cluster topology information since the Kvrocks controller was still under development. The deployment steps were below:

1. Deploy Kvrocks nodes
2. Design the kvrocks topology which was mentioned at #Topology Management
3. Set node unique id for each node by using `CLUSTER SETNODEID` command
4. Apply the topology information to all nodes by using `CLUSTER NODES` command

Kvrocks would auto-setup the master-slave replication after receiving the setup topology command, and repeats steps 2-4 when we want to switch the node role or number.

 Currently, Kvrocks topology modification was based on full state, that's we need to sync the full topology information to each node, which may cause high network and cpu cost but it can guarantee the correctness of the cluster. Also, the version-based modification can help us to achieve the increment modification if we want to do that, we would offer a way to add, update and delete nodes to make operation easier.

**Cluster Command And Safty**

To guarantee the correctness of client SDK, we rename the CLUSTER command to CLUSTERX to prevent the topology can being modified casually, but we can still use the CLUSTER command to fetch the cluster topology information.



### Cluster Scaling

Kvrocks data migration was based on the slot instead of the key-based like Reids,  we can migrate one slot to another node at once. Kvrocks storage was based on disk instead of memory, so the key migration may be time cost. Now, the controller o DBA can use the CLUSTER MIGRATE command to migrate the slot. For more information can see the PR [#430](https://github.com/KvrocksLabs/kvrocks/pull/430).

**Migrate Command**

CLUSTERX SETSLOT `$slot` NODE `$node_id` `$new_version`

* `$slot`: assign which slot to be migrated
* `NODE`:same as the Redis cluster setslot
* `$dest_nodeid`: which node of the slot is to be migrated
* `$new_version`: the version of the topology information, noted that the version MUST be newer than the old version, or the node would refuse to apply the modification.

We need to use the CLUSTERX MIGRATE command to migrate the slot then use CLUSTER SETSLOT to modify the topology information.

## Summary

Kvrocks cluster implementation was compatible with the Redis cluster, in which users can use the Redis cluster client to access the Kvrocks cluster, also didn't have the extra proxy latency like the Codis solution. By the way, Kvrocks cluster topology management and scaling have already finished from the latest version 2.0.6. We will continue improving the visibility, operation, and cluster management, to make the cluster better and easier.

For the Kvrocks controller, the community was building the official [controller](https://github.com/KvrocksLabs/kvrocks_controller/tree/develop) to make the cluster management easier. Welcome anyone who was interested.
