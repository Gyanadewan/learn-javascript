function countAdults (People){
    if (!Array.isArray(People) || People.length === 0){
       return "Invalid"
    }
    let adultCount = 0;
   for ( let singleMan of People)
     if ( singleMan.age >=18){
        adultCount ++;
     }
     return adultCount
}

 console.log (countAdults ([
  { name: "Rahim", age: 17 },
  { name: "Karim", age: 20 },
  { name: "Jamal", age: 25 }
]))