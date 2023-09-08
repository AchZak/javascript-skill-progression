// Exercise 4: Switch

// Given a day of the week (1 for Monday, 2 for Tuesday, etc.), write a program
// that prints whether it's a weekday or a weekend day using a switch statement.

let dayOfWeek = 5;
let dayType;

switch (dayOfWeek) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    dayType = "weekday";
    break;
  case 6:
  case 7:
    dayType = "weekend";
    break;
  default:
    dayType = "invalid day";
}

console.log(`Day ${dayOfWeek} is a ${dayType}.`);
