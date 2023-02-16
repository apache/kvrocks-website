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
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{backgroundImage:'linear-gradient(to top, rgba(230, 239, 255, 1) , rgba(255, 255, 255, 1))',textAlign:'left',fontWeight:'Semibold',fontFamily:'PingFang SC-Semibold',display:'flex'}}>
      <div className="container" style={{margin:'0 0 0 10%',width:'40%'}}>
        <h1 className="hero__title" style={{color:'black'}}>{siteConfig.title}</h1>
        <h2 className='hero__secondary__title' style={{color:'rgba(40, 117, 243, 1)'}}>(incubating)</h2>
        <div className="hero__subtitle" style={{color:'rgba(59, 61, 63, 1)',fontFamily:'PingFang SC-Light',fontWeight:'Light',width:'30rem',marginTop:'2rem'}}>{siteConfig.tagline}</div>
        <div className={styles.buttons} style={{margin:'10rem 0 0 0'}}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started"
            style={{borderRadius:'90pt',backgroundColor:'rgba(40, 117, 243, 1)',color:'white'}}>
            QUICK START
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/apache/incubator-kvrocks"
            style={{borderRadius:'90pt',border:'1px solid rgba(0, 91, 244, 1)',backgroundColor:'white',color:'rgba(0, 91, 244, 1)',display:'flex'}}>
            <div className='header-github-link' style={{marginRight:'10px'}}></div>
            GITHUB
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://slack.com/intl/zh-hk/"
            style={{borderRadius:'90pt',border:'1px solid rgba(0, 91, 244, 1)',backgroundColor:'white',color:'rgba(0, 91, 244, 1)',display:'flex',marginLeft:'2rem'}}>
            <div className='header-slack-link' style={{marginRight:'10px'}}></div>
            SLACK
          </Link>
        </div>
      </div>
      <div className="image image--main--right" style={{width:'40%'}}>
        <img src={Pic}></img>
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
