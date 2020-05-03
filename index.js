import httpProxy from 'http-proxy'

// make all this configurable
const proxy = httpProxy.createProxyServer({
  target: 'https://reqres.in',
  secure: false,
  changeOrigin: true, // this is almost always desirable
  selfHandleResponse: true, // except this one I suppose
})

proxy.on('proxyRes', (proxyRes, _req, res) => {
  let body = ''
  proxyRes.on('data', (chunk) => (body += chunk))
  proxyRes.on('end', () => {
    res.ctx.type = 'application/json'
    res.ctx.body = body
    res.resolve()
  })
})

// Jesus saves the gzip problem: https://github.com/chimurai/http-proxy-middleware/issues/97#issuecomment-398888127
// TODO: make this configurable? find how this is solved in webpack
proxy.on('proxyReq', (proxyReq) => proxyReq.setHeader('accept-encoding', 'gzip;q=0,deflate,sdch'))

export default ({ _root, app }) => {
  app.use(async (ctx, next) => {
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
