function convertToCamelCase(sentence) {
    const singleWord = sentence.split(" ")
   
    const converUpperCase = singleWord.slice(1).map(upper => {
      return  upper.charAt(0).toUpperCase() + upper.slice(1)
    })
    return  singleWord[0] + converUpperCase.join("")
   
}

sentence = "java script is fun"
console.log(convertToCamelCase(sentence))