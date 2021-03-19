// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Printing the variables
// console.log(form,taskList,clearBtn,filter,taskInput)

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
    // DOM Event Listener
    document.addEventListener('DOMContentLoaded',getTasks)
    // Add task event
    form.addEventListener('submit',addTask)
    // Remove task event
    taskList.addEventListener('click',removeTask)
    // Clear Task
    clearBtn.addEventListener('click',clearTask)
    // Filter tasks
    filter.addEventListener('keyup',filterTasks)
}

function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null)
        tasks=[];
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach((task)=>{
        const li  = document.createElement('li');
        li.className='collection-item';
        // create text node and append to li
        li.appendChild(document.createTextNode(task));
        // Create new link element
        const link = document.createElement('a');
        link.className='delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>'
        // Append the link
        li.append(link);
        // Append li to ul
        taskList.append(li);
    })
}


// Add task
function addTask(e)
    {
        if(taskInput.value==='')
        {    alert('Add a task');}
        
        // Create li element
        const li  = document.createElement('li');
        li.className='collection-item';
        // create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new link element
        const link = document.createElement('a');
        link.className='delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>'
        // Append the link
        li.append(link);
        // Append li to ul
        taskList.append(li);

        // Storing in LocalStorage
        storeTaskInLocalStorage(taskInput.value);

        // clear the input
        taskInput.value=''
        e.preventDefault();
    }


// Remove Task
function removeTask(e){
    const target = e.target;
    if(target.parentElement.classList.contains('delete-item'))
        {
        if(confirm('Are you sure?'))
            target.parentElement.parentElement.remove();   

            // Remove from localstorage
           removeFromLocalStorage(target.parentElement.parentElement)
        }
    
    console.log(target)
}

// function remove from localstorage
function removeFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null)
        tasks=[];
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((task,index)=>{
        if(taskItem.textContent===task)
            tasks.splice(index,1);
    })

    localStorage.setItem('tasks',JSON.stringify(tasks))
}



// Clear Task
function clearTask(){
    // First way
    // taskList.innerHTML=''  

    // Second way
    while(taskList.firstChild)
        {
            taskList.removeChild(taskList.firstChild);
        }
        // clear tasks from localstorage
        clearTaskFromLocalStorage()
}


// function clearTaskFromLocalStorage
function clearTaskFromLocalStorage(){
    localStorage.clear();
}


// Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('.collection-item').forEach((task)=>{
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!=-1){
            task.style.display='block'
        }
        else{
            task.style.display='none';
        }
    });



    console.log(text)
    e.preventDefault();
}

// Function storetask
function storeTaskInLocalStorage(ip){
    let tasks;
    if(localStorage.getItem('tasks')===null)
        tasks=[];
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(ip)

    localStorage.setItem('tasks',JSON.stringify(tasks))
}