// Create a symbol
const sym1 = Symbol()
const sym2 = Symbol('sym2')
console.log(sym1)
console.log(sym2)
console.log(typeof sym2)
console.log(Symbol()===Symbol())
console.log(Symbol('123')===Symbol('123'))
// console.log(`Hello ${sym1}`) //Generates error :- Cannot convert a Symbol value to a string
console.log(`Hello ${String(sym1)}`)


// Unique Object Keys
const KEY1 = Symbol()
const KEY2 = Symbol('sym2')

const myObj = {}
myObj[KEY1] = 'prop1'
myObj[KEY2] = 'prop2'
console.log(myObj[KEY1])
console.log(myObj[KEY2])

myObj['KEY3'] = 'prop3'  //OR myObj.KEY3 = 'prop3'
myObj.KEY4 = 'prop4'
console.log(myObj.KEY3)
console.log(myObj)

// Symbols are not enumerable/considered in for..in 
for(let i in myObj){
    console.log(`${i}: ${myObj[i]}`)
}


// Symbols are ignored by JSON.stringify()
console.log(JSON.stringify({key:'prop'}))
console.log(JSON.stringify({[Symbol('sym1')]:'prop'}))