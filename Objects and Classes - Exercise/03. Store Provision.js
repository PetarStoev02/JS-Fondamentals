function solve(stock, orderedProducts) {
  let shop = {};

  for (let i = 0; i < stock.length; i += 2) {
    const element = stock[i];
    shop[element] = Number(stock[i + 1]);
  }
  for (let i = 0; i < orderedProducts.length; i += 2) {
    const element = orderedProducts[i];
    if (shop.hasOwnProperty(element)) {
      shop[element] += Number(orderedProducts[i + 1]);
    } else {
    shop[element] = Number(orderedProducts[i + 1]);
    }
  }
  Object.keys(shop).forEach(key => 
    console.log(`${key} -> ${shop[key]}`))
}
solve(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
        ]);
