# vite-plugin-proxy

> a [vite](https://github.com/vuejs/vite) server plugin that proxies your `api` calls

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
      // pass `http-proxy` options: https://github.com/http-party/node-http-proxy#options
      proxyPlugin({
        target: 'https://reqres.in',
      }),
    ],
  })
  .listen(3000)
```

## to do

- [ ] see if I can use https://github.com/chimurai/http-proxy-middleware/ instead of `http-proxy`
- [ ] make it generic and configurable
  Learn from https://github.com/webpack/webpack-dev-server and https://github.com/chimurai/http-proxy-middleware
- [ ] publish as re-usable npm package

## to wait for

- wait for [vite](https://github.com/vuejs/vite#todos) to get config file support
- [x] confirm that vite will keep using `koa` and not express or something else – https://github.com/vuejs/vite/issues/34
