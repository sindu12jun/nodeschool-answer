# HELLO_WORLD
```
console.log('HELLO WORLD')
```
# BABY_STEPS
```
console.log(
  process.argv.splice(2).reduce((prev, next) => Number(prev) + Number(next))
)
```
# MY_FIRST_IO
```
console.log(require('fs').readFileSync(process.argv[2]).toString().split('\n').length - 1);
```