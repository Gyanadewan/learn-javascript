
function sumArray (numbers) { 
    let sum = 0
    for(let num of numbers){
       sum = sum + num;
    } 
       return sum;  
}

const numbers =  [2,23,45,32,6,8,12]
const result = sumArray(numbers); 
console.log(result)



function checkTemperature (temp){
    if(temp >= 30){
        return "Hot"
    }
    else if (temp <=15){
        return "Cold"
    }
    else{
        return "Normal" 
    }
}


console.log(checkTemperature(29));
console.log(checkTemperature(10));
console.log(checkTemperature(40));



function reversNumber (num){
    let str = num.toString();
    
    let charArray = str.split("")
    // console.log(charArray)
    
    let reversedArray = charArray.reverse();
    console.log(reversedArray)

    let reversedStr =reversedArray.join("");
   return reversedStr
}
let numberss = [5,6,7,8,9]
let restult = reversNumber(numberss);
console.log(restult)

