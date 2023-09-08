// Exercise 5: Type Conversion Challenge
// You are given a series of mixed data types (numbers, strings, and booleans) as individual variables.
// Your task is to convert all non-boolean values to strings while keeping boolean values as they are.
// You should store the modified values back in the same variables.

let a = 42;
let b = "Hello";
let c = true;
let d = 7.5;
let e = "World";
let f = false;

// Step 1: Convert non-boolean values to strings without using arrays or additional variables.

// Convert 'a' to a string if it's not a boolean.
if (typeof a !== 'boolean') {
  a = String(a);
}

// Convert 'b' to a string if it's not a boolean.
if (typeof b !== 'boolean') {
  b = String(b);
}

// No need to convert 'c' since it's a boolean.

// Convert 'd' to a string if it's not a boolean.
if (typeof d !== 'boolean') {
  d = String(d);
}

// Convert 'e' to a string if it's not a boolean.
if (typeof e !== 'boolean') {
  e = String(e);
}

// No need to convert 'f' since it's a boolean.

// Print the modified variables
console.log("a:", a); // Should print "42"
console.log("b:", b); // Should print "Hello"
console.log("c:", c); // Should print true
console.log("d:", d); // Should print "7.5"
console.log("e:", e); // Should print "World"
console.log("f:", f); // Should print false