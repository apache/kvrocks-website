# Documentation for Missing Redis Commands

This document provides detailed information on Redis commands that are not currently covered in the Kvrocks documentation.

1. HYPERLOGLOG COMMANDS

1.1 PFSELFTEST

Syntax: PFSELFTEST
Function: Performs a self-test of the HyperLogLog implementation.
Notes: Used for debugging purposes to ensure the HyperLogLog implementation is working correctly.

1.2 PFDEBUG

Syntax: PFDEBUG <subcommand> <key>
Function: Provides debugging information for HyperLogLog data structures.
Notes: Subcommands include GETREG to get the raw register values.


2. SEARCH COMMANDS

2.1 FT.AGGREGATE

Syntax: FT.AGGREGATE <index> <query> [options]
Function: Performs an aggregation query on the index.
Notes: Useful for complex queries involving grouping and reducing.

2.2 FT.ALIASADD

Syntax: FT.ALIASADD <alias> <index>
Function: Adds an alias to an index.
Notes: Aliases allow you to reference an index by a different name.

2.3 FT.ALIASDEL

Syntax: FT.ALIASDEL <alias>
Function: Deletes an alias.
Notes: Removes the alias but does not delete the index.

2.4 FT.ALIASUPDATE

Syntax: FT.ALIASUPDATE <alias> <index>
Function: Updates an alias to point to a different index.
Notes: Useful for changing the index an alias points to without deleting the alias.

2.5 FT.ALTER

Syntax: FT.ALTER <index> <SCHEMA ADD|SCHEMA ADD|SCHEMA ADD> <field> <type> [options]
Function: Alters the schema of an existing index.
Notes: Allows adding new fields to the index schema.


2.6 FT.CONFIG GET

Syntax: FT.CONFIG GET <option>
Function: Gets the value of a configuration option.
Notes: Useful for retrieving current configuration settings.

2.7 FT.CONFIG SET

Syntax: FT.CONFIG SET <option> <value>
Function: Sets the value of a configuration option.
Notes: Used to change configuration settings.


2.8 FT.CURSOR DEL

Syntax: FT.CURSOR DEL <index> <cursor_id>
Function: Deletes a cursor.
Notes: Cursors are used for paginating large result sets.

2.9 FT.CURSOR READ

Syntax: FT.CURSOR READ <index> <cursor_id> [count]
Function: Reads from a cursor.
Notes: Retrieves the next batch of results from the cursor.

2.10 FT.DICTADD

Syntax: FT.DICTADD <dict> <term> [term ...]
Function: Adds terms to a dictionary.
Notes: Dictionaries are used for spell-checking and synonyms.

2.11 FT.DICTDEL

Syntax: FT.DICTDEL <dict> <term> [term ...]
Function: Deletes terms from a dictionary.
Notes: Removes specified terms from the dictionary.


2.12 FT.DICTDUMP

Syntax: FT.DICTDUMP <dict>
Function: Dumps all terms in a dictionary.
Notes: Useful for inspecting the contents of a dictionary.


2.13 FT.EXPLAINCLI

Syntax: FT.EXPLAINCLI <index> <query>
Function: Explains a query in a human-readable format.
Notes: Helps understand how a query is executed.


2.14 FT.PROFILE

Syntax: FT.PROFILE <index> <query> [options]
Function: Profiles the execution of a query.
Notes: Provides detailed information about query execution.


2.15 FT.SPELLCHECK

Syntax: FT.SPELLCHECK <index> <query> [options]
Function: Performs spell-checking on a query.
Notes: Suggests corrections for misspelled terms.


2.16 FT.SYNDUMP

Syntax: FT.SYNDUMP <index>
Function: Dumps the synonym data.
Notes: Useful for inspecting synonym mappings.


2.17 FT.SYNUPDATE

Syntax: FT.SYNUPDATE <index> <group_id> <term> [term ...]
Function: Updates synonym groups.
Notes: Adds or updates terms in a synonym group.


2.18 FT.TAGVALS

Syntax: FT.TAGVALS <index> <field>
Function: Returns all distinct tag values for a field.
Notes: Useful for retrieving unique values of a tag field.


3. BLOOMFILTER COMMANDS
   

3.1 BF.LOADCHUNK

Syntax: BF.LOADCHUNK <key> <iter> <data>
Function: Restores a Bloom filter from a serialized chunk.
Notes: Used for incremental loading of Bloom filters.


