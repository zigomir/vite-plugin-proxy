import vite from 'vite'
import proxyPlugin from '../index.js'

vite
  .createServer({
    plugins: [
      // pass `http-proxy` options: https://github.com/http-party/node-http-proxy#options
      proxyPlugin({
        target: 'https://reqres.in',
      }),
    ],
  })
  .listen(3000)
