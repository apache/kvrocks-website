import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Pic from '../../static/img/mainPic.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.titles)}>
          <h1 className="hero__title" style={{color:'black'}}>{siteConfig.title}</h1>
          <h2 className='hero__secondary__title' style={{color:'rgba(40, 117, 243, 1)'}}>(incubating)</h2>
          <div className={clsx('hero__subtitle',styles.tagline)}>{siteConfig.tagline}</div>
        </div>
        <div className={clsx(styles.image)}>
          <img src={Pic} />
        </div>
      </div>
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--lg"
          to="/docs/getting-started">
          QUICK START
        </Link>
        <Link
          className="button button--secondary button--lg"
          to="https://github.com/apache/incubator-kvrocks">
          <div className='header-github-link' style={{marginRight:'10px'}}></div>
          GITHUB
        </Link>
        <Link
          className="button button--secondary button--lg"
          to="https://kvrocks.slack.com/join/shared_invite/zt-p5928e3r-OUAK8SUgC8GOceGM6dAz6w#/shared-invite/email">
          <div className='header-slack-link' style={{marginRight:'10px'}}></div>
          SLACK
        </Link>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Apache Kvrocks is a distributed key value NoSQL database that uses RocksDB as storage engine and is compatible with Redis protocol.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
