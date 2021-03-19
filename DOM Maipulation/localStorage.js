// Set local storage item

// localStorage.setItem('name','john')
// localStorage.setItem('age','30')

// sessionStorage.setItem('kernel','RTLinux')

// remove from storage
// localStorage.removeItem('name')

// const getName = localStorage.getItem('name')
// const age = localStorage.getItem('age')
// // console.log(getName,age)

// // clear local storage
// localStorage.clear()
// console.log(getName,age)


document.querySelector('form').addEventListener('submit',function(e){
     
    
    const task = document.getElementById('task').value;
    // console.log(task)

    let tasks;

    if(localStorage.getItem('tasks')===null)
        {
            tasks=[]
        }
    else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    
    localStorage.setItem('tasks',JSON.stringify(tasks));
    alert('Task saved');
    e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(element => {
    console.log(element)
});