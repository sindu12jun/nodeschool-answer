module.exports = (dir, ext, callback) => {
  require('fs').readdir(
    dir, (err, list) => {
      if (err) return callback(err);
      list
        .filter(file => require('path').extname(file) === '.' + ext)
        .forEach(filterdFile => console.log(filterdFile))
      callback(null, list);
    }
  )
}