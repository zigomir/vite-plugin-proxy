import k2c from 'koa2-connect'
import httpProxy from 'http-proxy-middleware'
import ptr from 'path-to-regexp'

export default (options = {}) => ({ _root, app }) => {
  return app.use(async (ctx, next) => {
    for (const route of Object.keys(options)) {
      if (ptr.pathToRegexp(route).test(ctx.path)) {
        await k2c(httpProxy.createProxyMiddleware(options[route]))(ctx, next)
        break
      }
    }
    await next()
  })
}
