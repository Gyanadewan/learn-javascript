function convertSeconds (minute) {
    const minuteTosec = minute*60
    return  minuteTosec;
}

console.log(convertSeconds(5))


function fahrenheitToCelsius (F) {
    const convertfarenToCelsius = (F-32)*5/9
    return convertfarenToCelsius
}
console.log(fahrenheitToCelsius(68))


function checkNumber (number){
    if(number === 0){
       return "zero";
    }
     else if(number>0){
        return "positive"
     }
      else{
         return "negative"
      }
}

console.log(checkNumber(-1))