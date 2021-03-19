/**
* Easy HTTP Library
* Library for making HTTP request

* @version 2.0.0
* @author Brad Traversy
* @license nill
**/



// ASYNCHRONOUS METHOD
// class EasyHTTP{

//     // MAKE AN HTTP GET REQUEST
//     get(url){
//         fetch(url).then((res)=>{
//             return res.json()
//         }).then((data)=>{
//             console.log(data)
//         }).catch((error)=>{
//             console.log(error)
//         })
//     }
// }



// SYNCHRONOS METHOD
class EasyHTTP{

    // MAKE AN HTTP GET REQUEST
    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url).then((res)=>{
                return res.json()
            }).then((data)=>{
                resolve(data)
            }).catch((error)=>{
                reject(error)
            })
            })
        
    }


    // MAKE AN HTTP POST REQUEST

    post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                // THIS OBJECT IS MUST
                method:'POST',
                headers:{'Content-type':'application/json'},
                body:JSON.stringify(data)
            }).then((res)=>{
                return res.json()
            }).then((data)=>{
                resolve(data)
            }).catch((error)=>{
                reject(error)
            })
            })
    }

    // MAKE AN HTTP PUT REQUEST
    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{method:"PUT",headers:{"Content-type":'application/json'},body:JSON.stringify(data)}).then((result)=>{
                return result.json()
            }).then((final_data)=>{
                resolve(final_data)
            }).catch((error)=>{
                reject(error)
            })
        })

    }


    // MAKE AN HTTP DELETE REQUEST
    delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'DELETE',
                headers:{'Content-type':'application/json'}
            }).then((response)=>{
                return response.text()
            }).then((data)=>{
               resolve('Data deleted Successfully')
            }).catch((error)=>{
                reject("Your request can't be completed")
            })  
        })
    }
}