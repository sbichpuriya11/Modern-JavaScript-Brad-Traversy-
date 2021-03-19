function easyHTTP (){
    this.xhr = new XMLHttpRequest()
}


// GET DATA
easyHTTP.prototype.getData = function(url,callback){
    this.xhr.open('GET',url,true)
    let self = this
    this.xhr.onload = function(){
        if(self.xhr.status===200)
            callback(null,self.xhr.responseText)
        else    
            callback('ERROR: '+self.xhr.status)
    }
    this.xhr.send()
}


// POST DATA
easyHTTP.prototype.postData = function(url,data,callback){
    this.xhr.open('POST',url,true)
    let self = this

    this.xhr.setRequestHeader('Content-type','application/json')
    this.xhr.onload = function(){
        callback(null,self.xhr.responseText)
    }

    this.xhr.send(JSON.stringify(data))
}


// PUT DATA
easyHTTP.prototype.putData = function(url,data,callback){
    this.xhr.open('PUT',url,true)
    this.xhr.setRequestHeader('Content-type','application/json')
    let self  = this
    this.xhr.onload = function(){
        callback(null,self.xhr.responseText)
    }

    this.xhr.send(JSON.stringify(data))
}

// DELETE DATA
easyHTTP.prototype.deleteData = function(url,callback){
    this.xhr.open('DELETE',url,true)
    let self = this
    this.xhr.onload = function(){
        if(self.xhr.status===200)
            callback(null,'DATA DELETED SUCCESSFULLY')
        else
            callback('ERROR: '+self.xhr.responseText)
    }

    this.xhr.send()


}