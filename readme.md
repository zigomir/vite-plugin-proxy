# vite-plugin-proxy

> a [vite](https://github.com/vuejs/vite) server plugin that proxies your `api` calls

## compatibility: node v14+

I prefer `import` to `require` 🤷‍♂️

## usage – see [/example](/example) dir

```sh
cd example
yarn
node server.js
```

## to do

- [ ] see if I can use https://github.com/chimurai/http-proxy-middleware/ instead of `http-proxy`
- [ ] make it generic and configurable
  Learn from https://github.com/webpack/webpack-dev-server and https://github.com/chimurai/http-proxy-middleware
- [ ] publish as re-usable npm package

## to wait for

- wait for [vite](https://github.com/vuejs/vite#todos) to get config file support
- [x] confirm that vite will keep using `koa` and not express or something else – https://github.com/vuejs/vite/issues/34
