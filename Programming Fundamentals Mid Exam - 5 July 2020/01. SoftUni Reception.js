function solve(arr) {
    let [emp1,emp2,emp3,people]=arr.map(Number)
  let hours = 0;
  while (people> 0) {
    hours++;
    if (hours % 4 === 0) {
        people-= 0;
    } else {
        people -=emp1+emp2+emp3;
    }
  }
  console.log(`Time needed: ${hours}h.`);
}
solve(['5','6','4','20']);
