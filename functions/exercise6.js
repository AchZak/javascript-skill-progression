/* Exercise 6: Compound Interest Calculation with Value Printing
Write a JavaScript function calculateCompoundInterestWithGoal that calculates the future value of an investment with compound interest
and determines whether the investor will have enough money to achieve a specific financial goal. The function takes the following parameters:

Principal amount (initial investment).
Annual interest rate (in decimal form, e.g., 0.05 for 5%).
Number of times the interest is compounded per year.
Number of years the money is invested for.
Financial goal amount (the target amount).
The function returns an object with two properties:

futureValue: The future value of the investment/loan, including interest (rounded to 2 decimal places).
hasEnoughMoney: A boolean indicating whether the investor will have enough money after the specified number of years to achieve the financial goal.
Use the compound interest formula: A = P(1 + (r / n))^(n * t), where:
            A = Future Value
            P = Principal Amount (Initial Investment)
            r = Annual Interest Rate (in decimal form, e.g., 0.05 for 5%)
            n = Number of Times Interest is Compounded Per Year
            t = Number of Years

The exercise challenges you to implement a function that performs compound interest calculations and determines 
whether the investor's goal will be met based on the provided inputs.

Exemple:
const result1 = calculateCompoundInterestWithGoal(1000, 0.05, 12, 5, 1500);
console.log(result1.futureValue);       // Output: 1280.08 (rounded to 2 decimal places)
console.log(result1.hasEnoughMoney);    // Output: false

const result2 = calculateCompoundInterestWithGoal(5000, 0.06, 4, 10, 10000);
console.log(result2.futureValue);       // Output: 8103.08 (rounded to 2 decimal places)
console.log(result2.hasEnoughMoney);    // Output: true
*/


function calculateCompoundInterestWithGoal(principal, rate, compoundingFrequency, years, goal) {
    const n = compoundingFrequency;
    const r = rate;
    const t = years;
    
    const futureValue = principal * Math.pow(1 + r / n, n * t);
    const roundedFutureValue = parseFloat(futureValue.toFixed(2)); // Round to 2 decimal places
    
    const hasEnoughMoney = roundedFutureValue >= goal;
    
    return { futureValue: roundedFutureValue, hasEnoughMoney };
  }
  
  const result1 = calculateCompoundInterestWithGoal(1000, 0.05, 12, 5, 1500);
  console.log(`Future Value: $${result1.futureValue}`);
  console.log(`Will have enough money: ${result1.hasEnoughMoney}`);
  
  const result2 = calculateCompoundInterestWithGoal(5000, 0.06, 4, 10, 10000);
  console.log(`Future Value: $${result2.futureValue}`);
  console.log(`Will have enough money: ${result2.hasEnoughMoney}`);  
