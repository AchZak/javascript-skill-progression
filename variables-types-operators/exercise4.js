// Exercice 4: String Reversal
// Write a program that reverses a given string without using any loops, if statements, or functions.

let inputString = "Hello, World!";
let reversedString = "";

// Convert the string to an array of characters
let stringArray = inputString.split("");

// Step 1: Use the "+" operator to concatenate the characters in reverse order
for (let i = stringArray.length - 1; i >= 0; i--) {
  reversedString += stringArray[i];
}

// Print the reversed string
console.log("Reversed String:", reversedString); // Should print "!dlroW ,olleH"