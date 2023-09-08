// Exercise 2: For Loop

// Using a for loop, calculate and print the factorial of a given number (e.g., 5! = 120).

let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}

console.log(`${number}! = ${factorial}`);
