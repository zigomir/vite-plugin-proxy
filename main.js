const k2c = require('koa2-connect')
const httpProxy = require('http-proxy-middleware')
const contextMatcher = require('http-proxy-middleware/dist/context-matcher.js')

module.exports = (options = {}) => ({ _root, app }) => {
  const proxies = Object.entries(options).reduce(
    (proxies, [context, contextOptions]) =>
      proxies.set(context, httpProxy.createProxyMiddleware(context, contextOptions)),
    new Map()
  )

  return app.use(async (ctx, next) => {
    for (const context of proxies.keys()) {
      // emulate `shouldProxy` from http-proxy-middleware
      // because otherwise we might call next() more than once and break koa
      if (contextMatcher.match(context, ctx.path, ctx.req)) {
        await k2c(proxies.get(context))(ctx, next)
        break
      }
    }
    await next()
  })
}
