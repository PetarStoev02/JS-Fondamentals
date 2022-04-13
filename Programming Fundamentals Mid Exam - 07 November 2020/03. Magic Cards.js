function solve(arr) {
  let cards = arr[0].split(":");
  let newDeck = [];

  for (i = 1; i < arr.length; i++) {
    let comand = arr[i].split(" ");
    if (comand[0] === "Add") {
      if (cards.includes(comand[1])) {
        newDeck.push(comand[1]);
      } else if (cards.includes(comand[1]) === false) {
        console.log("Card not found.");
      }
    } else if (comand[0] === "Insert") {
        let index = comand[2];
      if (cards[index]=== undefined||cards.includes(comand[1]) === false) {
        console.log("Error!");
      } else {
        
        newDeck.splice(index, 0, comand[1]);
      }
    } else if (comand[0] === "Remove") {
      if (newDeck.includes(comand[1]) === false) {
        console.log("Card not found.");
      } else if (newDeck.includes(comand[1])) {
        let index = newDeck.indexOf(`${comand[1]}`);
        newDeck.splice(index, 1);
      }
    } else if (comand[0] === "Swap") {
      let a = comand[1];
      let b = comand[2];
      let index = newDeck.indexOf(`${comand[1]}`);
      let index2 = newDeck.indexOf(`${comand[2]}`);
      newDeck[index] = b;
      newDeck[index2] = a;
    } else if (comand[0] === "Shuffle" && comand[1] === "deck") {
      newDeck.reverse();
    } else if (comand[0] === "Ready") {
      console.log(newDeck.join(" "));
      break;
    }
  }
}
solve([
  "Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
  "Add Moonfire",
  "Add Pounce",
  "Add Bite",
  "Add Wrath",
  "Insert Claw 7",
  "Swap Claw Moonfire",
  "Remove Bite",
  "Shuffle deck",
  "Ready",
]);
