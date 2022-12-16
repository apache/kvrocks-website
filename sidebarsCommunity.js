/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  community: [
    'community',
    {
      "type": "category",
      "label": "Internals",
      collapsed: true,
      link: {
        type: 'generated-index',
      },
      items: [
        'data-structure-on-rocksdb',
      ]
    },
    {
      "type": "category",
      "label": "Releases",
      collapsed: false,
      link: {
        type: 'generated-index',
      },
      items: [
        'create-a-release',
        'verify-a-release-candidate',
      ]
    },
    {
      "type": "category",
      "label": "Committers",
      collapsed: false,
      link: {
        type: 'generated-index',
      },
      items: [
        'vote-a-core-developer',
      ]
    }
  ],
};

module.exports = sidebars;
