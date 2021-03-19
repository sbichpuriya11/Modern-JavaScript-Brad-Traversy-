export const john = {
    name:'John',
    age:30
}


export function sayHello(){
    console.log(`Hello ${john.name}, welcome to the course`)
    return null
}

const greet = function(){
    return `Hello ${john.name}`
}

// By using export default we don't have use curly braces while importing
export default greet