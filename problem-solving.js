
// function sumArray (numbers) { 
//     let sum = 0
//     for(let num of numbers){
//        sum = sum + num;
//     } 
//        return sum;  
// }

// const numbers =  [2,23,45,32,6,8,12]
// const result = sumArray(numbers); 
// console.log(result)



// function checkTemperature (temp){
//     if(temp >= 30){
//         return "Hot"
//     }
//     else if (temp <=15){
//         return "Cold"
//     }
//     else{
//         return "Normal" 
//     }
// }


// console.log(checkTemperature(29));
// console.log(checkTemperature(10));
// console.log(checkTemperature(40));



// function reversNumber (num){
//     let str = num.toString();
    
//     let charArray = str.split("")
//     // console.log(charArray)
    
//     let reversedArray = charArray.reverse();
//     console.log(reversedArray)

//     let reversedStr =reversedArray.join("");
//    return reversedStr
// }
// let numberss = [5,6,7,8,9]
// let restult = reversNumber(numberss);
// console.log(restult)

 


// function checkForMoney (blance){
//     if(blance>=10000000){ 
//        return ("ore baba tui toh Kotipoti")
//     }
//     else if (blance >=100000){
//         return ("ore baba tui toh lackpoti ")
//     }
//     else if (blance >= 1000){
//          return ("ore baba tui toh hajar takar malik")
//     }
//     else{
//          return ("bhai tor kache taka kom tui taka kama!")
//     }
// }

// const inputYourMoney  = checkForMoney(29111199)
// console.log(inputYourMoney)




// function studentsIdentify (students){
//     // console.log(students.address.zela)

//     if(students.name ==="Gyana"){
//          console.log("tomar name thik ache")
     
//     }
//     else{
//        console.log ("tomar name vul ache")
//     }
//     if ( students.roll === 20){
//         console.log("tomar roll thik ache")
//     }
//     else{
//        console.log ("tomar roll vul")
//     }

//    if (students.address.zela === "KhagraChari"){
//         console.log ("tomar Zela thik ache")
//    }
//    else {
//       console.log("tomar zela thik ney")
// }
//    if (students.address.upazila === "Mohalchari"){
//          console.log ("tomar Upazela thik ache")
//    }
   
//    else {
//     console.log ("tomar Upazela thik ney")
// }
// }
// const students= {
//     name : "Gyana",
//     roll : 20,
//     address: {
//         zela: "KhagraChari",
//         upazila: "Mohalchari"
//     }
// }

// const identify = studentsIdentify(students)
// console.log(identify)




// function studentsIdentify (students){
//     // console.log(students.address.zela)
//     let message = "";

//     if(students.name ==="Gyana"){
//          message = ""

//     }
//     else{
//        console.log ("tomar name vul ache")
//     }
//     if ( students.roll === 20){
//         console.log("tomar roll thik ache")
//     }
//     else{
//        console.log ("tomar roll vul")
//     }

//    if (students.address.zela === "KhagraChari"){
//         console.log ("tomar Zela thik ache")
//    }
//    else {
//       console.log("tomar zela thik ney")
// }
//    if (students.address.upazila === "Mohalchari"){
//          console.log ("tomar Upazela thik ache")
//    }
   
//    else {
//     console.log ("tomar Upazela thik ney")
// }
// }
// const students= {
//     name : "Gyana",
//     roll : 20,
//     address: {
//         zela: "KhagraChari",
//         upazila: "Mohalchari"
//     }
// }


// const identify = studentsIdentify(students)
// console.log(identify)



function productOfDigits(num){
     let str = num.toString()
     let total = 1;
     for (let char of str){
        total = total * Number(char) ;
     }
     return total
}

 const numbers = productOfDigits(123)
 console.log("eitah total number",numbers)

