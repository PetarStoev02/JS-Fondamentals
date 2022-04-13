function solve(array, n) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (Number(array[i]) + Number(array[j]) === n) {
        console.log(`${array[i]} ${array[j]}`);
      }
    }
  }
}
solve([1, 2, 3, 4, 5, 6],
    6);
