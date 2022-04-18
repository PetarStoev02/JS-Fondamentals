let str='My, Keyboard, Is, Broken, Sorry, Maybe, I, Shall, Try, A, Typewriter'

let words=str.split(", ")
let newArr=[]



let topRow="q, w, e, r, t, y, u, i, o, p"
topRow=topRow.split(", ")


let middleRow="a, s, d, f, g, h, j, k, l"
middleRow=middleRow.split(", ")


let bottomRow="z, x, c, v, b, n, m"
bottomRow=bottomRow.split(", ")



for(i=0;i<words.length;i++){
 
    let curentWord=words[i].split("")
    curentWord = curentWord.map(letter => letter.toLowerCase());

    const containsAllTop = curentWord.every(element => {
        return topRow.includes(element);
      });

      const containsAllMiddle = curentWord.every(element => {
        return middleRow.includes(element);
      });

      const containsAllBottom = curentWord.every(element => {
        return bottomRow.includes(element);
      });
    


    if(containsAllTop){
       newArr.push(words[i])
    }else if(containsAllMiddle){
        newArr.push(words[i])
     }else if(containsAllBottom){
        newArr.push(words[i])
     }

}

console.log(newArr.toString());

