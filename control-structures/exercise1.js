// Exercise 1: While Loop and Do-While Loop

// Using a while loop, print the Fibonacci sequence up to the 10th term.

let a = 0;
let b = 1;
let count = 1;

while (count <= 10) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
  count++;
}

// Using a do-while loop, print the first 10 prime numbers.

let num = 2;
let primeCount = 0;

do {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num);
    primeCount++;
  }
  num++;
} while (primeCount < 10);
