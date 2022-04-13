function solve(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;
  let equeal = true;
  for (let i = 0; i < arr1.length; i++) {
    sum1 += Number(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    sum2 += Number(arr1[i]);
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      equeal = false;
      break;
    }
  }
  if (equeal === true) {
    console.log(`Arrays are identical. Sum: ${sum1}`);
  }
}
solve(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
