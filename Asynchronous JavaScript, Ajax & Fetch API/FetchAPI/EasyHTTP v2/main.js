const request = new httpMethod;

// GET DATA
request.getData('https://reqres.in/api/users').then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})

// GET SINGLE DATA
request.getData('https://reqres.in/api/users/2').then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})

// POST DATA
const data = {
    name:'morpheus',
    job:'leader'
}

request.post('https://reqres.in/api/users',data).then((response)=>{
    console.log(response)
}).catch((error)=>{console.log(error)})


// PUT DATA
const upDateData = {
    name: "morpheus",
    job: "zion resident"
}

request.put('https://reqres.in/api/users/2',upDateData).then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})


// DELETE DATA
request.delete('https://reqres.in/api/users/2').then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})  