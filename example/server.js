import vite from 'vite'
import proxyPlugin from '../index.js'

vite.createServer({ plugins: [proxyPlugin] }).listen(3000)
