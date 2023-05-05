export function resolveStaticAssetsURL(path: string) {
    if (!path.startsWith('/')) {
        path = '/' + path;
    }

    return path
}
