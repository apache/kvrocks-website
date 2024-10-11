import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={clsx(styles.container)}>
          <div className={clsx(styles.titles)}>
            <h1 className="hero__title" style={{color:'black'}}>{siteConfig.title}</h1>
            <div className={clsx('hero__subtitle',styles.tagline)}>{siteConfig.tagline}</div>
          </div>
          <div className={clsx(styles.image)}>
            <img src={require('@site/static/img/hero.png').default}  alt="kvrocks banner"/>
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
              to="https://github.com/apache/kvrocks">
            <div className='header-github-link' style={{marginRight:'10px'}}></div>
            GITHUB
          </Link>
          <Link
              className="button button--secondary button--lg"
              to="https://kvrocks.zulipchat.com/">
            <div className='header-zulip-link' style={{marginRight:'10px'}}></div>
            ZULIP
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
