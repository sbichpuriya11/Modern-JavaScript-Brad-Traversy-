// Destructuring Assignment
let a,b
[a,b] = [100,200]


console.log(`A: ${a},B: ${b}`);
// Rest Pattern (All the left over stuff will get )
[a,b, ...rest] = [100,200,300,400,500]
console.log(`A: ${a},B: ${b}, REST: ${rest}`);

({a,b} = {a:100,b:200,c:300,d:400,e:500})
console.log(a,b);

({a,b,...rest} = {a:100,b:200,c:300,d:400,e:500})
console.log(a,b,rest);

// Array Destructuring
const people = ['John','Beth','Mike']
const [person1,person2,person3] = people
console.log(person1,person2,person3)

// Parse array returned from function
function getPeople(){
    return ['John','Beth','Mike']
}

const [person4,person5,person6] = getPeople()
console.log(person4,person5,person6)


// Object Destructuring
const person = {
    name:'John Doe',
    age:23,
    city:'Miami',
    gender:'Male',
    sayHello: function(){
        console.log('Hello')
    }
}

// Old ES5 Method
let name1 = person.name,age1 = person.age,city1 = person.city
console.log(name1,age1,city1);

// New ES6 Method
let {name,age,city,sayHello} = person;
console.log(name,age,city)
sayHello()