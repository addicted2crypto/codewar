// const { setLogLevel } = require("alchemy-sdk")

// Description: Find the remainder.

// Instructions
// Output
// Task:
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1

// My Solution =>

function remainder(n, m){
    return n > m ? n % m : m % n
    
  }