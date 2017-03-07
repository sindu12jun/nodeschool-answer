require('fs').readdir(
  process.argv[2], (err, list) => {
    if (err) return console.err(err);
    list
      .filter(file => require('path').extname(file) === '.' + process.argv[3])
      .forEach(filterdFile => console.log(filterdFile))
  }
)