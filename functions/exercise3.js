// Exercise 3: Counter with Closure and Arrow Function
// Create a JavaScript function createCounter() that returns a counter function using closure and arrow function notation. 
// The counter should start at 0 and increment by 1 each time it is called. 
// The returned function should also display the current count.

function createCounter() {
    let count = 0;
    return () => {
      count++;
      console.log(`Count: ${count}`);
    };
  }
  
  const counter1 = createCounter();
  const counter2 = createCounter();
  
  counter1(); // Output: Count: 1
  counter1(); // Output: Count: 2
  counter2(); // Output: Count: 1
  counter1(); // Output: Count: 3
  counter2(); // Output: Count: 2
  