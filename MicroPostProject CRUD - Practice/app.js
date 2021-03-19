const greeting = 'Hello World';
console.log(greeting);

// This is common js module syntax
const person = require('./myModule')
console.log(person)
console.log(person.name)
console.log(person.email)

// ES2015 Module


// import {john} from './myModuleA'
// import {sayHello} from './myModuleA'

// OR

import {john, sayHello} from './myModuleA'
console.log(john)
console.log(sayHello())


// OR import all
import * as mod from './myModuleA'
console.log(mod.john)
mod.sayHello()

// importing default module greeting
import greet from './myModuleA'
console.log(greet())