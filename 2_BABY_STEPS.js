console.log(
  process.argv.splice(2).reduce((prev, next) => Number(prev) + Number(next))
)