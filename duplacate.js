// function removeDuplicates(numbers) {
//   let unique = [];

//   for (let num of numbers) {
//     if (!unique.includes(num)) {
//       unique.push(num);
//     }
//   }

//   return unique;
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));



function removeDuplicates(numbers){
    let unique = [];
    for (let num of numbers){
   
       if (!unique.includes(num))
        unique.push(num)
    }
    return unique
  
}
console.log(removeDuplicates([2,3,4,5,6,8,8,2,2,2,2,2,2]))
