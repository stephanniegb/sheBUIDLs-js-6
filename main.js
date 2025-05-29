const fruits = [
  "🍎 Apple",
  "🍌 Banana",
  "🍊 Orange",
  "🥭 Mango",
  "🍍 Pineapple",
];

const fruitInput = document.getElementById("fruitInput");
const addBtn = document.getElementById("addBtn");
const fruitList = document.getElementById("fruitList");
const clearBtn = document.getElementById("clearBtn");
const message = document.getElementById("message");

// Map of fruit names to emojis
const fruitEmojis = {
  apple: "🍎",
  banana: "🍌",
  orange: "🍊",
  mango: "🥭",
  pineapple: "🍍",
  grape: "🍇",
  watermelon: "🍉",
  lemon: "🍋",
  cherry: "🍒",
  strawberry: "🍓",
  peach: "🍑",
  pear: "🍐",
  kiwi: "🥝",
  // add more as you like
};

// Render the fruits array to the DOM
function renderFruits() {
  fruitList.innerHTML = "";

  fruits.forEach((fruit, index) => {
    const li = document.createElement("li");
    li.textContent = `${fruit} `;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.onclick = function () {
      fruits.splice(index, 1);
      renderFruits();
      message.textContent = `Removed "${fruit}" from the list.`;
    };

    li.appendChild(removeBtn);
    fruitList.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fruitInput.focus();
});

// Add a fruit
addBtn.onclick = function () {
  let fruit = fruitInput.value.trim();
  if (fruit === "") {
    message.textContent = "Please enter a fruit name.";
    return;
  }
  // Try to add emoji if known
  const lower = fruit.toLowerCase();
  if (fruitEmojis[lower]) {
    fruit = `${fruitEmojis[lower]} ${
      fruit.charAt(0).toUpperCase() + fruit.slice(1)
    }`;
  }
  fruits.push(fruit);
  renderFruits();
  message.textContent = `Added "${fruit}" to the list.`;
  fruitInput.value = "";
  fruitInput.focus();
};

// Clear all fruits
clearBtn.onmouseenter = function () {
  fruits.length = 0;
  renderFruits();
  message.textContent = "Cleared the list.";
};

function compare() {
  const result = 3 === "3";
  console.log("comparing 3 and 3:", result);
}

// Initial render
renderFruits();
