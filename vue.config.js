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
};
