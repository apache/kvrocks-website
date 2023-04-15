import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { IMG_CDN_URL_PREFIX } from '../../constants';

const imagePaths = {
  namespace: IMG_CDN_URL_PREFIX + 'namespace.png',
  cluster: IMG_CDN_URL_PREFIX + 'cluster.png',
  highAvailable: IMG_CDN_URL_PREFIX + 'high-available.png',
  replication: IMG_CDN_URL_PREFIX + 'replication.png',
};

type FeatureItem = {
  imgPath:string;
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    imgPath:imagePaths.namespace,
    title: 'Namespace',
    description: (
      <>
        Similar to Redis SELECT but equipped with token per namespace
      </>
    ),
  },
  {
    imgPath:imagePaths.replication,
    title: 'Replication',
    description: (
      <>
        Async replication using binlog like MySQL
      </>
    ),
  },
  {
    imgPath:imagePaths.highAvailable,
    title: 'High Available',
    description: (
      <>
        Support Redis sentinel to failover when master or slave was failed
      </>
    ),
  },
  {
    imgPath:imagePaths.cluster,
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
              <p>Users can access Apache Kvrocks via any Redis client.</p>
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
