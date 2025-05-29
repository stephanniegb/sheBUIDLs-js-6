// Loops in JavaScript
// This file demonstrates different types of loops with examples

// 1. FOR Loop
// Basic loop that runs a specific number of times
// Structure: for (initialization; condition; increment/decrement)
for (let i = 0; i < 3; i++) {
  console.log(`For loop iteration: ${i}`);
}

// 2. WHILE Loop
// Runs as long as a condition is true
// Checks condition before executing the code block
let count = 0;
while (count < 3) {
  console.log(`While loop count: ${count}`);
  count++;
}

// 3. DO...WHILE Loop
// Similar to while loop but guarantees at least one execution
// Checks condition after executing the code block
let num = 0;
do {
  console.log(`Do-while iteration: ${num}`);
  num++;
} while (num < 3);

// 4. FOR...OF Loop
// Used to iterate over iterable objects (arrays, strings, etc.)
// Gets the value directly without need for index
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(`For...of fruit: ${fruit}`);
}

// 5. FOR...IN Loop
// Used to iterate over enumerable properties of an object
// Gets the keys/property names of the object
const person = {
  name: "John",
  age: 30,
  city: "New York",
};
for (const property in person) {
  console.log(`For...in - ${property}: ${person[property]}`);
}

// Example of nested loop
// Shows how loops can be used inside other loops
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(`Nested loop: i=${i}, j=${j}`);
  }
}

// Practical example: Finding even numbers in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even numbers:");
for (const number of numbers) {
  if (number % 2 === 0) {
    console.log(number);
  }
}
