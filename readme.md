# vite-plugin-proxy

> a [vite](https://github.com/vuejs/vite) server plugin that proxies your `api` calls
> basically a fork of https://github.com/sunyongjian/koa2-proxy-middleware

## compatibility: node v14+

I prefer `import` to `require` 🤷‍♂️

## usage

> also see [/example](/example) dir

```sh
npm install vite-plugin-proxy --save-dev
# or
yarn add -D vite-plugin-proxy
```

```js
// server.js
import vite from 'vite'
import proxyPlugin from 'vite-plugin-proxy'

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
