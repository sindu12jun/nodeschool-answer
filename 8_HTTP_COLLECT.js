require('http').get(process.argv[2], (response) => {
  response.setEncoding('utf8');
  response.pipe(
    require('concat-stream')(data => {
      console.log(data.length);
      console.log(data);
    })
  )
})