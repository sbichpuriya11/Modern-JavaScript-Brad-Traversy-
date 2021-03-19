
// async function myFunc(){
   

//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Hello")
//         },3000)
//     })

//     const error = true
    
//     if(!error){
//         const res = await promise  //Wait until promise is resolved
//         return res
//     }
//     else{
//         await Promisereject(new Error('Something went wrong'))
//     }
    
// }

// myFunc().then((response)=>{
//     console.log(response)
// }).catch((error)=>{
//     console.log(error)
// })


// async function numerator(){
//     let response= new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('Promise resolved successfully!')
//         },3000)
//     })
    
//     const result = await response;

//     return result
// }

// numerator().then((response)=>{
//     console.log(response)
// }).catch((error)=>{
//     console.log(error)
// })



// async function getUsers(){
//     // await response of the fetch call
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
//     // only proceed once its resolved
//     const data = await response.json()

//     // only proceed once second promise is resolved
//     return data;
// }


// getUsers().then((users)=>{
//     console.log(users)
// }).catch((error)=>{
//     console.log(error)
// })


// console.log('This is some text')
async  function foo(){
    console.log("Inside foo ")
    const response = await fetch('https://api.github.com/users')
    console.log("Before response")
    const users = await response.json()
    console.log("After response")

    return users;
    // return "foo"
}

console.log("Before calling foo")
let a = foo()
console.log("After calling foo")
console.log(a)
foo().then((data)=>{
    console.log(data)
})
console.log("Last line of this js file")




