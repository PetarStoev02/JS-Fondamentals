function solve(arr) {
  for (const line of arr) {
    let number = 0;
    let names = {};
    names.curentName=line
    number += line.length;
   
    console.log(`Name: ${names.curentName} -- Personal Number: ${number}`);
  }
}
solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
