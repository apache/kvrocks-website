import React from "react"
import styles from "./index.module.css"
import Link from "@docusaurus/Link";

const userData = [
    {
        img: '/media/users/cvat.svg',
        title: 'CVAT',
        site: 'https://www.cvat.ai/',
    },
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
        title: 'CIRCL',
        site: 'https://circl.lu/',
    },
    {
        img: '/media/users/datavisor.png',
        title: 'Datavisor',
        site: 'https://datavisor.com/',
    },
    {
        img: '/media/users/huolala.png',
        title: 'Huolala',
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
    {
        img: '/media/users/ahoygames.png',
        title: 'Ahoy Games',
        site: 'https://www.ahoygames.com/',
    },
    {
        img: '/media/users/iflytek-adx.jpg',
        title: 'iFlytek ADX',
        site: 'https://www.voiceads.cn/',
    },
    {
        img: '/media/users/shoplazza.png',
        title: 'Shoplazza',
        site: 'https://www.shoplazza.com/',
    },
    {
        img: '/media/users/netease.jpg',
        title: 'Netease Hangzhou Institute',
        site: 'https://research.netease.com/',
    },
    {
        img: '/media/users/zto.png',
        title: 'ZTO Express',
        site: 'https://www.zto.com/',
    },
    {
        img: '/media/users/iqiyi.png',
        title: 'iQIYI',
        site: 'https://www.iqiyi.com/',
    },
    {
        img: '/media/users/gcore.jpg',
        title: 'Gcore',
        site: 'https://gcore.com/',
    }
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
