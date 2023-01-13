import React from "react"
import styles from "./index.module.css"

type CommitterData = {
    name: string,
    apacheId: string,
    githubId: string,
}

// sorted by apacheId
const committers: CommitterData[] = [
    {name: 'Donghui Liu', apacheId: 'alfejik', githubId: 'Alfejik'},
    {name: 'Brad Lee', apacheId: 'bradlee', githubId: 'smartlee'},
    {name: 'Pengbo Cai', apacheId: 'caipengbo', githubId: 'caipengbo'},
    {name: 'Liang Chen', apacheId: 'chenliang613', githubId: 'chenliang613'},
    {name: 'Chris Zou', apacheId: 'chriszou', githubId: 'ChrisZMF'},
    {name: 'Colin Chamber', apacheId: 'colinchamber', githubId: 'ColinChamber'},
    {name: 'Xiaoqiao He', apacheId: 'hexiaoqiao', githubId: 'Hexiaoqiao'},
    {name: 'Hulk Lin', apacheId: 'hulk', githubId: 'git-hulk'},
    {name: 'Jean-Baptiste Onofré', apacheId: 'jbonofre', githubId: 'jbonofre'},
    {name: 'Jean Lai', apacheId: 'jeanbone', githubId: 'jeanbone'},
    {name: 'Miuyong Liu', apacheId: 'karelrooted', githubId: 'karelrooted'},
    {name: 'Shang Xiong', apacheId: 'shang', githubId: 'shangxiaoxiong'},
    {name: 'Ruixiang Tan', apacheId: 'tanruixiang', githubId: 'tanruixiang'},
    {name: 'Zili Chen', apacheId: 'tison', githubId: 'tisonkun'},
    {name: 'Yaroslav Stepanchuk', apacheId: 'torwig', githubId: 'torwig'},
    {name: 'Mingyang Liu', apacheId: 'twice', githubId: 'PragmaTwice'},
    {name: 'Von Gosling', apacheId: 'vongosling', githubId: 'vongosling'},
    {name: 'Yuan Wang', apacheId: 'wangyuan', githubId: 'ShooterIT'},
    {name: 'Xiaobiao Zhao', apacheId: 'xiaobiao', githubId: 'xiaobiaozhao'},
]

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
                                 src={`https://github.com/${v.githubId}.png`} alt={v.name}/></td>
                        <td>{v.name}</td>
                        <td>{v.apacheId}</td>
                        <td><a target={"_blank"} href={`https://github.com/${v.githubId}`}>{v.githubId}</a></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}
