'use strict'

var x = 2
var y = 4

var a = String(x)
var b = String(y)

console.log(x + y) // 6
console.log(a + b) // '24'

console.log(Number(x) + Number(y)) // 6
console.log(Number(a) + Number(b)) // 6

console.log(x - y) // -2
console.log(x - 'hello') // NaN
console.log(a - b) // -2

console.log(x * y) // 8
console.log(x * 'hello') // NaN
console.log(a * b) // 8

console.log(x / y) // 0.5
console.log(a / b) // 0.5

console.log(x % y) // 2
console.log(y % x) // 0