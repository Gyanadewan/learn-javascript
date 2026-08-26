function countNumberProperties(numbers) {

 const result = {
    even: 0,
    odd: 0,
    possitive: 0,
    negative : 0
 }
 for (let num of numbers){
   if ( num %2 === 0){
    result.even++;
   }
   else {
    result.odd++
   }

  if  (num >0){
    result.possitive++;
  }
  if (num<0){
    result.negative++;
  }
}
 return result;
}

numbers = [2,3,4,5,6,7]
console.log(countNumberProperties(numbers))