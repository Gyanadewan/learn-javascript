
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



