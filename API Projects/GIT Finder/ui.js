class UI{
    constructor(){
        this.profile = document.getElementById('profile')
    }

    // Display profile in UI
    showProfile(user){
        this.profile.innerHTML = `
            <div class='card card-body mb-3'>
                <div class='row'>
                    <div class='col-md-3'>
                        <img class='img-fluid mb-2' src='${user.avatar_url}'>
                        <a href="${user.html_url}" target='_blank' class='btn btn-primary btn-block mb-4'>View Profile</a>
                    </div>
                    <div class='col-md-9'>
                        <span class='text-large badge badge-primary'> <i class="fal fa-folder-tree"></i> Public Repos : ${user.public_repos}</span>
                        <span class='text-large badge badge-warning'> <i class="fas fa-code-merge"></i> Public Gists : ${user.public_gists}</span>
                        <span class='text-large badge badge-success'> <i class="far fa-user-friends"></i> Followers  : ${user.followers}</span>
                        <span class='text-large badge badge-info'> <i class="far fa-star"></i> Following : ${user.following}</span>
                        <br><br>
                        <ul class='list-group'>
                            <li class='list-group-item'><i class="fal fa-building"></i> Company: ${user.company}</li>
                            <li class='list-group-item'><i class="fal fa-globe"></i> Website/Blog: <a href='${user.blog}'>${user.blog}</a></li>
                            <li class='list-group-item'><i class="fal fa-map-marker-alt"></i> Location: ${user.location}</li>
                            <li class='list-group-item'><i class="fal fa-calendar-times"></i> Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class='page-heading mb-3'>Latest Repos</h3>
            <div id='repos'></div>
        `
    }

    // Show alert message
    showAlert(message,className){
        // Clear any remaining alerts
        this.clearAlert()
        // Create div
        const div = document.createElement('div')
        // Add class
        div.className = className
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.searchContainer')
        // Get Search box
        const searchBox = document.querySelector('.search')
        // insert Alert
        container.insertBefore(div,searchBox)
        // Time out after 3 sec
        setTimeout(()=>{
            this.clearAlert()
        },3000)
    }

    // Show user repo
    showRepos(repos){
        let output= ``
        repos.forEach((repo)=>{
            output +=`
                <div class='card card-body mb-2'>
                    <div class='row'>
                        <div class='col-md-6'>
                            <a href='${repo.html_url}' target='_blank'> ${repo.name} </a>
                        </div>
                        <div class='col-md-6'>
                            <span class='badge badge-danger'> <i class="fal fa-save"></i> Stars : ${repo.stargazers_count}</span>
                            <span class='badge badge-info'> <i class="fal fa-eye"></i> Watchers : ${repo.watchers_count}</span>
                            <span class='badge badge-dark'> <i class="fal fa-code-branch"></i> Forks  : ${repo.forks_count}</span>                            
                        </div>
                    </div>
                </div>
            `
        })
        console.log(output)
        // OUTPUT repos
        document.getElementById('repos').innerHTML = output
    }
    // Clear alert message
    clearAlert(){
        const currentAlert = document.querySelector('.alert')
        if(currentAlert){
            currentAlert.remove();
        }
    }

    // Clear profile area
    clearProfile(){
        this.profile.innerHTML = ''
    }
}