//服务器端:
const net = require('net')
const server = net.createServer()
server.on('connection', clientSocket => {
  console.log('有新的连接进来了')
  clientSocket.write('hello')
})
server.listen(3000, () => {
  console.log('server running')
})
