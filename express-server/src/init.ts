import app from './app'
import http from 'http'

const server = http.createServer(app);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`server on http://localhost:${PORT}`)
})
