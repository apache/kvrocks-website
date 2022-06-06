import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Redis Compatible',
    description: (
      <>
        User can use a Redis client to visit Apache Kvrocks.
      </>
    ),
  },
  {
    title: 'Namespace',
    description: (
      <>
        Similar to Redis db but use token per namespace.
      </>
    ),
  },
  {
    title: 'Replication',
    description: (
      <>
        Async replication using binlog like MySQL.
      </>
    ),
  },
  {
    title: 'High Available',
    description: (
      <>
        Support redis sentinel to failover when master or slave was failed.
      </>
    ),
  },
  {
    title: 'Cluster',
    description: (
      <>
        Centralized management but compatible with Redis cluster client access.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
