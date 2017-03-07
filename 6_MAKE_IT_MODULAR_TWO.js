require('./6_MAKE_IT_MODULAR_ONE')(process.argv[2], process.argv[3], (err, data) => {
  if (err) {
    return console.error(err)
  }
  data.forEach(item => console.log(item))
})