function solve(num) {
  let sum = 0;
  let flag = 0;
  for (let i = 1; flag < num; i++) {
    if (i % 2 == 1) {
      console.log(i);
      sum += i;
      flag += 1;
    }
  }
  console.log(`Sum: ${sum}`);
}
solve(5);
