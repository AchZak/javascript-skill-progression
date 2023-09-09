// Exercise 5: Find the Nth Fibonacci Number
// Write a JavaScript function fibonacci that returns the Nth Fibonacci number.
// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones,
// usually starting with 0 and 1.

/*console.log(fibonacci(5));  // Output: 3 (Fibonacci sequence: 0, 1, 1, 2, 3, ...)
console.log(fibonacci(10)); // Output: 55 (Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...)
console.log(fibonacci(20)); // Output: 6765 (Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, ...)
*/

function fibonacci(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
  
    let a = 0;
    let b = 1;
    let result = 0;
  
    for (let i = 2; i <= n; i++) {
      result = a + b;
      a = b;
      b = result;
    }
  
    return result;
  }
  
  console.log(fibonacci(5));
  console.log(fibonacci(10));
  console.log(fibonacci(20));