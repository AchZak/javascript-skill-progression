// Exercice 2: Type conversion
// Write a program that converts a string to a number without using the parseInt or parseFloat functions

let stringNumber = "42";
let convertedNumber;

// Step 1: Use the unary plus (+) operator to convert the string to a number
convertedNumber = +stringNumber;

// Print the converted number
console.log("Converted Number:", convertedNumber); // Should print 42