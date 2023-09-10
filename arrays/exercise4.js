/*
Exercise 4: Product of Array Except Self

Description:
Given an array arr of n integers, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
productExceptSelf([1, 2, 3, 4]) should return [24, 12, 8, 6].
*/

// Function to calculate the product of all elements except self
function productExceptSelf(arr) {
    const n = arr.length;
    
    // Arrays to store products to the left and right of each element
    const leftProducts = new Array(n);
    const rightProducts = new Array(n);
    
    // Result array to store the product of all elements except self
    const result = new Array(n);
  
    // Initialize the leftProducts and rightProducts arrays
    leftProducts[0] = 1;         // The left of the first element is 1
    rightProducts[n - 1] = 1;    // The right of the last element is 1
  
    // Calculate the products to the left of each element
    for (let i = 1; i < n; i++) {
      leftProducts[i] = leftProducts[i - 1] * arr[i - 1];
    }
  
    // Calculate the products to the right of each element
    for (let i = n - 2; i >= 0; i--) {
      rightProducts[i] = rightProducts[i + 1] * arr[i + 1];
    }
  
    // Calculate the final result by multiplying leftProducts and rightProducts
    for (let i = 0; i < n; i++) {
      result[i] = leftProducts[i] * rightProducts[i];
    }
  
    // Return the result array containing products except self
    return result;
  }
  
  // Test the function with an example array
  const exampleArray = [1, 2, 3, 4];
  const resultArray = productExceptSelf(exampleArray);
  
  console.log(`Input Array: [${exampleArray}]`);
  console.log(`Output Array: [${resultArray}]`);
  