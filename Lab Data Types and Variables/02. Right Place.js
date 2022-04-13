function solve(stringOne, char, stringTwo) {
  let word = stringOne.replace("_", char);
  let match = word == stringTwo ? "Matched" : "Not Matched";

  console.log(match);
}
solve("Str_ng", "I", "Strong");
