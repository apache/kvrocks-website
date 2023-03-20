import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import feature0 from '../../../static/img/feature-0.png';
import feature1 from '../../../static/img/feature-1.png';
import feature2 from '../../../static/img/feature-2.png';
import feature3 from '../../../static/img/feature-3.png';
import feature4 from '../../../static/img/feature-4.png'

type FeatureItem = {
  imgPath:string;
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    imgPath:feature1,

    title: 'Namespace',
    description: (
      <>
        Similar to Redis SELECT but equipped with token per namespace.
      </>
    ),
  },
  {
    imgPath:feature2,
    title: 'Replication',
    description: (
      <>
        Async replication using binlog like MySQL.
      </>
    ),
  },
  {
    imgPath:feature3,
    title: 'High Available',
    description: (
      <>
        Support Redis sentinel to failover when master or slave was failed.
      </>
    ),
  },
  {
    imgPath:feature4,
    title: 'Cluster',
    description: (
      <>
        Centralized management but accessible via any Redis cluster client.
      </>
    ),
  },
];

function Feature({imgPath,title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md" style={{width:'100%',height:'100%',margin:'50px 0px'}}>
        <img style={{width:'auto',height:'35%',marginBottom:'30px'}} src={imgPath} alt={title}/>
        <h3>{title}</h3>
        <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <p style={{fontFamily:'PingFang SC-Light',fontWeight:'light',color:'rgba(59, 61, 63, 1)',width:'55%'}}>{description}</p>
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