3.2 BF.SCANDUMP

Syntax: BF.SCANDUMP <key> <iter>
Function: Incrementally dumps a Bloom filter.
Notes: Useful for serializing Bloom filters for backup or transfer.


4. JSON COMMANDS

4.1 JSON.DEBUG MEMORY

Syntax: JSON.DEBUG MEMORY <key>
Function: Returns memory usage information for a JSON key.
Notes: Helps in analyzing memory consumption of JSON data.


5. STREAM COMMANDS

5.1 XGROUP CREATE

Syntax: XGROUP CREATE <key> <groupname> <id or $> [MKSTREAM]
Function: Creates a consumer group.
Notes: MKSTREAM option creates the stream if it doesn’t exist.


5.2 XGROUP DESTROY

Syntax: XGROUP DESTROY <key> <groupname>
Function: Deletes a consumer group.
Notes: Removes the group but not the stream.


5.3 XGROUP SETID

Syntax: XGROUP SETID <key> <groupname> <id>
Function: Sets the last delivered ID for a consumer group.
Notes: Useful for resetting the group’s read position.


5.4 XPENDING

Syntax: XPENDING <key> <groupname> [start end count] [consumer]
Function: Shows pending messages for a consumer group.
Notes: Provides information about unacknowledged messages.


5.5 XINFO GROUPS

Syntax: XINFO GROUPS <key>
Function: Returns information about consumer groups.
Notes: Useful for monitoring and debugging.


5.6 XGROUP DELCONSUMER

Syntax: XGROUP DELCONSUMER <key> <groupname> <consumername>
Function: Removes a consumer from a group.
Notes: Deletes the consumer’s pending messages.


5.7 XGROUP CREATECONSUMER

Syntax: XGROUP CREATECONSUMER <key> <groupname> <consumername>
Function: Creates a new consumer in a group.
Notes: Useful for adding consumers dynamically.


6. HASH COMMANDS

6.1 HEXPIRE

Syntax: HEXPIRE <key> <field> <seconds>
Function: Sets a timeout on a hash field.
Notes: Field will be removed after the timeout.


6.2 HEXPIREAT

Syntax: HEXPIREAT <key> <field> <timestamp>
Function: Sets an expiration timestamp on a hash field.
Notes: Field will be removed at the specified time.


6.3 HEXPIRETIME

Syntax: HEXPIRETIME <key> <field>
Function: Gets the expiration time of a hash field.
Notes: Returns the remaining time to live.


6.4 HPERSIST

Syntax: HPERSIST <key> <field>
Function: Removes the expiration from a hash field.
Notes: Field will no longer expire.


6.5 HPEXPIRE

Syntax: HPEXPIRE <key> <field> <milliseconds>
Function: Sets a timeout on a hash field in milliseconds.
Notes: Field will be removed after the timeout.


6.6 HPTTL

Syntax: HPTTL <key> <field>
Function: Gets the time to live of a hash field in milliseconds.
Notes: Returns the remaining time to live.


6.7 HRANDFIELD

Syntax: HRANDFIELD <key> [count [WITHVALUES]]
Function: Gets one or more random fields from a hash.
Notes: WITHVALUES option returns the field values as well.


6.8 HTTL

Syntax: HTTL <key> <field>
Function: Gets the time to live of a hash field in seconds.
Notes: Returns the remaining time to live.



7. SET COMMANDS

7.1 SMISMEMBER

Syntax: SMISMEMBER <key> <member> [member ...]
Function: Checks if one or more members are in a set.
Notes: Returns an array of integers indicating whether each member is part of the set.




8. CLUSTER COMMANDS

8.1 ASKING

Syntax: ASKING
Function: Marks the next command as a part of an ASKING redirection.
Notes: Used during resharding to handle ASK redirections.


8.2 CLUSTER ADDSLOTS

Syntax: CLUSTER ADDSLOTS <slot> [slot ...]
Function: Assigns slots to the node.
Notes: Used to add hash slots to the current node.


8.3 CLUSTER ADDSLOTSRANGE

Syntax: CLUSTER ADDSLOTSRANGE <start-slot> <end-slot>
Function: Assigns a range of slots to the node.
Notes: Useful for adding multiple slots in a single command.


