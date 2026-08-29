function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
  let remaining = totalMoney - cakeCost;

  let donuts = 0;

  if (remaining > 0) {
    donuts = Math.floor(remaining / donutCost);
  }

  let finalMoney = remaining - donuts * donutCost;

  return finalMoney;
}

console.log(calculateRemainingMoney(10, 20, 5)); // -10
console.log(calculateRemainingMoney(50, 30, 7)); // 6