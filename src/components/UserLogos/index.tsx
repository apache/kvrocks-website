import React from "react"
import styles from "./index.module.css"
import Link from "@docusaurus/Link";

const userData = [
    {
        img: '/media/users/meitu.png',
        title: 'Meitu',
        site: 'https://pc.meitu.com/',
    },
    {
        img: '/media/users/trip.jpeg',
        title: 'CTrip',
        site: 'https://ctrip.com/',
    },
    {
        img: '/media/users/jiatou.png',
        title: 'Jiatou',
        site: 'https://www.jiaads.com/',
    },
    {
        img: '/media/users/baidu.png',
        title: 'Baidu',
        site: 'https://www.baidu.com/',
    },
    {
        img: '/media/users/baishancloud.png',
        title: 'BaiShanCloud',
        site: 'https://intl.baishancloud.com/',
    },
    {
        img: '/media/users/rgyun.png',
        title: 'Ruangao Mobile Private Marketplace',
        site: 'https://www.rgyun.com/',
    },
    {
        img: '/media/users/xueqiu.png',
        title: 'Xueqiu',
        site: 'https://xueqiu.com/',
    },
    {
        img: '/media/users/u-next.png',
        title: 'U-NEXT',
        site: 'https://unext.jp/',
    },
    {
        img: '/media/users/circl-lu.png',
        title: 'circl.lu',
        site: 'https://circl.lu/',
    },
    {
        img: '/media/users/datavisor.png',
        title: 'datavisor',
        site: 'https://datavisor.com/',
    },
    {
        img: '/media/users/huolala.png',
        title: 'huolala',
        site: 'https://www.huolala.cn/',
    },
    {
        img: '/media/users/opera.png',
        title: 'Opera',
        site: 'https://opera.com',
    },
    {
        img: '/media/users/coinindex.png',
        title: 'CoinIndex',
        site: 'https://coinindex.agency/',
    },
]


export default function UserLogos(): JSX.Element {
    return <>
        <div className={styles.imgWrapper}>{
            userData.map(item => (
                <div className={styles.imgBox} key={item.title}>
                    <Link className={styles.link} rel={"noopener noreferrer"} target={"_blank"} href={item.site}>
                        <img src={item.img} srcSet={item.img} alt={item.title}/>
                    </Link>
                </div>
            ))
        }</div>
    </>
}
