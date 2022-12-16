import React from "react";

const versions = [
    '2.2.0',
    '2.1.0',
]

type ReleaseData = {
    name: string,
    archive: string,
    checksum: string,
    signature: string,
}

function createReleaseData(version: string): ReleaseData {
    const vtag = `${version}-incubating`
    const archive = `https://downloads.apache.org/incubator/kvrocks/${version}/apache-kvrocks-${vtag}-src.tar.gz`
    return {
        name: vtag,
        archive: archive,
        checksum: `${archive}.sha512`,
        signature: `${archive}.asc`,
    };
}

export default function Releases(): JSX.Element {
    const releases = versions.map(version => createReleaseData(version))
    return <>
        <table>
            <thead>
            <tr>
                <th><b>Name</b></th>
                <th><b>Archive</b></th>
                <th><b>Checksum</b></th>
                <th><b>Signature</b></th>
            </tr>
            </thead>
            <tbody>
            {releases.map(v => (
                <tr key={v.name}>
                    <td>{v.name}</td>
                    <td><a href={v.archive}>tarball</a></td>
                    <td><a href={v.checksum}>sha512</a></td>
                    <td><a href={v.signature}>asc</a></td>
                </tr>
            ))}
            </tbody>
        </table>
    </>
}
