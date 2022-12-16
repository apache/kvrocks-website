/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [
        'getting-started',
        'namespace',
        'cluster',
        'replication',
        {
            "type": "category",
            "label": "Operation",
            collapsed: false,
            link: {
                type: 'generated-index',
            },
            items: [
                'backup',
                'kvrocks-exporter',
            ]
        },
        {
            "type": "category",
            "label": "References",
            collapsed: false,
            link: {
                type: 'generated-index',
            },
            items: [
                'supported-commands',
                'info-sections',
            ]
        },
    ],
};

module.exports = sidebars;
