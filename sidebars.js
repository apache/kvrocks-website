/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [
        'getting-started',
        {
            "type": "category",
            "label": "References",
            collapsed: false,
            link: {
                type: 'generated-index',
            },
            items: [
                'supported-commands',
            ]
        },
    ],
};

module.exports = sidebars;
