function solve(base, increment) {
  let height = 1;
  let tatalStone = 0;
  let totalMarble = 0;
  let lapis = 0;
  let gold = 0;

  while (base > 2) {
    let marble = base * 4 - 4;
    let stone = base * base - marble;

    if (height%5 === 0) {
      lapis += marble;
    } else {
      totalMarble += marble;
    }
    tatalStone += stone;
    height += 1;
    base -= 2;
  }
  gold += base * base;

  stone = Math.ceil(tatalStone * increment);
  marble = Math.ceil(totalMarble * increment);
  lapis = Math.ceil(lapis * increment);
  gold = Math.ceil(gold * increment);
  height = Math.floor(height * increment);

  console.log(`Stone required: ${stone}`);
  console.log(`Marble required: ${marble}`);
  console.log(`Lapis Lazuli required: ${lapis}`);
  console.log(`Gold required: ${gold}`);
  console.log(`Final pyramid height: ${height}`);
}
solve(23,
    0.5);
