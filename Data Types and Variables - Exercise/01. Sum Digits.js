function solve(num) {
    num = num.toString();
    let sum = 0;
    for(i=0;i<num.length;i++){
sum+=Number(num[i])
    }
    console.log(sum)
}
solve(245678);
