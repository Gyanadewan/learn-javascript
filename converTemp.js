function convertTemperature(value, unit) {
       if (unit === "F"){
          const temp =  (value - 32) * 5/9
           return Math.round(temp * 100) / 100
       }
       else if (unit === "C"){
          const temp = (value * 9/5) + 32
          return Math.round(temp * 100) / 100
       }
}

const   value =  0, unit = "C"
console.log(convertTemperature(value,unit))