# vite-plugin-proxy

> what `devServer.proxy` is for `webpack-dev-server`, `vite-plugin-proxy` is for `vite`

> it's a `vite` plugin that proxies your `api` calls

> shamelessly stolen from https://github.com/sunyongjian/koa2-proxy-middleware

## usage

> also see [/example](/example) dir

```sh
npm install vite-plugin-proxy --save-dev
# or
yarn add -D vite-plugin-proxy
```

```js
// server.js
const vite = require('vite')
const proxyPlugin = require('vite-plugin-proxy')

// or, if you're using "type": "module", like I am in example directory:
// import vite from 'vite'
// import proxyPlugin from 'vite-plugin-proxy'

vite
  .createServer({
    plugins: [
      proxyPlugin({
        // for context matching see https://github.com/chimurai/http-proxy-middleware#context-matching
        '/api': {
          // for option docs see https://github.com/chimurai/http-proxy-middleware#options
          target: 'https://reqres.in',
          changeOrigin: true,
        },
      }),
    ],
  })
  .listen(3000)
```

```sh
node server.js
```

## TODO

- [x] confirm that vite will keep using `koa` and not express or something else – https://github.com/vuejs/vite/issues/34
- wait for [vite](https://github.com/vuejs/vite#todos) to get config file support
