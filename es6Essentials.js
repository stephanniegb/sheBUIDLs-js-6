// ==========================================
// ES6+ Essentials (Modern JavaScript)
// ==========================================

// 1. let and const
// - let: block-scoped variable that can be reassigned
// - const: block-scoped variable that cannot be reassigned (but objects/arrays can be modified)
let age = 25;
age = 26; // can be reassigned

const PI = 3.14159;
// PI = 3.14; // This would throw an error

const person = { name: "John" };
person.name = "Jane"; // Valid - object properties can be modified

// 2. Arrow Functions
// - Shorter syntax for function expressions
// - Does not bind its own 'this'
// - Great for callbacks and one-liners

// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

// Arrow function with single parameter (parentheses optional)
const square = (x) => x * x;

// Arrow function with multiple lines needs curly braces and return
const calculate = (a, b) => {
  const sum = a + b;
  return sum * 2;
};

// 3. Template Literals
// - String interpolation with `${expression}`
// - Multi-line strings without concatenation
// - Embedded expressions
const name = "Alice";
const greeting = `Hello, ${name}!
This is a multi-line
string using template literals`;

// 4. Destructuring
// - Extract values from objects and arrays into distinct variables
// - Makes code cleaner and more readable

// Object destructuring
const user = {
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
};

const { firstName, lastName, email } = user;

// Array destructuring
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;

// 5. Spread & Rest Operators (...)
// Spread: Expands elements
// Rest: Collects elements into an array

// Spread operator with arrays
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

// Spread operator with objects
const baseObject = { id: 1, name: "Base" };
const newObject = { ...baseObject, age: 30 };

// Rest operator in functions
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

// 6. Default Parameters
// - Set default values for function parameters
// - Helps avoid undefined values and provides fallbacks

const greet = (name = "Guest", greeting = "Hello") => {
  return `${greeting}, ${name}!`;
};

// Examples of usage:
greet(); // "Hello, Guest!"
greet("John"); // "Hello, John!"
greet("Jane", "Hi"); // "Hi, Jane!"

// Practice Examples
const practiceExample = () => {
  // Combining multiple features
  const config = {
    host: "localhost",
    port: 3000,
    user: "admin",
  };

  // Using destructuring with default values
  const { host, port = 8080, user } = config;

  // Using template literals and arrow functions
  const serverInfo = () => `Server running at ${host}:${port}`;

  // Using spread operator to create new config
  const extendedConfig = {
    ...config,
    secure: true,
    version: "1.0",
  };
};

// Export if using modules
export { greet, sum, addArrow, practiceExample };
