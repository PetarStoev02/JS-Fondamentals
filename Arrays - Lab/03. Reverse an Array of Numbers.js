function solve(n, arr) {
  let newArr = [];
  for (i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  newArr.reverse();

  let result = "";
  for (i = 0; i < newArr.length; i++) {
    result += newArr[i] + " ";
  }
  console.log(result);
}
solve(3, [10, 20, 30, 40, 50]);
