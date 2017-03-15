require('http').createServer((request, response) => {
  require('fs').createReadStream(process.argv[3]).pipe(response)
}).listen(process.argv[2])
