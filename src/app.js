import {http} from './http'
import {ui} from './ui'


// Get posts on DOM load
document.addEventListener('DOMContentLoaded',getPosts)

// Listen for add post
document.querySelector('.post-submit').addEventListener('click',submitPost)

// Listen for delete
document.querySelector('#post').addEventListener('click',deletePost)

// Listen for edit state
document.querySelector('#post').addEventListener('click',enableEdit)

// Listen for cancel
document.querySelector('.card-form').addEventListener('click',cancelEdit)

// Get Post
function getPosts(){
  http.getData('http://localhost:3000/posts').then((response)=>{
    // console.log(response)
    ui.showPost(response)
  }).catch((error)=>{
    console.log(error)
  })
}

// Submit Post
function submitPost(){
  const title = document.querySelector('#title').value
  const body = document.querySelector('#body').value
  const id = document.querySelector('#id').value
  // if both the keys and the value have the same name we can omit writing the key name 
  // and we can just pass only value
  // const data = {
  //   title:title,
  //   body:body
  // }

  const data = {
    title,
    body
  }
  // Validate input fields
  if(title.trim(' ')==='' || body.trim(' ')===''){
    ui.showAlert('All fields are mandatory','alert alert-danger')
  }
  else{
  // Check whether input field contains hidden ID or not
  // if yes then update and if not add new post
    if(id===''){
      // Create new post
       // Create Post
        http.postData('http://localhost:3000/posts',data).then((data)=> {
          
          ui.showAlert('Post added successfully','alert alert-success')
          ui.clearFields()
          getPosts()
          
        }).catch((error)=>{ 
          console.log(error)
        })
      }

  else{
      // Update the post
      http.putData(`http://localhost:3000/posts/${id}`,data).then((data)=> {
          
        ui.showAlert('Post Updated','alert alert-success')
        ui.changeFormState('add')
        getPosts()
        
      }).catch((error)=>{ 
        console.log(error)
      })
    }

    

   
}
}
// Delete Posts
function deletePost(e){
  // console.log(1)
  if(e.target.parentElement.classList.contains('delete')){
    const id = e.target.parentElement.dataset.id
    if(confirm('Are you sure?')){
      http.deleteData(`http://localhost:3000/posts/${id}`).then((response)=>{
          ui.showAlert('Post Removed','alert alert-success')
          getPosts()
      }).catch((error)=>{
        console.log(error)
      })
    }
  }

  ui.clearFields()
  ui.changeFormState('add')
  e.preventDefault()
}

// Enable edit state
function enableEdit(e){
if(e.target.parentElement.classList.contains('edit')){
    const id = e.target.parentElement.dataset.id
    const title  = e.target.parentElement.previousElementSibling.previousElementSibling.textContent
    const body = e.target.parentElement.previousElementSibling.textContent
    console.log(body)
    const data = {
        id,
        title,
        body
    }
    // Fill the form
    ui.fillForm(data)
}
  e.preventDefault()
}

// Cancel edit state
function cancelEdit(e){
  if(e.target.classList.contains('post-cancel')){
      ui.changeFormState('add')
  }
  e.preventDefault()
}
