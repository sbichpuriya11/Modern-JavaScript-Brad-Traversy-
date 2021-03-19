let myBtn = document.querySelector('#myBtn')
let btn1 = document.querySelector('#fetch')


function getData(url){
    fetch(url).then((response)=>{
        return response.text()
    }).then((responseData)=>{
        console.log(responseData)
    })
    .catch((error)=>{
        console.log(error)
    })
}

getData('https://api.chucknorris.io/jokes/random')



// function errorThrow(){
//     // console.log('Function Called')
//     fetch('https://devcamper.io/api/v1/bootcamps/34343').then((response)=>{
//         return response.text()
//     }).then((response)=>{
//         if(!response.ok)
//             throw new Error(response.error)
//     }).catch((responseError)=>{
//         console.log(responseError)
//     })
// }

// errorThrow()