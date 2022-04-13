function money(distance,passengers,priceLiterD){
// Calculate the fuel by knowing that an empty bus can pass 100 km with 7L diesel.
// One person in that bus excluding the driver increases fuel consumption by 100 milliliters.
// The money is calculated by multiplying the fuel price with the needed fuel for the trip.
let fuel=(distance/100)*7
fuel+=passengers*0.1
let total=fuel*priceLiterD
console.log(`Needed money for that trip is ${total}lv.`)
}
money(260, 9, 2.49)