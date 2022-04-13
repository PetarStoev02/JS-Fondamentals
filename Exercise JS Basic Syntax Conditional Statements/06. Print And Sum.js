function solve(startNumber, endNumber) {
  let sum = 0;
  let line = ``;
  sum += startNumber;
  line += startNumber + " ";

  while (startNumber !== endNumber) {
    startNumber++;
    sum += startNumber;
    line += startNumber + " ";
  }
  console.log(line);
  console.log(`Sum: ${sum}`);
}
solve(5, 10);
