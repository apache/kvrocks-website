import React from "react"
import styles from "./index.module.css"
import Link from "@docusaurus/Link";

// Please sort the data by title in alphabetical order.
const userData = [
    { title: 'Ahoy Games', img: '/media/users/ahoygames.png', site: 'https://www.ahoygames.com/' },
    { title: 'BaiShanCloud', img: '/media/users/baishancloud.png', site: 'https://intl.baishancloud.com/' },
    { title: 'Baidu', img: '/media/users/baidu.png', site: 'https://www.baidu.com/' },
    { title: 'CIRCL', img: '/media/users/circl-lu.png', site: 'https://circl.lu/' },
    { title: 'CTrip', img: '/media/users/trip.jpeg', site: 'https://ctrip.com/' },
    { title: 'CVAT', img: '/media/users/cvat.png', site: 'https://www.cvat.ai/' },
    { title: 'CoinIndex', img: '/media/users/coinindex.png', site: 'https://coinindex.agency/' },
    { title: 'Datavisor', img: '/media/users/datavisor.png', site: 'https://datavisor.com/' },
    { title: 'Gcore', img: '/media/users/gcore.jpg', site: 'https://gcore.com/' },
    { title: 'Huolala', img: '/media/users/huolala.png', site: 'https://www.huolala.cn/' },
    { title: 'Jiatou', img: '/media/users/jiatou.png', site: 'https://www.jiaads.com/' },
    { title: 'Meitu', img: '/media/users/meitu.png', site: 'https://pc.meitu.com/' },
    { title: 'Netease Hangzhou Institute', img: '/media/users/netease.jpg', site: 'https://research.netease.com/' },
    { title: 'Opera', img: '/media/users/opera.png', site: 'https://opera.com' },
    { title: 'Ruangao Mobile Private Marketplace', img: '/media/users/rgyun.png', site: 'https://www.rgyun.com/' },
    { title: 'Shoplazza', img: '/media/users/shoplazza.png', site: 'https://www.shoplazza.com/' },
    { title: 'U-NEXT', img: '/media/users/u-next.png', site: 'https://unext.jp/' },
    { title: 'Xueqiu', img: '/media/users/xueqiu.png', site: 'https://xueqiu.com/' },
    { title: 'ZTO Express', img: '/media/users/zto.png', site: 'https://www.zto.com/' },
    { title: 'iFlytek ADX', img: '/media/users/iflytek-adx.jpg', site: 'https://www.voiceads.cn/' },
    { title: 'iQIYI', img: '/media/users/iqiyi.png', site: 'https://www.iqiyi.com/' },
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