8.4 CLUSTER BUMPEPOCH

Syntax: CLUSTER BUMPEPOCH
Function: Advances the cluster configuration epoch.
Notes: Used to force a configuration change.


8.5 CLUSTER COUNT-FAILURE-REPORTS

Syntax: CLUSTER COUNT-FAILURE-REPORTS <node-id>
Function: Returns the number of failure reports for a node.
Notes: Helps in diagnosing node failures.


8.6 CLUSTER COUNTKEYSINSLOT

Syntax: CLUSTER COUNTKEYSINSLOT <slot>
Function: Returns the number of keys in a slot.
Notes: Useful for understanding slot distribution.


8.7 CLUSTER DELSLOTSRANGE

Syntax: CLUSTER DELSLOTSRANGE <start-slot> <end-slot>
Function: Removes a range of slots from the node.
Notes: Used to deallocate multiple slots.


8.8 CLUSTER FAILOVER

Syntax: CLUSTER FAILOVER [FORCE|TAKEOVER]
Function: Forces a manual failover of the master node.
Notes: FORCE and TAKEOVER options control the failover behavior.


8.9 CLUSTER FLUSHSLOTS

Syntax: CLUSTER FLUSHSLOTS
Function: Removes all slots from the node.
Notes: Used to reset the slot configuration.


8.10 CLUSTER FORGET

Syntax: CLUSTER FORGET <node-id>
Function: Removes a node from the cluster.
Notes: Used to forget a node that is no longer part of the cluster.


8.11 CLUSTER GETKEYSINSLOT

Syntax: CLUSTER GETKEYSINSLOT <slot> <count>
Function: Returns keys in a specified slot.
Notes: Useful for retrieving keys during resharding.


8.12 CLUSTER LINKS

Syntax: CLUSTER LINKS
Function: Provides information about the cluster links.
Notes: Useful for monitoring the state of cluster connections.


8.13 CLUSTER MEET

Syntax: CLUSTER MEET <ip> <port>
Function: Connects nodes to form a cluster.
Notes: Used to initiate a cluster handshake.


8.14 CLUSTER MYID

Syntax: CLUSTER MYID
Function: Returns the node ID of the current node.
Notes: Useful for identifying the node in the cluster.


8.15 CLUSTER REPLICATE

Syntax: CLUSTER REPLICATE <node-id>
Function: Sets the node as a replica of the specified master.
Notes: Used to configure replication.


8.16 CLUSTER SAVECONFIG

Syntax: CLUSTER SAVECONFIG
Function: Forces the cluster to save its configuration.
Notes: Ensures the current configuration is persisted.


8.17 CLUSTER SET-CONFIG-EPOCH

Syntax: CLUSTER SET-CONFIG-EPOCH <epoch>
Function: Sets the configuration epoch for the node.
Notes: Used to manually set the epoch.


8.18 CLUSTER SETSLOT

Syntax: CLUSTER SETSLOT <slot> <IMPORTING|MIGRATING|STABLE|NODE> <node-id>
Function: Manages slot state.
Notes: Used during resharding to move slots between nodes.


8.19 CLUSTER SHARDS

Syntax: CLUSTER SHARDS
Function: Provides information about the cluster shards.
Notes: Useful for monitoring shard distribution.



9. PUBSUB COMMANDS

9.1 SPUBLISH

Syntax: SPUBLISH <channel> <message>
Function: Publishes a message to a channel.
Notes: Similar to PUBLISH but for shard channels.




10. ZSET COMMANDS

10.1 ZDIFF

Syntax: ZDIFF <numkeys> <key> [key ...] [WITHSCORES]
Function: Computes the difference between multiple sorted sets.
Notes: WITHSCORES option returns the scores of the resulting elements.

10.2 ZDIFFSTORE

Syntax: ZDIFFSTORE <destination> <numkeys> <key> [key ...]
Function: Stores the difference between multiple sorted sets in a new key.
Notes: Useful for saving the result of the difference operation.


11. FUNCTIONS COMMANDS

11.1 FUNCTION STATS

Syntax: FUNCTION STATS
Function: Returns statistics about the functions.
Notes: Provides information about function execution and memory usage.


11.2 FUNCTION RESTORE

Syntax: FUNCTION RESTORE <serialized-value>
Function: Restores a function from a serialized value.
Notes: Used for importing functions.

