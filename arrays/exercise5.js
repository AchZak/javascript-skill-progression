/*
Exercise 5: Set Matrix Zeroes

Description:
Given an m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example:
Input:
[
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9]
]
Output:
[
  [1, 0, 3],
  [0, 0, 0],
  [7, 0, 9]
]
*/

// Function to set matrix zeroes in-place
function setZeroes(matrix) {
  const m = matrix.length;    // Number of rows
  const n = matrix[0].length; // Number of columns

  // Arrays to keep track of rows and columns that need to be zeroed
  const zeroRows = new Set();
  const zeroCols = new Set();

  // Iterate through the matrix to mark rows and columns with zeroes
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        zeroRows.add(i);
        zeroCols.add(j);
      }
    }
  }

  // Set the entire marked rows to zeroes
  zeroRows.forEach((row) => {
    for (let j = 0; j < n; j++) {
      matrix[row][j] = 0;
    }
  });

  // Set the entire marked columns to zeroes
  zeroCols.forEach((col) => {
    for (let i = 0; i < m; i++) {
      matrix[i][col] = 0;
    }
  });
}

// Test the function with an example matrix
const exampleMatrix = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9],
];

console.log('Input Matrix:');
console.log(exampleMatrix);

setZeroes(exampleMatrix);

console.log('Matrix after setting zeroes:');
console.log(exampleMatrix);
