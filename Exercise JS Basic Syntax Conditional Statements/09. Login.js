function solve(array) {
  let username = array.shift();
  let password = username.split(``).reverse().join("");

  for (i = 0; i < array.length; i++) {
    if (array[i] === password) {
      console.log(`User ${username} logged in.`);
    } else {
      if (i == 3) {
        console.log(`User ${username} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
    }
  }
}
solve(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
