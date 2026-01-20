function setup() {
  createCanvas(500, 500);
  background(55);
  rectMode(CENTER);
}

function draw() {
  rect(250, 250, 100, 100);
}

///////////////////////////////////////////////////////////////
console.log("#################################################");
console.log("Example 1");
console.log("#################################################");
///////////////////////////////////////////////////////////////

// 1 (colours = ["red", "blue", "green"];) is how
let colours = ["red", "blue", "green"];
console.log(" 1) ", colours[1]);

// 2
let names = ["John", "David", "Mary"];
console.log(" 2) ", names[0]);

// 3 (fruits[1] = "pear";) is how you change the variable in an array
let fruits = ["apple", "banana", "orange"];
fruits[1] = "pear";
console.log(" 3) ", fruits[1]);

// 4 (console.log(" 4) ",fruits.length);) is how you see the length of an array
console.log(" 4) ", fruits.length);

// 5 (fruits.push("orange");) is how you add a variable in an array
fruits.push("orange");

// 6 (fruits.pop();) removes the last variavle in an array
fruits.pop();

///////////////////////////////////////////////////////////////
console.log("#################################################");
console.log("Example 2");
console.log("#################################################");
///////////////////////////////////////////////////////////////
// Example 2:

// 1 (foods.unshift("Pizza");) adds Pizza at the beginning

let foods = ["Chicken", "Pizza", "Pasta"];
foods.unshift("Pizza");
console.log(" 1) ", foods);

// 2 (foods.shift();) Removes from the start

foods.shift();
console.log(" 2) ", foods);

// 3 (for (let i = 0; i < fruits.length; i++) {console.log("3)", numbers[i]);) goes through all variables in array and prints them seperatly

let numbers = ["1", 2, 3];
for (let i = 0; i < fruits.length; i++) {
  console.log("3)", numbers[i]);
}

// 4 (  games.indexOf("Monster Hunter")) gets the index of the variable

let games = ["Monster Hunter", "Nightreign", "Apex Legends"];
console.log(
  "5)",
  games.indexOf("Monster Hunter"),
  games.indexOf("Apex Legends"),
);

// 5 (let movies2 = movies.slice(1, 2);) makes a new list with only the variables between and of 1 and 2

let movies = ["Blade Runner", "Assassain's Creed", "Home Alone"];

let movies2 = movies.slice(1, 2);
console.log("6)", movies2);

///////////////////////////////////////////////////////////////
console.log("#################################################");
console.log("Example 3");
console.log("#################################################");
///////////////////////////////////////////////////////////////
// Example 3:

// 1 (sports.splice(1, 1);) removes the variable in the between the values 1 and 1
let sports = ["Football", "Basketball", "Rugby"];
sports.splice(1, 1);
console.log("1)", sports);

// 2 (countries.splice(1, 1, "Germany");) replaces the varibles within the values 1 and 1 with Germany

let countries = ["Italy", "Ireland", "Spain"];
countries.splice(1, 1, "Germany");
console.log("2)", countries);

///////////////////////////////////////////////////////////////
console.log("#################################################");
console.log("Exercise 1");
console.log("#################################################");
///////////////////////////////////////////////////////////////
// Exercise 1:

let basket = ["apple", "banana", "orange", "pear"];

// 1
console.log("1)", basket[0]);
console.log("1)", basket[basket.length - 1]);

// 2
basket.splice(1, 1, "kiwi");
basket.pop();
basket.unshift("mango");
for (let i = 0; i < basket.length; i++) {
  console.log("2)", basket[i]);
}

// 3

if ("orange" in basket) {
  console.log("3)", "orange found at index:", basket.indexOf("orange"));
} else {
  console.log("3)", "orange not found");
}

// 4

if (basket.length % 2 == 0) {
  citrus = basket.splice(basket.length / 2, basket.length / 2 + 1);
  console.log("4)", citrus);
} else if (basket.length % 2 !== 0) {
  citrus = basket.splice(basket.length / 2);
  console.log("4)", citrus);
}
