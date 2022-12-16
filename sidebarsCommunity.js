/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  community: [
    'community',
    {
      "type": "category",
      "label": "Releases",
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
