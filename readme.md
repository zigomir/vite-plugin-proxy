# vite-plugin-proxy

# ⚠️ [vite now has own proxy](https://github.com/vuejs/vite#dev-server-proxy) – so don't use this plugin

> what `devServer.proxy` is for `webpack-dev-server`, `vite-plugin-proxy` is for `vite`

> it's a `vite` plugin that proxies your requests

## usage

> also see [/example](/example) dir

```sh
npm install vite-plugin-proxy --save-dev
# or
yarn add -D vite-plugin-proxy
```

```js
// vite.config.js # or vite.config.ts
const proxyPlugin = require('vite-plugin-proxy')

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
}
```

## credit

mostly shamelessly stolen from https://github.com/sunyongjian/koa2-proxy-middleware
