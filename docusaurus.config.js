// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache Kvrocks (Incubating)',
  tagline: 'Apache Kvrocks is a distributed key value NoSQL database that uses RocksDB as storage engine and is compatible with Redis protocol.',
  url: 'https://kvrocks.apache.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',

  organizationName: 'apache',
  projectName: 'incubator-kvrocks-website',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
        'zh-CN': {label: "简体中文"},
      },
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'download',
        path: 'download',
        routeBasePath: 'download',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: "/docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/apache/incubator-kvrocks-website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/apache/incubator-kvrocks-website/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Apache Kvrocks',
        logo: {
          alt: 'apache-kvrocks',
          src: 'img/logo.svg',
        },
        items: [
          {type: 'doc', docId: 'supported-commands', position: 'right', label: 'Docs'},
          {type: 'doc', docId: 'index', position: 'right', label: 'Community', docsPluginId: 'community'},
          {to: '/blog', label: 'Blog', position: 'right'},
          {to: '/download', label: 'Download', position: 'right'},
          {
            type: 'dropdown',
            label: 'ASF',
            position: 'right',
            items: [
              {label: 'Foundation', to: 'https://www.apache.org/'},
              {label: 'License', to: 'https://www.apache.org/licenses/'},
              {label: 'Events', to: 'https://www.apache.org/events/current-event'},
              {label: 'Security', to: 'https://www.apache.org/security/'},
              {label: 'Sponsorship', to: 'https://www.apache.org/foundation/sponsorship.html'},
              {label: 'Privacy', to: 'https://www.apache.org/foundation/policies/privacy.html'},
              {label: 'Thanks', to: 'https://www.apache.org/foundation/thanks.html'}
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/apache/incubator-kvrocks',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Supported Commands',
                to: '/docs/supported-commands',
              },
              {
                label: 'Server Installation',
                to: '/docs/server-installation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/kvrockscommunity/shared_invite/zt-p5928e3r-OUAK8SUgC8GOceGM6dAz6w',
              },
              {
                label: 'Issue Tracker',
                href: 'https://github.com/apache/incubator-kvrocks/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/apache/incubator-kvrocks',
              },
            ],
          },
        ],
        logo: {
            alt: 'Apache Incubator logo',
            src: 'img/apache-incubator.svg',
            href: 'https://incubator.apache.org/'
        },
        copyright: `<div style="text-align: left;">
          <div>
            <p style="font-family: Avenir-Medium;font-size: 14px;color: #999;line-height: 20px;"> Apache Kvrocks is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF. </p>
          </div>
          <div style="border-top: 1px solid #ccc;min-height: 60px;line-height: 20px;text-align: center;font-family: Avenir-Medium;font-size: 14px;color: #999;display: flex;align-items: center;"><span>Copyright © ${new Date().getFullYear()} The Apache Software Foundation. Apache Kvrocks, Kvrocks, and its feather logo are trademarks of The Apache Software Foundation.</span></div>
        </div>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    themes: [
      [require.resolve("@easyops-cn/docusaurus-search-local"), { hashed: true }],
    ]
};

module.exports = config;
