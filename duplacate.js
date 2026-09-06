function removeDuplicates(numbers) {
  let unique = [];

  for (let num of numbers) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }

  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
