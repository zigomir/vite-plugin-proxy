import k2c from 'koa2-connect'
import httpProxy from 'http-proxy-middleware'
import contextMatcher from 'http-proxy-middleware/dist/context-matcher.js'

export default (options = {}) => ({ _root, app }) => {
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
