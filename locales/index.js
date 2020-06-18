module.exports = {
  locales: [
    {
      code: 'ru',
      iso: 'ru-RU',
      name: 'Russian',
      file: 'ru.json'
    }
  ],
  defaultLocale: 'ru',
  seo: true,
  lazy: true,
  strategy: 'no_prefix',
  detectBrowserLanguage: {
    cookieKey: 'redirected',
    useCookie: true
  },
  langDir: 'locales/',
  parsePages: false,
  pages: {},
  vueI18n: {
    fallbackLocale: 'ru'
  }
}
