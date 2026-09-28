
// function missingNumber(nums) {
//    for (let i = 0; i<=nums.length ; i++){
//     const findnum =   nums.includes(i)
//       if(findnum === false){
//         return i
//       }
      
//    }
// }
// console.log(missingNumber([3, 0, 1]))


function missingNumber(nums) {
  for (let i = 0; i <=nums.length; i++){
     const checknum =nums.includes(i)
    if (checknum ===false){
        return i
    }
  }
}
console.log(missingNumber([0,2]))