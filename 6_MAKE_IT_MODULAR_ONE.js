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
