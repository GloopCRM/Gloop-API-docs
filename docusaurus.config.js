const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {

    i18n: {
        defaultLocale: "he",
        locales: ["he"],
        localeConfigs: {
            'he': {
                direction: "rtl"
            }
        }
    },
    title: 'Goop Docs',
    tagline: '<3',
    url: 'https://api.gloopcrm.co.il/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon-32x32',
    organizationName: 'GloopCRM', // Usually your GitHub org/user name.
    projectName: 'Gloop-API-docs', // Usually your repo name.
    themeConfig: {
        algolia: {
            apiKey: 'YOUR_API_KEY',
            indexName: 'YOUR_INDEX_NAME',

            // Optional: see doc section below
            contextualSearch: true,

            // Optional: see doc section below
            // appId: 'YOUR_APP_ID',

            // Optional: Algolia search parameters
            // searchParameters: {},

            //... other Algolia params
        },
        navbar: {
            title: 'Gloop API',
            logo: {
                alt: 'thebase logo',
                src: 'img/tb-logo.png',
            },
            items: [
                // {
                //     type: 'doc',
                //     position: 'left',
                //     docId: 'api/introduction/overview',
                //     label: 'API',
                // },
                // {
                //     type: 'doc',
                //     position: 'left',
                //     docId: 'changelog',
                //     label: 'לוג שדרוגים',
                // },
                // { to: '/terms', label: 'תנאי שימוש ומדיניות פרטיות', position: 'left' },
                {
                    href: 'https://www.thebase.co.il',
                    label: 'TheBase.co.il',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'light',
            links: [
                //     {
                //     title: 'Docs',
                //     items: [{
                //         label: 'privacy policy',
                //         to: '/docs/comapny/privacy-policy',
                //     }, ],
                // }, 
            ],
            copyright: `Copyright © ${new Date().getFullYear()} TheBase`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                googleAnalytics: {
                    trackingID: 'G-GW4RMXM6LS',
                    // Optional fields.
                    anonymizeIP: true, // Should IPs be anonymized?
                },
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
