import React from "react";

const versions = [
    {
        version: '2.4.0',
        vtag: '2.4.0-incubating'
    },
    {
        version: '2.3.0',
        vtag: '2.3.0-incubating'
    },
    {
        version: '2.2.0',
        vtag: '2.2.0-incubating'
    },
    {
        version: '2.1.0',
        vtag: '2.1.0-incubating'
    },
]

type ReleaseData = {
    name: string,
    archive: string,
    checksum: string,
    signature: string,
}

function createReleaseData(version: string, vtag?: string): ReleaseData {
    const fixedVTag = vtag ?? version;
    const archive = `https://downloads.apache.org/kvrocks/${version}/apache-kvrocks-${fixedVTag}-src.tar.gz`
    return {
        name: fixedVTag,
        archive: archive,
        checksum: `${archive}.sha512`,
        signature: `${archive}.asc`,
    };
}

export default function Releases(): JSX.Element {
    const releases = versions.map(({ version, vtag }) => createReleaseData(version, vtag))
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
