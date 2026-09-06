function countEvenOdd(numbers) {
    
       let evenCount = 0;
       let oddCount = 0;
     for(const num of numbers){
         if (num % 2 === 0){
          evenCount ++
        }
        else {
         oddCount++
        }
     }
    return {
       even: evenCount,
       odd: oddCount
    }
}

const numbers = [2,2,3,1]
console.log(countEvenOdd(numbers))
