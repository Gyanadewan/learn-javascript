
// Task 1.1 — Spot the Difference
// let str = "hello";
// let arr = ["h", "e", "l", "l", "o"];
// Log str.length and arr.length. What do you notice?
// Try str[0] and arr[0]. Do both work the same way?
// Try str.push("!") — what happens? Why does this fail for strings but not arrays?


let str = "hello";
let arr = ["h", "e", "l", "l", "O"]
console.log(str.length)
console.log(arr.length)
console.log(str[0])
console.log(arr[0])

// console.log(str.push("!")) ❌ TypeError: str.push is not a function
console.log(arr.push("!"))
console.log(arr)


// Task 1.2 — Convert Between Them
// Convert the string "JavaScript" into an array of characters.
// Convert the array ["c", "a", "t"] back into a single string "cat".

const skill = "javascript";
console.log(skill.split(""));

const letters =  ["c", "a", "t"];
console.log(letters.join(""))


// Task 2.1 — Case Conversion
// let name = "JavaScript";
// Print the uppercase version.
// Print the lowercase version.
// Print the string with whitespace trimmed: "   hi there   " → "hi there"

const name = "JavaScript";
console.log(name.toUpperCase())

const text = "JavaScript";
console.log(text.toLowerCase())

const greeting = "  hi there   "
console.log( greeting.trim())


// Task 3.1 — Slicing Strings
// let sentence = "Learning JavaScript is fun!";
// Get just the word "Learning" using .slice().
// Get the last 4 characters ("fun!") using .slice() with a negative index.

let sentence = "Learning JavaScript is fun!";
 console.log(sentence.slice(0,8))


let sentence2 = "Learning JavaScript is fun!";
 console.log(sentence2.slice(-4))

// Task 3.2 — Combine Strings
// Use .concat() to join "Hello" and "World" into "Hello World".
// Use + and template literals to do the same thing. Compare all three approaches.

const firstText =  "Hello";
const secondText = "World";

console.log(firstText.concat(" ",secondText))

console.log(firstText+ " " + secondText);

console.log(`${firstText} ${secondText}`);


// Task 4.1 — Three Reversal Methods
// Write a function reverseString(str) three different ways:
// Using .split(""), .reverse(), and .join("")
// Using a for loop that builds the reversed string character by character


// Test all three with "JavaScript" → should return "tpircSavaJ".


const skills = "JavaScript";
console.log(skills.split("").reverse().join(""))

// Task 5.1 — Build a Profile Object
// Create an object student with these properties: name, age, grade, and isEnrolled.
// Log the whole object.
// Log just the name property using dot notation.

const student = {
    name: "Gyana",
    age: 21,
    grade: "A+",
    isEnrolled: true
} 

console.log(student)
console.log(student.name)




// Task 6.1 — Dot vs Bracket Notation
// let car = { brand: "Toyota", model: "Corolla", year: 2022 };
// Get brand using dot notation.
// Get model using bracket notation.
// Add a new property color: "blue" using bracket notation.
// Update year to 2023 using dot notation.

let car = {
    brand: "Toyota", model: "Corolla", year: 2022
}

// console.log(car.brand)   
// console.log(car["model"])
// car["color"] = "blue";
// console.log(car.color)
// car["year"] = 2023;
// console.log(car)

console.log(car.brand)
console.log(car["model"])
car ["color"] = "red"
car["color"] = "yellow"
car.year =2023;
console.log(car)

// let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
// Get an array of all keys 
// Get an array of all 
// Delete the pages property using delete.


let book = {
    title : "The Hobbit", 
    author: "Tolkien",
    pages: 310
};

console.log(Object.keys(book))
console.log(Object.values(book))
console.log(Object.entries(book))
console.log(delete book.pages)
console.log(book)


// Task 7.2 — Nested Objects
// let user = {
//   username: "coder123",
//   address: {
//     city: "Austin",
//     zip: "78701"
//   }
// }
// Log the city using dot notation chaining.
// Add a country property inside the address.
// Delete the zip property from the nested object.

let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701"
  }
}
user.address  ["country"] = "bangladesh"

console.log(user.address.city)

console.log(user.address.country)

console.log(delete user.address.zip)
console.log(user)


// Task 8.1 — Loop Through Properties
// let scores = { math: 90, science: 85, art: 95 };
// Use a for...in loop to log each key and value like: math: 90.
// Calculate the average of all values in the loop.

let scores = {
    math:90,
    science: 85,
    art: 95
}
let total =0;
for (let subject in scores){
    console.log(subject + ": "+ scores[subject])
    total += scores[subject];
}

let average = total / Object.keys(scores).length;
console.log("Total:", total)
console.log("average:",average)


