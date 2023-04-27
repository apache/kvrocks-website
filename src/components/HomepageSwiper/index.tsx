import React from 'react';
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import { userData, SWIPER_ANIMATION_TIME } from "@site/src/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {resolveStaticAssetsURL} from "@site/src/cdn";

const userCommentsData = [
    {
        userName: "XXX",
        userTitle: "XXXXXXXXXXX",
        img: resolveStaticAssetsURL('media/users/circl-lu.png'),
        imgTitle: 'circl.lu',
        userComment: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        userName: "XXX",
        userTitle: "XXXXXXXXXXX",
        img: resolveStaticAssetsURL('media/users/huolala.png'),
        imgTitle: 'huolala',
        userComment: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    }
]

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

    const sliderItemList = userCommentsData.map((item) => {
        return (
            <div>
                <div className={styles.commentsItemContainer}>
                    <div className={styles.userContainer}>
                        <div>
                            <div className={styles.user}>
                                {item.userName}
                            </div>
                            <div className={styles.userTitle}>
                                {item.userTitle}
                            </div>
                        </div>
                        <div>
                            <div className={styles.userImgContainer}>
                                <img src={item.img} srcSet={item.img} alt={item.imgTitle} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.userCommentContainer}>
                        <div className={styles.innerUserCommentContainer}>
                            <div className={styles.userComment}>
                                {item.userComment}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    return (
        <>
            <div className={styles.swiperTitle}>
                <h1>Who uses Kvrocks</h1>
            </div>

            <div className={styles.sliderContainer}>
                <div>
                    <Slider {...sliderSettings}>
                        {sliderItemList}
                    </Slider>
                </div>
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
