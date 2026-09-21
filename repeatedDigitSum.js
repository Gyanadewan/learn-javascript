function repeatedDigitSum(n) {
  let sum = 0;

  const str = String(n);
  const digit = str.split("");

  for (const num of digit) {
    sum = sum + Number(num);
  }

  while (sum >= 10) {
    const digits = String(sum).split("");

    sum = 0;

    for (const num of digits) {
      sum = sum + Number(num);
    }
  }

  return sum;
}

console.log(repeatedDigitSum( 9875));
console.log(repeatedDigitSum(123));