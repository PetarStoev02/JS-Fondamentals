function solve(n) {
  // {number} X {times} = {product}
  let times = 10;
  for (i = 1; i <= times; i++) {
    let product = n * i;
    console.log(`${n} X ${i} = ${product}`);
  }
}
solve(7);
