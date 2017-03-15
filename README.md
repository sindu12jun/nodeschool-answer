# HELLO WORLD
```
console.log('HELLO WORLD')
```
# BABY STEPS
```
console.log(
  process.argv.splice(2).reduce((prev, next) => Number(prev) + Number(next))
)
```
# MY FIRST IO!
```
console.log(require('fs').readFileSync(process.argv[2]).toString().split('\n').length - 1);
```
# MY FIRST ASYNC I/O!
```
require('fs').readFile(process.argv[2], (err, data) => {
  if (err) return console.err(err);
  console.log(data.toString().split('\n').length - 1);
})
```
# FILTERED LS
```
require('fs').readdir(
  process.argv[2], (err, list) => {
    if (err) return console.err(err);
    list
      .filter(file => require('path').extname(file) === '.' + process.argv[3])
      .forEach(filterdFile => console.log(filterdFile))
  }
)
```
# MAKE IT MODULAR
## part 1
```
module.exports = (dir, ext, callback) => {
  require('fs').readdir(
    dir, (err, list) => {
      if (err) return callback(err);
      callback(null,
        list
          .filter(file => require('path').extname(file) === '.' + ext)
      )
    }
  )
}

```
## part 2
```
require('./6_MAKE_IT_MODULAR_ONE')(process.argv[2], process.argv[3], (err, data) => {
  if (err) {
    return console.error(err)
  }
  data.forEach(item => console.log(item))
})
```
# HTTP CLIENT
```
require('http').get(process.argv[2], (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => {
    console.log(data);
  })
})
```
# HTTP COLLECT
```
require('http').get(process.argv[2], (response) => {
  response.setEncoding('utf8');
  response.pipe(
    require('concat-stream')(data => {
      console.log(data.length);
      console.log(data);
    })
  )
})
```
# JUGGLING ASYNC
```
const http = require('http')
const concatStream = require('concat-stream');

http.get(process.argv[2], response => {
  response.setEncoding('utf8');
  response.pipe(concatStream(data => {
    console.log(data);
    http.get(process.argv[3], response => {
      response.setEncoding('utf8');
      response.pipe(concatStream(data => {
        console.log(data);
        http.get(process.argv[4], response => {
          response.setEncoding('utf8');
          response.pipe(concatStream(data => {
            console.log(data);
          }))
        })
      }))
    })
  }))
})
```
# TIME SERVER
```
require('net').createServer(socket => {
  socket.end(function () {
    return require('moment')().format('YYYY-MM-DD HH:mm') + '\n'
  }())
}).listen(process.argv[2])

```
# HTTP FILE SERVER
```
require('http').createServer((request, response) => {
  require('fs').createReadStream(process.argv[3]).pipe(response)
}).listen(process.argv[2])

```
# HTTP UPPERCASERER
```
require('http').createServer((request, response) => {
  if (request.method !== 'POST') {
    return;
  }
  request.pipe(
    require('through2-map')(chunk => chunk.toString().toUpperCase())
  ).pipe(response)
}).listen(process.argv[2])

```
# HTTP JSON API SERVER
```
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

```