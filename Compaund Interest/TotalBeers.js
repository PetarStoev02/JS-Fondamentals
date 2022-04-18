
    let str="12,4,4"
 str=str.split(",")

 let flag=0
    
let b=Number(str[0])
let c=Number(str[1])
let e=Number(str[2])

let totalBeers=0

let curentCups=b/c
totalBeers+=curentCups


while(flag!=1){
let fullCups=0
    if(curentCups%e===1){
        totalBeers+=Math.floor(curentCups/e)
        fullCups+=Math.floor(curentCups/e)
        curentCups-=fullCups*e
        curentCups+=fullCups  
    }else {
        totalBeers+=Math.floor(curentCups/e)
        fullCups+=Math.floor(curentCups/e)
        curentCups-=fullCups*e
        curentCups+=fullCups

        break;
    }
}
console.log(totalBeers)









