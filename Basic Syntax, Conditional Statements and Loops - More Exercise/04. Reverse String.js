function solve(string) {
  string = string.toString();
  let reverseString = string.split("").reverse().join("");

  console.log(reverseString);
}
solve("Hello");
