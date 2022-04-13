function solve(arr) {
  let newArr = [];

  for (i = 0; i < arr.length; i++) {
    let isBigger = true;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        isBigger = false;
        break;
      }
    }
    if (isBigger) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.join(" "));
}
solve([41, 41, 34, 20]);
