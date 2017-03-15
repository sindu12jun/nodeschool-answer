require('http').createServer((request, response) => {
  if (request.method !== 'GET') {
    return;
  }
  const { pathname, query:{ iso } } = require('url').parse(request.url, true);
  const date = new Date(iso)
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(
    pathname === '/api/unixtime' ?
      { unixtime: date.getTime() } :
      pathname === '/api/parsetime' ?
        {
          hour: date.getHours(),
          minute: date.getMinutes(),
          second: date.getSeconds()
        } : ''
  ))
}).listen(process.argv[2])
