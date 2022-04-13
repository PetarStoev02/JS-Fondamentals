function solve(input) {
  let total = 0;
  let result = "Bought furniture:\n";
  for (const line of input) {
    let regex = />>(?<name>[A-Za-z]+)<<(?<prize>[\d]+(\.[\d]+)?)!(?<quantity>[\d]+)/g;
    let match = regex.exec(line);
    if (match) {
      result += match.groups.name + "\n";
      total += Number(match.groups.prize) * Number(match.groups.quantity);
    }
  }
  result+=`Total money spend: ${total.toFixed(2)}`
    console.log(result);
}
solve([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
