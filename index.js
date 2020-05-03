import httpProxy from 'http-proxy'

export default (options) => ({ _root, app }) => {
  const proxy = httpProxy.createProxyServer(
    Object.assign(
      // "sane" defaults
      {
        changeOrigin: true, // this is almost always desirable
        selfHandleResponse: true, // this has to be true in order to handle `proxyRes`. Maybe don't allow it to be overridden
      },
      options
    )
  )

  proxy.on('proxyRes', (proxyRes, _req, res) => {
    const body = []
    proxyRes.on('data', (chunk) => body.push(chunk))
    proxyRes.on('end', () => {
      // res.ctx.type = 'application/json' // TODO: think about if needed
      res.ctx.body = Buffer.concat(body).toString()
      res.resolve()
    })
  })

  // Jesus saves the gzip problem: https://github.com/chimurai/http-proxy-middleware/issues/97#issuecomment-398888127
  // TODO: make this configurable? find how this is solved in webpack
  proxy.on('proxyReq', (proxyReq) => proxyReq.setHeader('accept-encoding', 'gzip;q=0,deflate,sdch'))

  return app.use(async (ctx, next) => {
    // TODO: make this configurable
    if (ctx.path.startsWith('/api')) {
      await new Promise((resolve, reject) =>
        proxy.web(ctx.req, { ...ctx.res, ctx, resolve }, {}, (error) => reject(error))
      )
    } else {
      // let vite do its magic
      await next()
    }
  })
}
