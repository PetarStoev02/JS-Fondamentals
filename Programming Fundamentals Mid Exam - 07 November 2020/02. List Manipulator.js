function solve(arr) {
  let newArr = arr[0].split(", ");
  let newArr2 = arr[0].split(", ");
  let blacklisted = 0;
  let lostNames = 0;
  let isBlacklistet = [];
  let isLost = [];

  for (i = 1; i < arr.length; i++) {
    let comand = arr[i].split(" ");
    if (comand[0] === "Blacklist") {
      if (newArr.includes(comand[1])) {
        console.log(`${comand[1]} was blacklisted.`);
        isBlacklistet.push(comand[1]);
        let index = newArr.indexOf(`${comand[1]}`);
        newArr2[index] = "Blacklisted";
        blacklisted++;
      } else {
        console.log(`${comand[1]} was not found.`);
      }
    } else if (comand[0] === "Error") {
      if (
        isBlacklistet.includes(newArr[Number(comand[1])])=== false &&
        isLost.includes(newArr[Number(comand[1])]) === false
      ) {
        isLost.push(newArr[Number(comand[1])]);
        console.log(`${newArr[Number(comand[1])]} was lost due to an error.`);
        let index2 = newArr.indexOf(newArr[Number(comand[1])]);
        newArr2[index2] = "Lost";
        lostNames++;
      }
    } else if (comand[0] === "Change") {
      if (
        isBlacklistet.includes(newArr[Number(comand[1])]) ||
        isLost.includes(newArr[Number(comand[1])]) === false
      ) {
        console.log(
          `${newArr[Number(comand[1])]} changed his username to ${comand[2]}.`
        );
        let index3 = newArr.indexOf(newArr[Number(comand[1])]);
        newArr2[index3] = `${comand[2]}`;
      }
    } else if (comand[0] === "Report") {
      console.log(`Blacklisted names: ${blacklisted}`);
      console.log(`Lost names: ${lostNames}`);
      console.log(newArr2.join(" "));
      break;
    }
  }
}
solve(["Mike, John, Eddie",
"Blacklist Mike",
"Error 0",
"Error 1",
"Change 2 Mike123",
"Report"]);
