class UI{
    constructor(){
        this.post = document.querySelector('#post')
        this.titleInput = document.querySelector('#title')
        this.bodyInput = document.querySelector('#body')
        this.idInput = document.querySelector('#id')
        this.postSubmit = document.querySelector('.post-submit')
        this.forState = 'add'
    }

    // show post
    showPost(post){
        // console.log(post)
        let output = ''
        post.forEach((post)=>{
            output += `
                <div class='card mb-3'>
                    <div class='card-body'>
                        <h4 class='card-title'>${post.title}</h4>
                        <p class='card-text'>${post.body}</p>
                        <a href='#' class='edit card-link' data-id='${post.id}'>
                            <i class='fa fa-pencil-square-o ml-1'></i>
                        </a>
                        <a href='#' class='delete card-link' data-id='${post.id}'>
                            <i class='fa fa-remove ml-1'></i>
                        </a>
                    </div>
                </div>
            `
        })

        this.post.innerHTML = output
    }

    // show alerts
    showAlert(message,className){
        this.clearAlert()

        // Create div
        const div = document.createElement('div')
        // Add classes
        div.className = className
        div.appendChild(document.createTextNode(message))

        // Inserting into DOM and getting parent
        const container = document.querySelector('.postsContainer')

        // Get posts
        const posts = document.querySelector('#post')

        // Insert alert div
        container.insertBefore(div,posts)

        // Timeout
        setTimeout(()=>{
            // clearing alert
            this.clearAlert()
        },3000)
    }

    // clearing any alerts if any
    clearAlert(){
        const currentAlert = document.querySelector('.alert')
        if(currentAlert){
            currentAlert.remove()
        }
    }

    // clear all fields
    clearFields(){
        this.titleInput.value = ''
        this.bodyInput.value = ''
    }

    fillForm(data){
        this.titleInput.value = data.title
        this.bodyInput.value = data.body
        this.idInput.value = data.id
        
        this.changeFormState('edit')
    }

    // change form state
    changeFormState(type){
        if(type==='edit'){

            if(document.querySelector('.post-cancel')){
                document.querySelector('.post-cancel').remove()
            }
            
            this.postSubmit.textContent = 'Update Post'
            this.postSubmit.className = 'post-submit btn w-50 btn-info text-light mx-auto'
            this.postSubmit.style.transition = '0s'

            // Creating additional cancel button beside update button
            const button  = document.createElement('button')
            button.className = 'post-cancel btn btn-dark w-50 mt-2 mb-2 mx-auto'
            button.appendChild(document.createTextNode('Cancel'))

            // get parent
            const cardForm = document.querySelector('.card-form')
            
            // get element to insert before
            const span = document.querySelector('.form-end')

            // Insert cancel button
            cardForm.insertBefore(button,span)

    
        }else{
            this.postSubmit.textContent = 'Post It'
            this.postSubmit.className = 'post-submit btn btn-primary w-25 mx-auto'
            this.postSubmit.style.transition = '0s'
            
            // Remove cancel button if it is there
            if(document.querySelector('.post-cancel')){
                document.querySelector('.post-cancel').remove()
            }

            // Clear ID from hidden fields
            this.clearIdInput()

            // clear text fields
            this.clearFields()
        }
    }

    // Clear ID hidden value
    clearIdInput(){
        this.idInput.value = ''
    }
}



export const ui = new UI()