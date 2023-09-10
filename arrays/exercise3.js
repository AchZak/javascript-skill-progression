/*
Exercise 3: Rotate Array

Description:
Given an array, rotate the array to the right by k steps, where k is a non-negative integer.

Example:
rotateArray([1, 2, 3, 4, 5], 3) should return [3, 4, 5, 1, 2].
*/

// Function to rotate an array to the right by k steps
function rotateArray(arr, k) {
    // Calculate the length of the array
    const n = arr.length;
  
    // If k is greater than the length of the array, adjust it
    k = k % n;
  
    // Helper function to reverse an array between start and end indices
    function reverse(start, end) {
      while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
      }
    }
  
    // Reverse the entire array
    reverse(0, n - 1);
  
    // Reverse the first k elements
    reverse(0, k - 1);
  
    // Reverse the remaining elements
    reverse(k, n - 1);
  }
  
  // Test the function with an example array and k value
  const exampleArray = [1, 2, 3, 4, 5];
  const k = 3;
  rotateArray(exampleArray, k);
  
  console.log(`Rotated array: ${exampleArray}`);
  