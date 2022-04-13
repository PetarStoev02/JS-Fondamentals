function solve(year, month, day) {
  
  let thisDay = new Date(year, month, day);

  console.log(
    `${thisDay.getFullYear()}-${thisDay.getMonth()}-${thisDay.getDate()}`
  );
}
solve(1951,12, 24);
