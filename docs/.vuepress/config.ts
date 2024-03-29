import { defaultTheme, defineUserConfig } from 'vuepress'
import { sidebar } from './configs'

import { searchPlugin } from '@vuepress/plugin-search'
import { shikiPlugin } from '@vuepress/plugin-shiki'
const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  base: '/',
  head: [
    [
      'script',
      { id: 'scriptImporter' },
      `
    (function() { 
    var script = document.createElement("script"); 
    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
    setTimeout(() => document.body.append(script))
    })(); 
`,
    ],
  ],

  // site-level locales config
  locales: {
    '/': {
      lang: 'en-US',
      title: 'T3000 API Documentation - Temco Controls',
      description: 'This is T3000 API Documentation',
    },
  },

  theme: defaultTheme({
    logo: '/images/logo.png',

    docsDir: 'docs',

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // sidebar
        sidebar: sidebar.en,

        // page meta
        editLinkText: 'Edit this page on GitHub',
      },
    },
    contributors: false,

    themePlugins: {
      // only enable git plugin in production mode
      // git: isProd,
    },
  }),

  markdown: {},

  plugins: [
    [
      searchPlugin({
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      }),
      shikiPlugin(
        isProd
          ? {
              theme: 'dark-plus',
            }
          : undefined,
      ),
    ],
  ],
})
