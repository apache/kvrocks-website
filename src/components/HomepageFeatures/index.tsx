import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import feature0 from '../../../static/img/feature-0.png';
import namespace from '../../../static/img/namespace.png';
import replication from '../../../static/img/replication.png';
import highAvailable from '../../../static/img/high-available.png';
import cluster from '../../../static/img/cluster.png'

type FeatureItem = {
  imgPath:string;
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    imgPath:namespace,
    title: 'Namespace',
    description: (
      <>
        Similar to Redis db but use token per namespace.
      </>
    ),
  },
  {
    imgPath:replication,
    title: 'Replication',
    description: (
      <>
        Async replication using binlog like MySQL.
      </>
    ),
  },
  {
    imgPath:highAvailable,
    title: 'High Available',
    description: (
      <>
        Support redis sentinel to failover when master or slave was failed.
      </>
    ),
  },
  {
    imgPath:cluster,
    title: 'Cluster',
    description: (
      <>
        Centralized management but compatible with Redis cluster client access.
      </>
    ),
  },
];

function Feature({imgPath,title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md" style={{width:"100%",height:"100%",margin:'30px 0px'}}>
        <img className={styles.imgItem} src={imgPath} alt={title}/>
        <h3>{title}</h3>
        <div className={styles.itemDes}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--12')} style={{marginBottom:'100px'}}>
            <div className="text--center padding-horiz--md" style={{width:'100%',height:'100%',marginTop:'50px'}}>
              <h1>Redis Compatible</h1>
              <div className={styles.blueLine}>
                <div></div>
              </div>
              <p>Users can access Apache Kvrocks via any Redis client</p>
              <div className={styles.redisCompatible}>
                <img src={feature0} alt='Redis Compatible'/>
                <div className={styles.Pie}>
                  <div className='Pie round'></div>
                  <div className='Pie-tri'>
                    <div className={styles.tri}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
