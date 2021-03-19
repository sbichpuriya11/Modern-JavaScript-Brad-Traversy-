const http = new easyHTTP


// GET DATA
http.getData('https://fakerestapi.azurewebsites.net/api/v1/Activities',function(err,response){
    if(err)
        console.log(err)
    else    
        console.log(response)
})

// POST DATA
const data = {title:'Random ACtiviry',completed:true}
http.postData('https://fakerestapi.azurewebsites.net/api/v1/Activities',data,function(err,response){
    if(err)
        console.log(err)
    else
        console.log(response)
})

// PUT DATA
const newData = {title:'NEW TITLE POSTED',completed:false}

http.putData('https://fakerestapi.azurewebsites.net/api/v1/Activities/4',newData,function(err,response){    
    if(err)
        console.log(err)
    else
        console.log(response)
})

// DELETE DATA
http.deleteData('https://fakerestapi.azurewebsites.net/api/v1/Activities/8',function(err,response){
    if(err)
        console.log(err)
    else
        console.log(response)
})