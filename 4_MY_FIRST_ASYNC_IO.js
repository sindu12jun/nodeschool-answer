require('fs').readFile(process.argv[2], (err, data) => {
  if (err) return console.err(err);
  console.log(data.toString().split('\n').length - 1);
})