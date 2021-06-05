module.exports = {
  outputDir: process.env.VM_TARGET ? 'lib' : 'dist',
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        prependData:
          "@import '@/vuement/scss/_variables.scss';\n@import '@/vuement/scss/_mixins.scss';",
      },
    },
  },
  pwa: {
    manifestOptions: {
      display: 'fullscreen',
      start_url: '.',
    },
    name: 'Vuement',
    themeColor: '#000000',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    iconPaths: {
      favicon32: 'pwa/logo.png',
      favicon16: 'pwa/logo.png',
      appleTouchIcon: 'pwa/splash/apple-icon-180.png',
      maskIcon: 'pwa/logo.png',
      msTileImage: 'pwa/splash/manifest-icon-512.png',
    },
  },
};
