function solve(budget, students, flourPrice, eggPrice, apronPrice) {
  let neededMoney = 0;
  let itemsCost = 0;
  let freePackage = 0;
  for (let i = 1; i <= students; i++) {
    if (i % 5 === 0) {
      freePackage++;
    }
  }
  itemsCost +=
    apronPrice * Math.ceil(students + students * 0.2) +
    eggPrice * 10 * students +
    flourPrice * (students - freePackage);
    

  if (itemsCost <= budget) {
    console.log(`Items purchased for ${itemsCost.toFixed(2)}$.`);
  } else {
    neededMoney = itemsCost - budget;
    console.log(`${neededMoney.toFixed(2)}$ more needed.`);
  }
}
solve(50,
    2,
    1.0,
    0.10,
    10.0);
