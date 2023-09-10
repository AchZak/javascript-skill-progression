// Exercise 1: Factorial Function
// Write a JavaScript function factorial(n) that calculates the factorial of a given positive integer n.
// The factorial of a number is the product of all positive integers from 1 to n.

function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  console.log(factorial(5)); // Output: 120
  