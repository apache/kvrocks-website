import React from "react"
import styles from "./index.module.css"

type CommitterData = {
    name: string,
    apacheId: string,
    githubId: string,
    isPMC: boolean,
}

// sorted by apacheId
const committers: CommitterData[] = [
    {name: 'Aleks Lozoviuk', apacheId: 'aleksraiden', githubId: 'aleksraiden', isPMC: true},
    {name: 'Donghui Liu', apacheId: 'alfejik', githubId: 'Alfejik', isPMC: true},
    {name: 'Beihao Zhou', apacheId: 'beihao', githubId: 'Beihao-Zhou', isPMC: false},
    {name: 'Binbin Zhu', apacheId: 'binbin', githubId: 'enjoy-binbin', isPMC: false},
    {name: 'Brad Lee', apacheId: 'bradlee', githubId: 'smartlee', isPMC: false},
    {name: 'Pengbo Cai', apacheId: 'caipengbo', githubId: 'caipengbo', isPMC: true},
    {name: 'Liang Chen', apacheId: 'chenliang613', githubId: 'chenliang613', isPMC: true},
    {name: 'Chris Zou', apacheId: 'chriszou', githubId: 'ChrisZMF', isPMC: false},
    {name: 'Colin Chamber', apacheId: 'colinchamber', githubId: 'ColinChamber', isPMC: false},
    {name: 'Edward Xu', apacheId: 'edwardxu', githubId: 'LindaSummer', isPMC: false},
    {name: 'Xiaoqiao He', apacheId: 'hexiaoqiao', githubId: 'Hexiaoqiao', isPMC: true},
    {name: 'Hulk Lin', apacheId: 'hulk', githubId: 'git-hulk', isPMC: true},
    {name: 'Jean-Baptiste Onofré', apacheId: 'jbonofre', githubId: 'jbonofre', isPMC: true},
    {name: 'Jean Lai', apacheId: 'jeanbone', githubId: 'jeanbone', isPMC: false},
    {name: 'Ji Huayu', apacheId: 'jihuayu', githubId: 'jihuayu', isPMC: false},
    {name: 'Miuyong Liu', apacheId: 'karelrooted', githubId: 'karelrooted', isPMC: false},
    {name: 'Xuwei Fu', apacheId: 'maplefu', githubId: 'mapleFU', isPMC: true},
    {name: 'Shang Xiong', apacheId: 'shang', githubId: 'shangxiaoxiong', isPMC: false},
    {name: 'SiLe Zhou', apacheId: 'silezhou', githubId: 'PokIsemaine', isPMC: false},
    {name: 'Xiaojun Yuan', apacheId: 'sryanyuan', githubId: 'sryanyuan', isPMC: false},
    {name: 'Ruixiang Tan', apacheId: 'tanruixiang', githubId: 'tanruixiang', isPMC: false},
    {name: 'Zili Chen', apacheId: 'tison', githubId: 'tisonkun', isPMC: true},
    {name: 'Yaroslav Stepanchuk', apacheId: 'torwig', githubId: 'torwig', isPMC: true},
    {name: 'Mingyang Liu', apacheId: 'twice', githubId: 'PragmaTwice', isPMC: true},
    {name: 'Von Gosling', apacheId: 'vongosling', githubId: 'vongosling', isPMC: true},
    {name: 'Yuan Wang', apacheId: 'wangyuan', githubId: 'ShooterIT', isPMC: true},
    {name: 'Xiaobiao Zhao', apacheId: 'xiaobiao', githubId: 'xiaobiaozhao', isPMC: false},
    {name: 'Shixi Yang', apacheId: 'yangshixi', githubId: 'Yangsx-1', isPMC: false},
    {name: 'Agnik Misra', apacheId: 'agnik', githubId: 'Jitmisra', isPMC: false},
    {name: 'Rongxing Xiao', apacheId: 'deemo', githubId: 'yezhizi', isPMC: false}
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
                        <td>{v.isPMC ? <b>{v.name}</b> : v.name}</td>
                        <td>{v.apacheId}</td>
                        <td><a target={"_blank"} href={`https://github.com/${v.githubId}`}>{v.githubId}</a></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}
