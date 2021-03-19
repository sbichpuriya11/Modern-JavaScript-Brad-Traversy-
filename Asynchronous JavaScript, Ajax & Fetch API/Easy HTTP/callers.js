const http = new easyHTTP

// GET POST

// console.log(http.getPost('https://jsonplaceholder.typicode.com/posts'))    //GIVES UNDEFINED
// http.getPost('https://jsonplaceholder.typicode.com/posts',function(error,mesage_coming_from_getPost){
//     if(error)
//         {console.clear()
//             console.log(error)
//         }
//         // document.querySelector('#output').textContent = mesage_coming_from_getPost
//     else    
//         console.log(mesage_coming_from_getPost)
// })



// POST
const data = {
    title:'Dynamic Data',
    body:'This is cusstom data'
}
// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,mess){
//     if(err)
//         console.log(err)
//     else
//         console.log(mess)
// })



// PUT
// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,post){
//     if(err)
//         console.log(err)
//     else
//         console.log(post)
// })



// DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,post){
    if(err)
        console.log(err)
    else    
        console.log(post)
})
