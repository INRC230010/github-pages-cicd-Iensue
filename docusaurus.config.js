// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'My Site',
    tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',

    future: {
        v4: true,
    },

    // MODIFICADO: URL final do seu site
    url: 'https://INRCZ30010.github.io',
    // MODIFICADO: Subdiretório do seu site
    baseUrl: '/github-pages-cicd-iensue/',

    // MODIFICADO: Configurações para deploy no GitHub Pages
    organizationName: 'INRCZ30010', // Seu usuário/organização do GitHub
    projectName: 'github-pages-cicd-iensue', // O nome do seu repositório

    onBrokenLinks: 'throw',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // MODIFICADO: Link para editar no SEU repositório
                    editUrl:
                        'https://github.com/INRCZ30010/github-pages-cicd-iensue/tree/main/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // MODIFICADO: Link para editar no SEU repositório
                    editUrl:
                        'https://github.com/INRCZ30010/github-pages-cicd-iensue/tree/main/',
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: 'img/docusaurus-social-card.jpg',
            colorMode: {
                respectPrefersColorScheme: true,
            },
            navbar: {
                title: 'My Site',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        // MODIFICADO: Link para o SEU repositório
                        href: 'https://github.com/INRCZ30010/github-pages-cicd-iensue',
                        label: 'GitHub',
                        position: 'right',
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
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'X',
                                href: 'https://x.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                // MODIFICADO: Link para o SEU repositório
                                label: 'GitHub',
                                href: 'https://github.com/INRCZ30010/github-pages-cicd-iensue',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;