import React from "react";

type ReleaseData = {
    name: string,
    archive: string,
    checksum: string,
    signature: string,
}

type ReleasesProps = {
    data: ReleaseData[],
}

export default function Releases({data}: ReleasesProps): JSX.Element {
    return <>
        <table className="table table-hover sortable">
            <thead>
            <tr>
                <th><b>Name</b></th>
                <th><b>Archive</b></th>
                <th><b>Checksum</b></th>
                <th><b>Signature</b></th>
            </tr>
            </thead>
            <tbody>
            {data.map(v => (
                <>
                    <tr>
                        <td>{v.name}</td>
                        <td><a href={v.archive}>tarball</a></td>
                        <td><a href={v.checksum}>sha512</a></td>
                        <td><a href={v.signature}>asc</a></td>
                    </tr>
                </>
            ))}
            </tbody>
        </table>
    </>
}
