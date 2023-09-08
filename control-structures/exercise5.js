// Exercise 5: Nested Loops

// Write a program that prints a diamond pattern of stars with 9 rows:
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

let rows = 9;
let spaces = rows - 1;
let stars = 1;

for (let i = 1; i <= rows * 2 - 1; i++) {
  let line = "";
  for (let j = 1; j <= spaces; j++) {
    line += " ";
  }
  for (let j = 1; j <= stars; j++) {
    line += "*";
  }
  console.log(line);
  if (i < rows) {
    spaces--;
    stars += 2;
  } else {
    spaces++;
    stars -= 2;
  }
}
