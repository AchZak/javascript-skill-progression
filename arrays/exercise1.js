// Exercise 1: Calculate Average and Standard Deviation

function calculateAverage(arr) {
    if (arr.length === 0) {
      return 0; // Handle empty array case to avoid division by zero
    }
  
    const sum = arr.reduce((acc, num) => acc + num, 0); // Calculate the sum of array elements
    return sum / arr.length; // Calculate the average
  }
  
  // Function to calculate the standard deviation of an array
  function calculateStandardDeviation(arr) {
    const average = calculateAverage(arr); // Calculate the average using the previous function
  
    if (arr.length === 0) {
      return 0; // Handle empty array case
    }
  
    // Calculate the sum of squared differences from the average
    const squaredDifferencesSum = arr.reduce((acc, num) => {
      const diff = num - average;
      return acc + diff * diff;
    }, 0);
  
    // Calculate the variance (average of squared differences)
    const variance = squaredDifferencesSum / arr.length;
  
    // Calculate the standard deviation (square root of variance)
    const standardDeviation = Math.sqrt(variance);
  
    return standardDeviation;
  }
  
  // Example array
  const exampleArray = [2, 4, 4, 4, 5, 5, 7, 9];
  
  // Calculate and display the average and standard deviation
  const averageResult = calculateAverage(exampleArray);
  const stdDeviationResult = calculateStandardDeviation(exampleArray);
  
  console.log(`Exercise 1: Calculate Average and Standard Deviation`);
  console.log(`--------------------------------------------------`);
  console.log(`Array: [${exampleArray}]`);
  console.log(`Average: ${averageResult}`);
  console.log(`Standard Deviation: ${stdDeviationResult}`);
  