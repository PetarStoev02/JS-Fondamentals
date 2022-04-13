function solve(arr) {
  // swap {index1} {index2}”
  // “multiply {index1} {index2}”
  // “decrease” decreases all elements in the array with 1.
  let newArr = arr.shift().split(" ").map(Number);

  for (i = 0; i < arr.length; i++) {
    let comand = arr[i].split(" ");
    if (comand[0] === "swap") {
      let a = newArr[comand[1]];
      let b = newArr[comand[2]];
      newArr[comand[1]] = b;
      newArr[comand[2]] = a;
    } else if (comand[0] === "multiply") {
      newArr[comand[1]] = newArr[comand[2]] * newArr[comand[1]];
    } else if (comand[0] === "decrease") {
      let decreases = newArr.map((x) => x - 1);
      newArr = decreases;
    } else if (comand[0] === "end") {
      break;
    }
  }
  console.log(newArr.join(", "));
}
solve([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
