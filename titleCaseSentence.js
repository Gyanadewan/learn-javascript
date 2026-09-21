function titleCaseSentence(str) {
  const words=  str.toLowerCase().trim().split(/\s+/);

   const result = words.map( word => word.slice(0, 1).toUpperCase() + word.slice(1))
    return result.join(" ")
}

console.log(titleCaseSentence("  kamal     salam   "))
console.log(titleCaseSentence( "a short sentence"))
