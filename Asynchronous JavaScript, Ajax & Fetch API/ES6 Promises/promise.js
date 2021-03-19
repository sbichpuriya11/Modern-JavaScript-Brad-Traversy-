// BASIC
function callback(){
    return new Promise((resolve,reject)=>{
        const err=true
        setTimeout(()=>{
            if(!err)
                {
                    console.log('Your Promise has been resolved')
                    resolve('SUCCESS')
                }
            else
                {
                    console.log('Your Promise has been rejected')
                    reject('FAILED')
                }
        },3000)
    })
}


callback().then(function(resolved_msg){
    console.log(resolved_msg)
}).catch(function(reject_msg){
    console.log(reject_msg)
})





// ADVANCE
const posts = [
    {id:1,name:'Post 1',completed:false},
    {id:2,name:'Post 2',completed:false},
    {id:3,name:'Post 3',completed:true},
    {id:4,name:'Post 4',completed:false},
    {id:5,name:'Post 5',completed:true},
]

function addPost(post)
    {
        return new Promise((resolve,reject)=>{
            let err = false
            setTimeout(()=>{
                posts.push(post)
                if(!err)
                {
                   
                    resolve('SUCCESS')
                }
                else    
                {
                    reject('FAILED')
                }
            },3000)
        })
        
    }

function getPosts(){
    let tr=``
    setTimeout(()=>{
        posts.forEach((a_single_post)=>{
            tr += `<li>${a_single_post.name}</li>`
        })
    document.querySelector('div').innerHTML = tr
    },1000)
}

const newPost = {id:6,name:'Post 6',completed:true}

addPost(newPost).then(function(response){
    console.log(response    )
    getPosts()
}).catch(function(e){
    console.log(`${e} due to some error`)
})




// VERY ADVANCE
let p = new Promise((resolve,reject)=>{
    let a = 1+1
    if(a==1){
        resolve('Success')
    }
    else{
        reject('Failed')
    }
})


p.then((message)=>{
    console.log('This is in "then" '+message)
}).catch((error)=>{
    console.log('This is in "catch" '+error)
})


// VERY ADVANCE

const userLeft = false
const userWatchingCatMeme = false

function watchTutorialCallback(callback,errorCallback){
    if(userLeft){
        errorCallback({
            name:'User Left',
            message:':('
        })
    }
    else if(userWatchingCatMeme){
        errorCallback({
            name:'User Watching Cat Meme',
            message:'WebDevSimplified < Cat'
        })
    }
    else{
        callback('Thumbs up and subscribe')
    }
}


watchTutorialCallback((message)=>{
    console.log('Success: '+message)
},(error)=>{
    console.log(error.name+' '+error.message)
})


// USING PROMISE
function watchingTutorials(){
    return new Promise((resolve,reject)=>{
        if(userLeft)
            reject({name:'User Left',message:':('})
        else if(userWatchingCatMeme)
            reject({name:'User Watch Cat Meme',message:'WebDevSimplified < Cat'})
        else{
            resolve(' 👍 and Subscribe')
        }     
    })
}



watchingTutorials().then((success)=>{
    console.log('SUCESS :-'+success)
}).catch((err)=>{
    console.log('ERROR :-'+err.name+' '+err.message)
})