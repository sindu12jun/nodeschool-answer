require('net').createServer(socket => {
  socket.end(function () {
    return require('moment')().format('YYYY-MM-DD HH:mm') + '\n'
  }())
}).listen(process.argv[2])
