function greet (name){
    console.log("hello "+ name)
}
greet("Gyana")

function cutHalf (num){
    const half = num/2;
    return half
}

 const result = cutHalf(6)
 console.log("result hobe",result)


 function DewanBabu (name){
    const fullName = (name + " DewanBabu")
    return fullName
 }

 const restultFullName =  DewanBabu("Gyana");
 console.log(restultFullName)


 function firstElementDouble (array){
    // console.log("full array", array)
    const firstElment = array[0];
    return (firstElment * 2)
 }

 const numbers = [24,34,53,54,34,56];
 const dobouledNumber = firstElementDouble(numbers)
 console.log(dobouledNumber)