function solve(startYield) {
  let totalSpice = 0;
  let totalDays = 0;
  let crew = 26;
  while (startYield >= 100) {
    totalSpice += startYield - crew;
    startYield -= 10;
    totalDays++;
  }
  totalSpice -= crew;
  console.log(totalDays);
  console.log(totalDays === 0 ? 0 : totalSpice);
}
solve(111);
