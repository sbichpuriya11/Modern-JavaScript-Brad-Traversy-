console.log(1)

function easyHTTP(){
    this.xhr = new XMLHttpRequest()
}

// GET REQUEST

// URL https://jsonplaceholder.typicode.com/posts
// easyHTTP.prototype.getPost = function(dynamicURL,callBack){
//     this.xhr.open('GET',dynamicURL,true)  //true means asynchronous
//     let self = this
//     this.xhr.onload = function(){
//         if(self.xhr.status===200)
//             {callBack (self.xhr.responseText)}
//         else
//             {callBack('Error Code:- '+self.xhr.status)}
//     }
//     this.xhr.send()
// }   


// POST REQUEST
// easyHTTP.prototype.post = function(url,data_to_be_post,callBack){
//     this.xhr.open('POST',url,true)
    
//     // 1st STEP
//     this.xhr.setRequestHeader('Content-type','application/json')
    
//     let self = this
//     this.xhr.onload = function(){
//         callBack(null,self.xhr.resposeText)
//     }

//     //3rd STEP WE HAVE TO CONVERT THE DATA INTO JSON.stringify
//     this.xhr.send(JSON.stringify(data_to_be_post))
// }

// PUT REQUEST
// easyHTTP.prototype.put = function(url,data_to_be_post,callBack){
//     this.xhr.open('PUT',url,true)
    
//     // 1st STEP
//     this.xhr.setRequestHeader('Content-type','application/json')
    
//     let self = this
//     this.xhr.onload = function(){
//         callBack(null,self.xhr.resposeText)
//     }

//     //3rd STEP WE HAVE TO CONVERT THE DATA INTO JSON.stringify
//     this.xhr.send(JSON.stringify(data_to_be_post))
// }


// DELETE REQUEST
easyHTTP.prototype.delete = function(url,callBack){
    this.xhr.open('DELETE',url,true)
    let self = this
    this.xhr.onload = function(){
        if(self.xhr.status===200)
            callBack(null,'Post Deleted Sucessfully')
        else
            callBack('Error: '+self.xhr.resposeText)
    }


    this.xhr.send()
}
