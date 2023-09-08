// Exercise 3: If, Else If, Else

// Given three numbers, find and print the largest number without using Math.max().

let num1 = 42;
let num2 = 73;
let num3 = 56;
let largest;

if (num1 >= num2 && num1 >= num3) {
  largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largest = num2;
} else {
  largest = num3;
}

console.log("The largest number is:", largest);
