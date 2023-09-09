// Exercise: Count Characters
// Write a JavaScript function countChar that takes two arguments: a string and a character, and returns the number of times the character appears in the string.
// Then, write another function countGs that uses countChar to count the number of lowercase 'g' characters in a string.

/* Example:
console.log(countChar("Giggling Geese", "g"));  // Output: 5 (count of 'g' in "Giggling Geese")
console.log(countChar("The Great Gatsby", "t"));  // Output: 2 (count of 't' in "The Great Gatsby")
console.log(countGs("Going Green"));     // Output: 3 (count of 'g' in "Going Green")
console.log(countGs("JavaScript Rocks")); // Output: 0 (no 'g' in "JavaScript Rocks")*/

function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  
  function countGs(str) {
    return countChar(str, 'g');
  }
  
  console.log(countChar("Giggling Geese", "g"));
  console.log(countChar("The Great Gatsby", "t"));
  console.log(countGs("Going Green"));
  console.log(countGs("JavaScript Rocks"));
  