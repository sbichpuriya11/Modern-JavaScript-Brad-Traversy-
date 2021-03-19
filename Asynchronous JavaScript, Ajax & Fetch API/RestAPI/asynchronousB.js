const students = [
    {name:'Rohan',course:'JavaScript'},
    {name:'Mike',course:'Python'}
]


function enrollStudent(newStudent,callback){
    setTimeout(()=>{
        students.push(newStudent)
        callback()
        console.log('Student has been enroll')
    },3000)

}

function getStudent(){
    let output=''    
    setTimeout(()=>{
        students.forEach((candidate)=>{
            output +=`<li>${candidate.name}</li>`
        })
    document.querySelector('ul').innerHTML = output
    console.log('Students have been fetched')
    },1000)
}

const newStudent = {name:'Mark',course:'.Net'}
enrollStudent(newStudent,getStudent)
// getStudent()