import React from "react"
import styles from "./index.module.css"
import Link from "@docusaurus/Link";
import {userData} from "../../constants"

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
