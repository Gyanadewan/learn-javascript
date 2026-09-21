function countWordFrequencies(sentence) {
  const words = sentence
    .toLowerCase()
    .split(/[^a-z0-9]+/);

  const result = {};

  for (const word of words) {
    if (word === "") {
      continue;
    }

    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  return result;
}
 const sentence = "The quick brown fox jumps over the lazy dog."
console.log(countWordFrequencies(sentence));
console.log(countWordFrequencies("Hello world, hello!"));

console.log(
  countWordFrequencies("The quick brown fox jumps over the lazy dog.")
);