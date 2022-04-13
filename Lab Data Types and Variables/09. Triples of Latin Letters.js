function solve(n) {
  let latter = String.fromCharCode(97 + n);
  for (i = 0; i <= n; i++) {
    let latterI = String.fromCharCode(97 + i);
    for (j = 0; j <= n; j++) {
      let latterJ = String.fromCharCode(97 + j);
      for (k = 0; k <= n; k++) {
        let latterk = String.fromCharCode(97 + k);
        if (k !=n&&i !=n&&j!=n) {
          console.log(`${latterI}${latterJ}${latterk}`);
        }
      }
    }
  }
}
solve(3);
