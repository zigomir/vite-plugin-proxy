# vite-plugin-proxy

> a [vite](https://github.com/vuejs/vite) server plugin that proxies your `api` calls
> basically a fork of https://github.com/sunyongjian/koa2-proxy-middleware

## compatibility: node v14+

I prefer `import` to `require` 🤷‍♂️

## usage

> also see [/example](/example) dir

```js
import vite from 'vite'
import proxyPlugin from '../index.js'

vite
  .createServer({
    plugins: [
      proxyPlugin({
        '/api/(.*)': {
          // for option docs see https://github.com/chimurai/http-proxy-middleware#options
          target: 'https://reqres.in',
          changeOrigin: true,
        },
      }),
    ],
  })
  .listen(3000)
```

## to wait for

- wait for [vite](https://github.com/vuejs/vite#todos) to get config file support
- [x] confirm that vite will keep using `koa` and not express or something else – https://github.com/vuejs/vite/issues/34
