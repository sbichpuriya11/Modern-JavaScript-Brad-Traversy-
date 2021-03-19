// Initialize
let  http  = new easyHTTP()

// FETCH ALL USERS
http.getAllUsers('https://reqres.in/api/users?page',function(err,posts){
    if(err)
        console.log(err)
    else    
        console.log(ProgressEvent)
})

// FETCH SINGLE USER
http.getSingle('https://reqres.in/api/users/2',function(err,post){
    if(err)
        console.log(err)
    else    
        console.log(post)
})


// POST DATA
const data = {
    name:'morpheus',
    job:"leader"
}
http.postData('https://reqres.in/api/users',data,function(err,message){
    if(err)    
        console.log(err)
    else
        console.log(message)
})


// PUT DATA
const updateData = {
    first_name:'MICHAEL',
    last_name:"LAWSON"
}
http.putData('https://reqres.in/api/users/7',updateData,function(err,post){
    if(err)
        console.log(err)
    else    
        console.log('UPDATED '+post)
})


//DELETE DATA
http.deleteData('https://reqres.in/api/users/7',function(err,success){
    if(err)
        console.log(err)
    else
        console.log(success)
})