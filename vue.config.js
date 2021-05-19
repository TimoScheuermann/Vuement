module.exports = {
  outputDir: process.env.TC_TARGET ? 'lib' : 'dist',
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        prependData:
          "@import '@/tcComponents/scss/_variables.scss';\n@import '@/tcComponents/scss/_mixins.scss';",
      },
    },
  },
  pwa: {
    manifestOptions: {
      display: 'fullscreen',
      start_url: '.',
    },
    name: 'TC Components',
    themeColor: '#000',
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
