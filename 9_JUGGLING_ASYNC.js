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