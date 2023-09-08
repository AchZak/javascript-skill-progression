// Exercice 3: Boolean AND OR
// Write a program that performs a logical AND and OR operation between two boolean variables and stores the result in a third variable.

let bool1 = true;
let bool2 = false;
let resultAND, resultOR;

// Step 1: Perform a logical AND operation between bool1 and bool2
resultAND = bool1 && bool2;

// Step 2: Perform a logical OR operation between bool1 and bool2
resultOR = bool1 || bool2;

// Print the results
console.log("Result of AND:", resultAND); // Should print false
console.log("Result of OR:", resultOR);   // Should print true