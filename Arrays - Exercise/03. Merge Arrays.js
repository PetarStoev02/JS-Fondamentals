function solve(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      let sum = Number(arr1[i]) + Number(arr2[i]);
      newArr.push(sum);
    } else if (i % 2 === 1) {
      newArr.push(arr1[i] + arr2[i]);
    }
  }
  console.log(newArr.join(" - "))
}
solve(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
