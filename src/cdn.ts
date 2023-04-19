export function resolveStaticAssetsURL(path: string) {
    if (!path.startsWith('/')) {
        path = '/' + path;
    }

    if (process.env.NODE_ENV === 'development') {
        return path;
    }

    // The DNS for cdn.jsdelivr.net and fastly.jsdelivr.net cannot be accessed from some regions.
    // For now, gcore.jsdelivr.net is still accessible, but its future availability is uncertain.
    return 'https://gcore.jsdelivr.net/gh/apache/incubator-kvrocks-website@main/static' + path;
}
