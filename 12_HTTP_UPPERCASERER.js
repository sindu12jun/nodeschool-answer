require('http').createServer((request, response) => {
  if (request.method !== 'POST') {
    return;
  }

  request.pipe(
    require('through2-map')(chunk => chunk.toString().toUpperCase())
  ).pipe(response)
}).listen(process.argv[2])

