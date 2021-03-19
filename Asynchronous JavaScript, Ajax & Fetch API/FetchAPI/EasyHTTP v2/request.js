class httpMethod{

    // GET DATA
    getData(url){
        return new Promise((resolve,reject)=>{
            fetch(url).then((data)=>{
                return data.json()
            }).then((response)=>{
                resolve(response)
            }).catch((error)=>{
                reject(error)
            })
        })
    }

    // GET SINGLE DATA
    getSingleData(){
        return new Promise((resolve,reject)=>{
            fetch(url).then((data)=>{
                return data.json()
            }).then((response)=>{
                resolve(response)
            }).catch((error)=>{
                reject(error)
            })
        })
    }

    // POST DATA
    post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(data)})
            .then((data)=>{
                return data.json()
            }).then((response)=>{
                resolve(response)
            }).catch((error)=>{
                reject(error)
            })
        })
    }

    // PUT DATA
    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{method:'PUT',headers:{"Content-type":"application/json"},body:JSON.stringify(data)}).then((data)=>{
                return data.json()
            }).then((response)=>{
                resolve(response)
            }).catch((error)=>{
                reject(error)
            })
        })
    }

    // DELETE DATA
    delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url,{method:"DELETE",headers:{'Content-type':'application/json'}}).then((data)=>{
                return data.text()
            }).then((response /*OPTIONAL*/ )=>{
                resolve("DATA DELETED SUCCESSFULLY")
            }).catch((error)=>{
                reject('YOUR REQUEST CAN\'T BE COMPLETED')
            })
        })
    }

}