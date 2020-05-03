import vite from 'vite'
import proxyPlugin from '../main.js'

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365

vite
  .createServer({
    plugins: [
      proxyPlugin({
        '/api/(.*)': {
          // for option docs see https://github.com/chimurai/http-proxy-middleware#options
          target: 'https://reqres.in',
          changeOrigin: true,
          onProxyRes: (proxyRes) => {
            // cache all responses for faster development
            // use browser's "Disable cache" in dev tools when you need to update API responses
            proxyRes.headers['Cache-Control'] = `public, max-age=${ONE_YEAR_IN_SECONDS}`
            // delete headers you don't want
            delete proxyRes.headers['pragma']
            delete proxyRes.headers['expires']
            delete proxyRes.headers['etag']
          },
        },
      }),
    ],
  })
  .listen(3000)
