function solve(arr, k){
    const filterItem = arr.filter((arr)=>{
        return arr === k
    })

    let curentNumber = Number(filterItem)


    if(curentNumber===k){
    return "YES"
    }else{
    return "NO"
    }
}
solve([5,4,3,2,1],1)

