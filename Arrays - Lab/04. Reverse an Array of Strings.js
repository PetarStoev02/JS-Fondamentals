function solve(arr) {
  arr.reverse();
  let output = "";
  for (i = 0; i < arr.length; i++) {
    output += arr[i] + " ";
  }
  console.log(output);
}
solve(['33', '123', '0', 'dd']);
