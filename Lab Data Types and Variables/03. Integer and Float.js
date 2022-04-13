function integer(n1,n2,n3){
let sum=n1+n2+n3
sum%1==0
if(sum%1==0){
    console.log(`${sum} - Integer`)
}else{
    console.log(`${sum} - Float`)
}
}
integer(100, 200, 303)