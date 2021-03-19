// EVENT BUBLING

// document.querySelector('.card-title').addEventListener('click',(e)=>{
//     console.log(e.target.className)
// })

// document.querySelector('.card-content').addEventListener('click',()=>{
//     console.log('card content')
// });



// document.querySelector('.card').addEventListener('click',()=>{
//     console.log('card')
// });

// document.querySelector('.col').addEventListener('click',()=>{
//     console.log('col')
// });


// EVENT DELEGATION
// const deleteItem = document.querySelector('.delete-item');
// console.log(deleteItem)
// deleteItem.addEventListener('click',removeItem)

document.body.addEventListener('click',removeItem)

function removeItem(e){
    // console.log('delete item')
    
    // console.log(e.target)

    // Method 1
    // if(e.target.className === 'fa fa-remove')   
    //     {
    //         console.log(e.target)
    //     }


    // Method 2
    // if(e.target.parentElement.className==='delete-item secondary-content')
    //     {
    //         console.log(e.target)
    //     }

    // Method 4 (before executing this code add class "test" to a tag)
    // if(e.target.parentElement.classList .contains('delete-item'))
    //     {
    //         console.log(e.target)
    //     }

    // Simple code to delete
    if(e.target.parentElement.classList .contains('delete-item'))
        {
            console.log(e.target)
            // e.target.parentElement.parentElement.style.textDecoration = 'line-through'
            e.target.parentElement.parentElement.remove()
        }

    e.preventDefault();
}
