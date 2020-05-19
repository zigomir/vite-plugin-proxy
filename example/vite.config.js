const proxyPlugin = require('../main.js')

module.exports = {
  plugins: [
    proxyPlugin({
      '/api': {
        // for option docs see https://github.com/chimurai/http-proxy-middleware#options
        target: 'https://reqres.in',
        changeOrigin: true,
        onProxyRes: (proxyRes) => {
          // cache all responses for faster development
          // use browser's "Disable cache" in dev tools when you need to update API responses
          proxyRes.headers['Cache-Control'] = `public, max-age=${ONE_YEAR_IN_SECONDS}`
          // delete headers you don't want
          delete proxyRes.headers['expires']
        },
      },
    }),
  ],
  // or use vite's proxy directly: https://github.com/vuejs/vite#dev-server-proxy
  // proxy: {
  //   '/api': {
  //     target: 'https://reqres.in',
  //     changeOrigin: true,
  //   },
  // },
}
