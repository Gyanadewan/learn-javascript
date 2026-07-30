
// function sayHi(name) {
//   console.log("Hi, " + name  // find the bug
// }
 
// sayHi("Mira");

function sayHi(name) {
//   console.log("Hi, " + name  )  // breket closs kora hoi ni
}
 
sayHi("Mira");



// let word = "hello";
// console.log(word.toUppercase()); // find the bug

let word = "hello";
console.log(word.toUpperCase()); // speling mistake chiloo c small chilo



// function square(num) {
//   return num + num; // find the bug
// }
 
// console.log(square(4)); // should be 16

function square(num) {
  return num * num; //  * multiply korte hobe 
}
 
// console.log(square(4)); 





// Bug: find why score = 50 doesn't return "Pass"
 
// function checkScore(score) {
//   if (score > 50) {
//     return "Pass";
//   } else {
//     return "Fail";
//   }
// }
 
// console.log(checkScore(50)); // Expected: "Pass" (currently wrong)
// console.log(checkScore(40)); // Expected: "Fail"


 
function checkScore(score) {
  if (score >= 50) {       // ei kane = mising chilo 
    return "Pass";
  } else {
    return "Fail";
  }
}
 
console.log(checkScore(1000)); 
console.log(checkScore(20)); 




// Bug: this loop never ends — find the missing piece
 
// function countUpTo(n) {
//   let count = 0;
 
//   for (let i = 1; i <= n;) { // something is missing here
//     count = count + 1;
//   }
 
//   return count;
// }
 
// console.log(countUpTo(5)); // Expected: 5 (currently freezes/never finishes)


 
function countUpTo(n) {
  let count = 0;
 
  for (let i = 1; i <= n; i++) { // icrement barai nai i++
    count = count + 1;
  }
 
  return count;
}
 
console.log(countUpTo(5)); 



// Bug: find why this doesn't return the first element
 
// function getFirstElement(arr) {
//   return arr[1]; // find the bug
// }
 
// console.log(getFirstElement([10, 20, 30])); // Expected: 10 (currently returns 20)


// Bug: find why this doesn't return the first element
 
function getFirstElement(arr) {
  return arr[0];   //  eikane  arr[0] hobe jehetu first number pete chacchi
}
 
console.log(getFirstElement([10, 20, 30])); 




// Bug: find why the result comes out negative
 
// function subtract(a, b) {
//   return b - a; // find the bug
// }
 
// console.log(subtract(10, 3)); // Expected: 7 (currently returns -7)

// Bug: find why the result comes out negative
 
function subtract(a, b) {
  return a - b; // eykane ulta chilo b-a nwx
}
 
console.log(subtract(10, 3)); 






// Bug: explain this line out loud — what does str.length actually equal for ""?
 
// function isEmpty(str) {
//   if (str.length = 0) { // find the bug
//     return true;
//   } else {
//     return false;
//   }
// }
 
// console.log(isEmpty(""));  // Expected: true
// console.log(isEmpty("hi")); // Expected: false


// Bug: explain this line out loud — what does str.length actually equal for ""?
 
function isEmpty(str) {
  if (str.length === 0) { // single = sudu asign kore comparism korar jonno == otoba === use korte hobe
    return true;
  } else {
    return false;
  }
}
 
console.log(isEmpty(""));  
console.log(isEmpty("hi")); 



// Starter Snippet (buggy):
// // This code has TWO bugs. Fix one, re-run, then find the next.
 
// function getOddNumbers(numbers) {
//   let odds = [];
 
//   for (let i = 0; i <= numbers.length; i++) { // bug #1 is here
//     if (numbers[i] % 2 = 1) {                  // bug #2 is here
//       odds.push(numbers[i]);
//     }
//   }
 
//   return odds;
// }
 
// console.log(getOddNumbers([1, 2, 3, 4, 5, 6])); // Expected: [1, 3, 5]


 
function getOddNumbers(numbers) {
  let odds = [];
 
  for (let i = 0;i < numbers.length; i++) {  
    if (numbers[i] % 2 === 1) {                 
      odds.push(numbers[i]);
    }
  }
 
  return odds;
}
 
console.log(getOddNumbers([1, 2, 3, 4, 5, 6])); 




// Apply the full debugging process to find this bug
 
// function countVowels(str) {
//   let vowels = "aeiou";
//   let count = 0;
 
//   for (let i = 0; i <= str.length; i++) { // find the bug
//     if (vowels.includes(str[i])) {
//       count = count + 1;
//     }
//   }
 
//   return count;
// }
 
// console.log(countVowels("orange")); // Expected: 3



 
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
 
  for (let i = 0; i < str.length; i++) {  //ekane < eitha hobe karon 6 purjanta kono length ney
    if (vowels.includes(str[i])) {
      count = count + 1;
    }
  }
 
  return count;
}
 
console.log(countVowels("orange"));




// Buggy Code:
// function celsiusToFahrenheit(celsius) {
//   return celsius * 9 / 5 + 3; // find the bug
// }
 
// console.log(celsiusToFahrenheit(0)); // Expected: 32

function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32; // find the bug
}
 
console.log(celsiusToFahrenheit(0)); 



// Buggy Code:
// function sumArray(numbers) {
//   let total = 0;
 
//   for (let i = 1; i < numbers.length; i++) { // find the bug
//     total = total + numbers[i];
//   }
 
//   return total;
// }
 
// console.log(sumArray([1, 2, 3, 4])); // Expected: 10


function sumArray(numbers) {
  let total = 0;
 
  for (let i = 0; i < numbers.length; i++) { // ekane [1] index teke st hoyechilo tai prothom element  teke count kore nai  tai [0] index use korte hobe prothom element pete
    total = total + numbers[i];
  }
 
  return total;
}
 
console.log(sumArray([1, 2, 3, 4])); 





// function repeatString(str, times) {
//   let result = "";
 
//   for (let i = 0; i < times; i++) {
//     result = str; // find the bug
//   }
 
//   return result;
// }
 
// console.log(repeatString("ab", 3)); // Expected: "ababab"



function repeatString(str, times) {
  let result = "";
 
  for (let i = 0; i < times; i++) {
    result += str; // ekane = deyar karone bar bar asign korteche kono add korche nah tai += use kore add korte hobe

  }
 
  return result;
}
 
console.log(repeatString("ab", 3)); 







// Buggy Code:
// function updateAge(person, newAge) {
//   person.age = person; // find the bug
//   return person;
// }
 
// console.log(updateAge({ name: "Lee", age: 20 }, 21));
// // Expected: { name: "Lee", age: 21 }

function updateAge(person,age) {
  person.age = age; //  The code assigns the whole object to newAge instead of updating the age property.
  return person;
}
 
console.log(updateAge({ name: "Lee", age: 20 }, 21));
