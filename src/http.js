// HTTP REQUEST

class Requests{

    // GET DATA
    async getData(url){
        const response = await fetch(url);
        const data  = await response.json()
        return data
    }

    // POST DATA
    async postData(url,user){
        const response = await fetch(url,{method:"POST",headers:{'Content-type':'application/json'},body:JSON.stringify(user)})
        const data  =await response.json()
        return data
    }

    // PUT DATA
    async putData(url,updated_data){
        const response = await fetch(url,{method:"PUT",headers:{'content-type':'application/json'},body:JSON.stringify(updated_data)})
        const data = await response.json()
        return data
    }

    // DELETE DATA
    async deleteData(url){
        const response = await fetch(url,{method:"DELETE",headers:{'content-type':'application/json'}})
        const data  = await 'RESOURCE DELETED'
        return data
    }
}


export const http = new Requests()