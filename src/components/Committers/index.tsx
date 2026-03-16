import React from "react"
import styles from "./index.module.css"

const people = require("@site/src/data/people.json");

type CommitterData = {
    name: string,
    apacheId: string,
    githubId: string,
    isPMC: boolean,
}

const committers: CommitterData[] = people.committers;
const placeholderAvatar = "/img/avatar-placeholder.svg";

function avatarPath(githubId: string): string {
    return `/generated/avatars/github/${githubId}.png`;
}

export default function Committers(): JSX.Element {
    return <>
        <table>
            <thead>
            <tr>
                <th><b>Avatar</b></th>
                <th><b>Name</b></th>
                <th><b>Apache ID</b></th>
                <th><b>GitHub ID</b></th>
            </tr>
            </thead>
            <tbody>
            {committers
                .sort((c0, c1) => c0.apacheId.localeCompare(c1.apacheId))
                .map(v => (
                    <tr key={v.name}>
                        <td><img width={64} className={styles.contributorAvatar}
                                 src={avatarPath(v.githubId)}
                                 onError={(event) => {
                                     event.currentTarget.onerror = null;
                                     event.currentTarget.src = placeholderAvatar;
                                 }}
                                 alt={v.name}/></td>
                        <td>{v.isPMC ? <b>{v.name}</b> : v.name}</td>
                        <td>{v.apacheId}</td>
                        <td><a target={"_blank"} href={`https://github.com/${v.githubId}`}>{v.githubId}</a></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}
