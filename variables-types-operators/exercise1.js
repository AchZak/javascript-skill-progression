// Exercise 1: Variable Swap
// Write a program that swaps the values of two variables without using a temporary variable.

// Define two variables
let a = 5;
let b = 10;

// Step 1: Add the values of a and b and store the result in a
a = a + b; // a now holds the sum of the original a and b

// Step 2: Subtract the original value of b from a and store the result in b
b = a - b; // b now holds the original value of a

// Step 3: Subtract the original value of a from b and store the result in a
a = a - b; // a now holds the original value of b

// Print the swapped values
console.log("a:", a); // Should print 10
console.log("b:", b); // Should print 5