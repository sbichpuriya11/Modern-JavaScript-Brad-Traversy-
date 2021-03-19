// Search Input
const searchUser = document.querySelector('#searchUser');

// Instantiating GitHub class
const github  = new GitHub
// Instantiating UI class
const ui = new UI

// Search input event listener
searchUser.addEventListener('keyup',(e)=>{

    // GET INPUT TEXT
    const userText = e.target.value
    if(userText!==''){
        // MAKE HTTP CALL
        github.getUser(userText).then((response)=>{
            if(response.profile.message==='Not Found'){
                // SHOW ALERT
                ui.showAlert('User not found','alert alert-danger')
                // alert('Not Found')  
            }else{
                // SHOW PROFILE
                ui.showProfile(response.profile)
                ui.showRepos(response.repos)
                // console.log(response)
            }
        }).catch((error)=>{
            console.log(error)
        })
    }else{
        // CLEAR PROFILE
        ui.clearProfile()
    }
})

