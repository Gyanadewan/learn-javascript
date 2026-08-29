function countNumberProperties(numbers) {

 const result = {
    even: 0,
    odd: 0,
    positive: 0,
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

numbers = [2,4,6,8,10]
console.log(countNumberProperties(numbers))