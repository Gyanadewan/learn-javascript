function reverseEachWord(str) {
 if (typeof str === "string"){
    const words = str.split(" ")
    const result = words.map(word =>{
      return  word.split("").reverse().join("")
    } )
    return result .join(" ")
}
else {
    return  "Please provide a string"
}
 }
  
const str ="Gyana"
console.log(reverseEachWord(str))