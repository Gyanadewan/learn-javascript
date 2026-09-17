function isPalindrome(str) {
 const convertLowacase = str.toLowerCase() 
  const cleanedText = convertLowacase.replace(/[^a-z0-9]/g, "");
  const reverse =  cleanedText.split("").reverse().join("")
  return  reverse === cleanedText ? true : false
}
const text =  "maDam"
console.log(isPalindrome(text))