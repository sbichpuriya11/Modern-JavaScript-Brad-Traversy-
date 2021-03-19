const http = new EasyHTTP


// GET USERS ASYNCHRONOUS METHOD
// http.get('https://jsonplaceholder.typicode.com/users')




// SYNCHRONOUS METHOD
// const users = http.get('https://jsonplaceholder.typicode.com/users')
// console.log(users)


// http.get('https://jsonplaceholder.typicode.com/users').then((success)=>{
//     console.log(success)
// }).catch((fail)=>{
//     console.log(fail)
// })


// CREATE DATA
const data = {
    name:'John Doe',
    username:'johnDoe',
    email:'john@gmail.com'
}

// POST METHOD
http.post('https://jsonplaceholder.typicode.com/users',data).then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})


const brads_data={
    name:'Brad Traversy',
    email:'Brad@@#'
}
// PUT METHOD
http.put('https://jsonplaceholder.typicode.com/users/3',brads_data).then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})

// DELETE METHOD
http.delete('https://jsonplaceholder.typicode.com/users/3').then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})