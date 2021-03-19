const data =  [
    {
        name:'John Doe',
        age:32,
        gender:'male',
        lookingfor:'female',
        location:'Boston MA',
        image:'https://randomuser.me/api/portraits/men/61.jpg'
    },
    {
        name:'Jen Smith',
        age:26,
        gender:'female',
        lookingfor:'male',
        location:'Miami FL',
        image:'https://randomuser.me/api/portraits/women/14.jpg'
    },
    {
        name:'Maximilian Schwarzmüller',
        age:24,
        gender:'male',
        lookingfor:'female',
        location:'Los Gatos, California',
        image:'https://randomuser.me/api/portraits/men/24.jpg'
    },
    {
        name:'Richard Milan',
        age:36,
        gender:'male',
        lookingfor:'female',
        location:'Villalpando, Zamora',
        image:'https://randomuser.me/api/portraits/men/44.jpg'
    },
    {
        name:'Frank Cane',
        age:38,
        gender:'male',
        lookingfor:'female',
        location:'New york, USA',
        image:'https://randomuser.me/api/portraits/men/65.jpg'
    },
    {
        name:'Janani Ravi',
        age:30,
        gender:'female',
        lookingfor:'male',
        location:'Seattle, Washington',
        image:'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
        name:'Bonnie Schulkin',
        age:43,
        gender:'female',
        lookingfor:'male',
        location:'Berkeley, California',
        image:'https://randomuser.me/api/portraits/women/30.jpg'
    },
    {
        name:'William Johnson',
        age:38,
        gender:'male',
        lookingfor:'female',
        location:'Lyn MA',
        image:'https://randomuser.me/api/portraits/men/47.jpg'
    },
    {
        name:'Jill Robert',
        age:29,
        gender:'female',
        lookingfor:'male',
        location:'California US',
        image:'https://randomuser.me/api/portraits/women/24.jpg'
    },
]


// Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0 
    return{
        next:function(){
            return nextIndex<profiles.length?{value:profiles[nextIndex++],done:false} : {done:true}
        },
        previous:function(){
            return nextIndex<profiles.length?{value:profiles[nextIndex--],done:false} : {done:true}
        }
    }
}

const profiles = profileIterator(data)

displayProfile()

// Next Event
document.getElementById('next').addEventListener('click',displayProfile)


function displayProfile(){
    const currentProfile = profiles.next().value
    // for image    
    if(currentProfile!==undefined){
        document.getElementById('profileDisplay').innerHTML = `
        <ul class='list-group'>
            <li class='list-group-item'>Name: ${currentProfile.name}</li>
            <li class='list-group-item'>Age: ${currentProfile.age}</li>
            <li class='list-group-item'>Location: ${currentProfile.location}</li>
            <li class='list-group-item'>Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>`
        document.getElementById('imageDisplay').innerHTML = `<img src = '${currentProfile.image}'/>`
    }else{
        // No more profiles
        // showError('No more profiles to show')
        window.location.reload()
    }
}


// function showError(msg){
//     const p = document.createElement('p')
//     p.textContent = msg
//     p.className = 'alert alert-success mt-5'
//     document.querySelector('.text-center').insertBefore(p,document.querySelector('#imageDisplay'))
//     document.querySelector('#imageDisplay').innerHTML = ''
//     document.querySelector('#profileDisplay').innerHTML = ''
//     setTimeout(()=>{
//         document.querySelector('.alert').remove()
//         window.location.reload()
//     },1000)
// }




document.getElementById('previous').addEventListener('click',displayProfilePrev)
function displayProfilePrev(){
    const currentProfile = profiles.previous().value
    // for image    
    if(currentProfile!==undefined){
        document.getElementById('profileDisplay').innerHTML = `
        <ul class='list-group'>
            <li class='list-group-item'>Name: ${currentProfile.name}</li>
            <li class='list-group-item'>Age: ${currentProfile.age}</li>
            <li class='list-group-item'>Location: ${currentProfile.location}</li>
            <li class='list-group-item'>Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>`
        document.getElementById('imageDisplay').innerHTML = `<img src = '${currentProfile.image}'/>`
    }else{
        // No more profiles
        // showError('No more profiles to show')
        window.location.reload()
    }
}