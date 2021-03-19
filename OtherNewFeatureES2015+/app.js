// Iterator Example
function nameIterator(names){
    let nextIndex = 0


    return {
        next:function(){
            return nextIndex<names.length ? {value:names[nextIndex++],done:false}:{done:true}
        }
    }
}
               
// Create an array of names
const namesArr = ['Jack','Joe','Brad','John']
// Init interator and pass in the names array
const names = nameIterator(namesArr)

console.log(names.next().value)  // Jack
console.log(names.next().value)  // Jill
console.log(names.next().value)  // Brad
console.log(names.next().value)  // John
console.log(names.next().done)


// Generator Example
function *sayNames(){
    yield 'Jack'
    yield 'Jill'
    yield 'James'
    yield 'John'
}

const student = sayNames()
console.log(student.next().value)
console.log(student.next().value)
console.log(student.next().value)
console.log(student.next().value)
console.log(student.next().value)

// ID creator
function * createIds(){
    let index = 1
    while(true){
        yield index++
        }
}

const gen = createIds()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)