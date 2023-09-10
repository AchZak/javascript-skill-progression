/*
Exercise 2: Find Missing Number

Description:
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example:
findMissingNumber([3, 0, 1]) should return 2.

*/

function findMissingNumber(arr) {
    // Calculate the expected sum of all numbers from 0 to n (inclusive)
    const n = arr.length;
    let expectedSum = (n * (n + 1)) / 2;
    
    // Calculate the actual sum of the numbers in the array
    let actualSum = arr.reduce((acc, num) => acc + num, 0);
    
    // The missing number is the difference between the expected and actual sums
    const missingNumber = expectedSum - actualSum;
    
    // Return the missing number
    return missingNumber;
  }
  
  // Test the function with an example array
  const exampleArray = [3, 0, 1];
  const result = findMissingNumber(exampleArray);
  
  console.log(`The missing number in ${exampleArray} is: ${result}`);