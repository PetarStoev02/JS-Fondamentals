function solve(country) {
  let flag=0
  switch (country) {
    case "England":
      console.log("English");
      flag+=1
      break;
    case "USA":
      console.log("English");
      flag+=1
      break;
    case "Spain":
      console.log("Spanish");
      flag+=1
      break;
    case "Argentina":
      console.log("Spanish");
      flag+=1
      break;
    case "Mexico":
      console.log("Spanish");
      flag+=1
      break;
  }
  if (flag<1) {
    console.log("unknown");
  }
}
solve("England");
