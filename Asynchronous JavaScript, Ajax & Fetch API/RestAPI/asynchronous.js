// Asynchronous with 
const profile = [
    {name:'Somil Bichpuriya',age:21,skills:'C/C++, Python'},
    {name:'Brad Traversy',age:29,skills:'Node, Mongo, Express, JavaScript'},
    {name:'Boris Pekshaver',age:33,skills:'Data Analysis'},
    {name:'Maximilian schwarzmüller',age:23,skills:'React, Data Analysis'},
    {name:'Kirill Eremenki',age:34,skills:'Tableau'},
]


function addInstructor(instructor,callback){
    setTimeout(()=>{
        profile.push(instructor)
        // this will be called before the 2 seconds over
    },2000)

    // It will be called when 2 seconds will get over and 
    // callback()

    
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

addInstructor({name:'Kane Frank',age:'29',skills:'Machine Learning'},showInstructor)

