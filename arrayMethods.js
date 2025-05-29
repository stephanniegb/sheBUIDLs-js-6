let fruits = ["apple", "banana", "orange", "mango", "kiwi"];

function updateDisplay() {
  document.getElementById("arrayDisplay").textContent = JSON.stringify(fruits);
}

function pushFruit() {
  const fruit = document.getElementById("pushInput").value;
  if (fruit) {
    const newLength = fruits.push(fruit);
    document.getElementById(
      "pushPopResult"
    ).textContent = `Added "${fruit}". New length: ${newLength}`;
    document.getElementById("pushInput").value = "";
    updateDisplay();
  }
}

function popFruit() {
  const removed = fruits.pop();
  document.getElementById(
    "pushPopResult"
  ).textContent = `Removed: "${removed}"`;
  updateDisplay();
}

function unshiftFruit() {
  const fruit = document.getElementById("unshiftInput").value;
  if (fruit) {
    const newLength = fruits.unshift(fruit);
    document.getElementById(
      "shiftUnshiftResult"
    ).textContent = `Added "${fruit}" to beginning. New length: ${newLength}`;
    document.getElementById("unshiftInput").value = "";
    updateDisplay();
  }
}

function shiftFruit() {
  const removed = fruits.shift();
  document.getElementById(
    "shiftUnshiftResult"
  ).textContent = `Removed from beginning: "${removed}"`;
  updateDisplay();
}

function mapToUpperCase() {
  const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
  document.getElementById(
    "mapFilterResult"
  ).textContent = `Uppercase: ${JSON.stringify(upperFruits)}`;
}

function filterLongFruits() {
  const longFruits = fruits.filter((fruit) => fruit.length > 5);
  document.getElementById(
    "mapFilterResult"
  ).textContent = `Fruits with >5 letters: ${JSON.stringify(longFruits)}`;
}

function checkIncludes() {
  const fruit = document.getElementById("searchInput").value;
  if (fruit) {
    const includes = fruits.includes(fruit);
    document.getElementById("searchResult").textContent = `Array ${
      includes ? "includes" : "does not include"
    } "${fruit}"`;
  }
}

function findFruit() {
  const start = document.getElementById("searchInput").value;
  if (start) {
    const found = fruits.find((fruit) =>
      fruit.toLowerCase().startsWith(start.toLowerCase())
    );
    document.getElementById("searchResult").textContent = found
      ? `Found: "${found}"`
      : `No fruit starts with "${start}"`;
  }
}

function sortArray() {
  fruits.sort();
  document.getElementById(
    "modifyResult"
  ).textContent = `Sorted array: ${JSON.stringify(fruits)}`;
  updateDisplay();
}

function spliceFruit() {
  fruits.splice(2, 1, "pineapple");
  document.getElementById(
    "modifyResult"
  ).textContent = `Spliced array (removed 1 at index 2, added 'pineapple')`;
  updateDisplay();
}

// Initialize display when page loads
document.addEventListener("DOMContentLoaded", updateDisplay);
