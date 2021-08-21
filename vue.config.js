module.exports = {
  outputDir: process.env.VM_TARGET ? 'lib' : 'dist',
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
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
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      exclude: [/netlify.toml/],
    },
    manifestOptions: {
      display: 'fullscreen',
      start_url: '.',
      icons: [
        {
          src: 'pwa/splash/manifest-icon-512.png',
          size: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa/splash/manifest-icon-512.png',
          size: '384x384',
          type: 'image/png',
        },
      ],
    },
    name: 'Vuement',
    themeColor: '#000000',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    iconPaths: {
      favicon32: 'pwa/logo.png',
      favicon16: 'pwa/logo.png',
      appleTouchIcon: 'pwa/splash/manifest-icon-512.png',
      maskIcon: 'pwa/logo.png',
      msTileImage: 'pwa/splash/manifest-icon-512.png',
    },
    icons: [
      {
        src: 'pwa/splash/manifest-icon-512.png',
        size: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa/splash/manifest-icon-512.png',
        size: '384x384',
        type: 'image/png',
      },
    ],
  },
};
