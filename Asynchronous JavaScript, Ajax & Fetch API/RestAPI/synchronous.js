// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished
// Ex. forEach loop, setTimeOut, etc


// STEP 1
// const posts = [
//     {title:'Post1', body:'This is post one'},
//     {title:'Post2', body:'This is post two'}
// ]

// // STEP 2
// function createPost(post){
//     // STEP 4   callback function
//     setTimeout(()=>{
//         posts.push(post)    
//     },2000)
// }


// // STEP 3
// function getPost(){
//     setTimeout(()=>{
//         let output = '<ul>'
//         posts.forEach((post)=>{
//             output += `<li>${post.title}</li>`
//         })
//         output +='</ul>'
//         document.body.innerHTML = output
//     },4000)
// }


// createPost({title:'Post3',body:'This is post three'})
// getPost()


// Either make a try that the addInstructor function runs first 



// First way we can reduce the setTimeout of adding person
const profile = [
    {name:'Somil Bichpuriya',age:21,skills:'C/C++, Python'},
    {name:'Brad Traversy',age:29,skills:'Node, Mongo, Express, JavaScript'},
    {name:'Boris Pekshaver',age:33,skills:'Data Analysis'},
    {name:'Maximilian schwarzmüller',age:23,skills:'React, Data Analysis'},
    {name:'Kirill Eremenki',age:34,skills:'Tableau'},
]


function addInstructor(instructor){
    setTimeout(()=>{
        profile.push(instructor)
    },3000)
}

function showInstructor(){
    let fields = Object.keys(profile[0])
    let tr = `<tr>`
    for (let i=0;i<fields.length;i++)
        tr +=  `<th style='text-transform:capitalize'>${fields[i]}</th>`
    tr +=`</tr>`
    setTimeout(()=>{
        profile.forEach((instructor)=>{
            tr +=`<tr><td>${instructor.name}</td><td>${instructor.age}</td><td>${instructor.skills}</td></tr>`
        })
    document.querySelector('#table').innerHTML = tr
    },2000)
}

addInstructor({name:'Kane Frank',age:'29',skills:'Machine Learning'})
showInstructor()

