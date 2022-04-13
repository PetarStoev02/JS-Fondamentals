function solve(arr) {
  let newObj = {};
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr = arr[i].split(` | `);

    newObj.town = newArr[0];
    newObj.latitude = Number(newArr[1]).toFixed(2);
    newObj.longitude = Number(newArr[2]).toFixed(2);
    console.log(newObj);
  }
}
solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
