import React from "react";
import {ImageList, ImageListItem} from "@mui/material";
import Link from "@docusaurus/Link";

export default function UserLogos(): JSX.Element {
    return <ImageList cols={5}>
        {userData.map((item) => (
            <ImageListItem key={item.img} sx={{ width: 140, height: 60, maxWidth: "94%", maxHeight: "94%" }}>
                <Link target={"_blank"} rel={"noopener noreferrer"} href={item.site}>
                    <img src={item.img} srcSet={item.img} alt={item.title}/>
                </Link>
            </ImageListItem>
        ))}
    </ImageList>
}

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
    }
]
