function convertToCamelCase(sentence) {
    const singleWord = sentence.trim().split(" ");

    const converUpperCase = singleWord.slice(1).map(upper => {
        return upper.charAt(0).toUpperCase() + upper.slice(1).toLowerCase();
    });

    return singleWord[0].toLowerCase() + converUpperCase.join("");
}

const sentence = "java script is fun";

console.log(convertToCamelCase(sentence));