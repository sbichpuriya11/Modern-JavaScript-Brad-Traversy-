// CREATING EVENT LISTENER FOR BUTTON
document.querySelector('button').addEventListener('click',()=>{
    // console.log('clicked')  //FOR CHECKING

    // FIRST STEP
    const xhr = new XMLHttpRequest()

    // SECOND STEP OPEN METHOD (TYPE_OF_REQ, FILE_PATH,SYNCHRONOUS/ASYNCHRONOUS)
    xhr.open('GET','data1.txt',true)

    // THIRD STEP
    xhr.onload = function(){
        
        // FOURTH STEP TO CHECK WHETHER DATA IS LOADED SUCCESSFULLY OR NOT

        // HTTPS STATUSES
        // 200: OK
        // 403: FORBIDDEN
        // 404: NOT FOUND


        if(this.status ===200)

            // this.response text contains the data pulled by the xhr object from the file
            console.log(this.responseText)
            document.querySelector('#paragraph').textContent = this.responseText
    }

    // FIFTH STEP AFTER FINALISING THE DATA WE USE send METHOD
    xhr.send()
})