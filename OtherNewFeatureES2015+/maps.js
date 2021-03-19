// Maps = key-value pairs - can use ANY type as a key or value
const map1 = new Map()

// set keys
const key1 = 'some string'
const key2 = {}
const key3 = function(){}

// Set map values by key
map1.set(key1,'Value of key1')
map1.set(key2,'Value of key2')
map1.set(key3,'Value of key3')

// Get values by keys
console.log(map1.get(key1))
console.log(map1.get(key2))
console.log(map1.get(key3))

// Count values
console.log(map1.size)

// Iterating maps

// Loop using for...of to get keys ans values
for(let [key,value] of map1){
    console.log(`${key}: ${value}`)
}

// Iterate Key only
for(let key of map1.keys()){
    console.log(`KEY ${key}`)
}

// Iterate Values only
for(let value of map1.values()){
    console.log(`VALUE ${value}`)
}

// Loop with forEach
map1.forEach((key,value)=>{
    console.log(`${key} ${value}`)
})

// Convert Sets to Array

// Create an array of the key value pairs
const keyValArr = Array.from(map1)
console.log(keyValArr)

// Create an array of the value pairs
const valArr = Array.from(map1.values())
console.log(valArr)

// Create an array of the keys pairs
const keyArr = Array.from(map1.keys())
console.log(keyArr)