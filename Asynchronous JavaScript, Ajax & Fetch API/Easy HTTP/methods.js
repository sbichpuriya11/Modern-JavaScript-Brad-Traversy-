// Initialization
function easyHTTP(){
    this.http = new XMLHttpRequest()
}


// GET ALL USERS
easyHTTP.prototype.getAllUsers = function(url,callback){
    this.http.open('GET',url,true)
    let self = this
    this.http.onload = function(){
        if(self.http.status===200)
            callback(null,self.http.responseText)
        else    
            callback('ERROR '+self.http.status)
    }
    this.http.send()
}

// GET SINGLE USER
easyHTTP.prototype.getSingle = function(url,callback){
    this.http.open('GET',url,true)
    let self = this
    this.http.onload = function(){
        if(self.http.status ===200)
            callback(null,self.http.responseText)
        else
            callback('ERROR '+self.http.responseText)
    }

    this.http.send()
}


// POST DATA
easyHTTP.prototype.postData = function(url,data,callback){
    this.http.open('POST',url,true)
    this.http.setRequestHeader('Content-type','	application/json')
    let self = this
    this.http.onload = function(){
        callback(null,self.http.responseText)
        
    }
    this.http.send(JSON.stringify(data))
}


// PUT DATA
easyHTTP.prototype.putData = function(url,data,callback){
    this.http.open('PUT',url,true)
    let self = this

    this.http.setRequestHeader('content-type','application/json')
    this.http.onload = function(){
        callback(null,self.http.responseText)
    }

    this.http.send(JSON.stringify(data))
}


// DELETE DATA
easyHTTP.prototype.deleteData = function(url,callback){
    this.http.open('DELETE',url,true)
    let self = this
    this.http.onload = function(){
        if(self.http.status===200)
            callback(null,'DATA DELETED SUCCESSFULLY')
        else    
            callback('ERROR: '+self.http.status)
    }
    this.http.send()
}