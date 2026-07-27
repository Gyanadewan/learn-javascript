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

 const student = {
    name : "Abir",
    id: 15,
    marks :  95
 }

 function isStudentAplus (){
    const marks = student.marks;
    console.log("his marks", marks)
    if (marks >= 80){
        return true;
    }
    else{
        return false;
    }
 }

 const isAplus = isStudentAplus (student)
 console.log(isAplus)




  let sum = 0;
 function  sumOfArray(array) {
    
    for (let num of array){
         sum = sum+num;
    }
    return sum;
 }

 const numbers2 = [12,34,34,56,67];
 const result2 = sumOfArray(numbers2)
 console.log(result2)