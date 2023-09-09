// Exercise 2: Prime Number Check
// Write a JavaScript function isPrime(n) that checks if a given positive integer n is a prime number.
// A prime number is a positive integer greater than 1 that has no positive integer divisors other than 1 and itself.

function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPrime(17)); // Output: true
  