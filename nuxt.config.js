require('dotenv').config()
const i18n = require('./locales')

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['normalize.css/normalize.css', '@/assets/styles.scss'],
  styleResources: {
    scss: ['@/assets/variables.scss']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment'
  ],
  /*
   ** Moment
   */
  moment: {
    defaultLocale: 'ru',
    locales: ['ru']
  },
  /*
   ** Google fonts
   */
  webfontloader: {
    google: {
      families: ['Open+Sans:300,400,600&display=swap']
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',
    // Dpc: https://github.com/rubystarashe/nuxt-vuex-localstorage
    [
      'nuxt-vuex-localstorage',
      {
        localStorage: ['store']
      }
    ],
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    ['nuxt-i18n', i18n],
    // Doc: https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        autoprefixer: true
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // for README.md
      config.module.rules.push({
        enforce: 'pre',
        test: /\.md$/,
        loader: 'raw-loader',
        exclude: /(node_modules)/
      })
    }
  }
}
