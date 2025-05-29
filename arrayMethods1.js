// Array of fruits to work with
const fruits = ["apple", "banana", "orange", "mango", "kiwi"];

// push() - Adds elements to the end of array and returns new length
console.log("--- push() example ---");
console.log("Original array:", fruits);
const newLength = fruits.push("grape");
console.log("After push:", fruits);
console.log("New length:", newLength);

// pop() - Removes and returns the last element
console.log("\n--- pop() example ---");
const removedFruit = fruits.pop();
console.log("Removed fruit:", removedFruit);
console.log("Array after pop:", fruits);

// shift() - Removes and returns the first element
console.log("\n--- shift() example ---");
const firstFruit = fruits.shift();
console.log("Removed first fruit:", firstFruit);
console.log("Array after shift:", fruits);

// unshift() - Adds elements to beginning and returns new length
console.log("\n--- unshift() example ---");
const newLengthUnshift = fruits.unshift("strawberry");
console.log("Array after unshift:", fruits);
console.log("New length:", newLengthUnshift);

// map() - Creates new array with results of calling function for every element
console.log("\n--- map() example ---");
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log("Uppercase fruits:", upperFruits);

// filter() - Creates new array with elements that pass the test
console.log("\n--- filter() example ---");
const longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log("Fruits with more than 5 letters:", longFruits);

// forEach() - Executes function for each element (doesn't return anything)
console.log("\n--- forEach() example ---");
console.log("Listing fruits with index:");
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// includes() - Checks if array includes element, returns boolean
console.log("\n--- includes() example ---");
console.log("Does array include banana?", fruits.includes("banana"));
console.log("Does array include pear?", fruits.includes("pear"));

// find() - Returns first element that satisfies testing function
console.log("\n--- find() example ---");
const foundFruit = fruits.find((fruit) => fruit.startsWith("m"));
console.log('First fruit starting with "m":', foundFruit);

// some() - Tests whether at least one element passes the test
console.log("\n--- some() example ---");
const hasShortName = fruits.some((fruit) => fruit.length < 5);
console.log("Has fruits with less than 5 letters?", hasShortName);

// every() - Tests whether all elements pass the test
console.log("\n--- every() example ---");
const allLongNames = fruits.every((fruit) => fruit.length > 3);
console.log("All fruits have more than 3 letters?", allLongNames);

// reduce() - Reduces array to single value (from left to right)
console.log("\n--- reduce() example ---");
const totalLetters = fruits.reduce((sum, fruit) => sum + fruit.length, 0);
console.log("Total letters in all fruits:", totalLetters);

// sort() - Sorts the elements of an array (modifies original array)
console.log("\n--- sort() example ---");
console.log("Sorted fruits alphabetically:", fruits.sort());

// splice() - Changes array by removing/replacing elements
console.log("\n--- splice() example ---");
console.log("Original array:", fruits);
fruits.splice(2, 1, "pineapple"); // Remove 1 element at index 2 and add 'pineapple'
console.log("After splice:", fruits);

// slice() - Returns shallow copy of portion of array
console.log("\n--- slice() example ---");
const slicedFruits = fruits.slice(1, 3); // Get elements from index 1 to 2
console.log("Sliced fruits (index 1 to 3):", slicedFruits);

// join() - Joins all elements into a string
console.log("\n--- join() example ---");
const fruitString = fruits.join(", ");
console.log("Fruits joined into string:", fruitString);

/* 
Teaching Tips:
1. push/pop work at the END of array
2. shift/unshift work at the BEGINNING of array
3. map, filter, forEach are very common in modern JavaScript
4. map returns new array, filter returns new filtered array, forEach returns nothing
5. includes is great for simple existence checks
6. find returns first match, filter returns all matches
7. some/every are perfect for validation checks
8. reduce is powerful but might be confusing for beginners
9. sort modifies original array (can take comparison function)
10. splice modifies original array, slice returns new array
11. join is great for creating comma-separated lists
*/
