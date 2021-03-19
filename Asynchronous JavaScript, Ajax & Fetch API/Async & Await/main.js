const http = new Requests

// GET METHOD
http.getData('https://fakerestapi.azurewebsites.net/api/v1/Activities').then((response)=>{
    console.log(response)
})

// POST METHOD
const data = {
    title: "New Activity created",
    completed:true
}

http.postData('https://fakerestapi.azurewebsites.net/api/v1/Activities',data).then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})


// PUT METHOD
const updated_data = {
  title: "Updated Data",
  completed:false
}

http.putData('https://fakerestapi.azurewebsites.net/api/v1/Activities/2',updated_data).then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})


// DELETE METHOD
http.deleteData('https://fakerestapi.azurewebsites.net/api/v1/10').then((response)=>{
        console.log(response)
}).catch((error)=>{
    console.log(error)
})