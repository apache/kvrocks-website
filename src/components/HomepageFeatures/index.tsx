import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  imgPath:string;
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    imgPath: require('@site/static/img/namespace.png').default,
    title: 'Namespace',
    description: (
        <>
          Similar to Redis SELECT but equipped with token per namespace
        </>
    ),
  },
  {
    imgPath: require('@site/static/img/cluster.png').default,
    title: 'Replication',
    description: (
        <>
          Async replication using binlog like MySQL
        </>
    ),
  },
  {
    imgPath: require('@site/static/img/high-available.png').default,
    title: 'High Availability',
    description: (
        <>
          Support Redis sentinel to failover when master or replica was failed
        </>
    ),
  },
  {
    imgPath: require('@site/static/img/replication.png').default,
    title: 'Cluster',
    description: (
        <>
          Centralized management but accessible via any Redis cluster client
        </>
    ),
  },
];

function Feature({imgPath,title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md" style={{width:"100%",height:"100%",margin:'30px 0px'}}>
        <img className={styles.imgItem} src={imgPath} alt={title}/>
        <h3 className={styles.featureTitle}>{title}</h3>
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
      <div className={styles.container}>
        <div className="row" >
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
