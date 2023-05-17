import React from 'react';
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import { userData, SWIPER_ANIMATION_TIME } from "@site/src/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomepageSwiper(): JSX.Element {
    function splitUserData(userData) {
        let mid = Math.ceil(userData.length / 2)
        const userLogoFirstLine = userData.slice(0, mid)
        const userLogoSecondLine = userData.slice(mid)
        return [userLogoFirstLine, userLogoSecondLine]
    }

    const [userLogoFirstLine, userLogoSecondLine] = splitUserData(userData)

    const firstSwiperItemList = userLogoFirstLine.map((item) => {
        return (
            <div className={styles.swiperItemContainer} key={item.title}>
                <Link className={styles.link} href={item.site}>
                    <img src={item.img} srcSet={item.img} alt={item.title} />
                </Link>
            </div>
        )
    })

    const secondSwiperItemList = userLogoSecondLine.map((item) => {
        return (
            <div className={styles.swiperItemContainer} key={item.title}>
                <Link className={styles.link} href={item.site}>
                    <img src={item.img} srcSet={item.img} alt={item.title} />
                </Link>
            </div>
        )
    })

    return (
        <>
            <div className={styles.swiperTitle}>
                <h1>Who uses Kvrocks</h1>
            </div>

            <div className={styles.swiperContainer}>
                <div className={styles.swiperReverse}
                    style={{
                        animation: `${styles["reverse-move"]} ${SWIPER_ANIMATION_TIME * userLogoFirstLine.length}s infinite linear`
                    }}>
                    {firstSwiperItemList}
                    {firstSwiperItemList}
                </div>
            </div>

            <div className={styles.swiperContainer} style={{ flexDirection: 'row-reverse' }}>
                <div className={styles.swiper}
                    style={{
                        animation: `${styles.move} ${SWIPER_ANIMATION_TIME * userLogoSecondLine.length}s infinite linear`
                    }}>
                    {secondSwiperItemList}
                    {secondSwiperItemList}
                </div>
            </div>
        </>
    )
}
