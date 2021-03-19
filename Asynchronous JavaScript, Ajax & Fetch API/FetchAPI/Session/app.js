const btn1 = document.querySelector('#button1')
const btn2 = document.querySelector('#button2')
const btn3 = document.querySelector('#button3')


btn1.addEventListener('click',(event)=>{

    fetch('test.txt')
    .then((response)=>{
        return response.text()
    })
    .then((received_data)=>{
        // console.log(received_data)
        document.getElementById('output').innerHTML = received_data
    })
    .catch(function(err){
        // console.log(err)
    })

    event.preventDefault()
})


btn2.addEventListener('click',(event)=>{

    fetch('post.json').then((response)=>{
        return response.json()
    }).then((json_response)=>{
        // console.log(json_response)
        let output = ''
        json_response.forEach((post)=>{
            output += `<li>${post.title}</li>`
        })
        document.getElementById('output').innerHTML = output
    })
    .catch((error)=>{
        console.log(error)
    })

    event.preventDefault()
})


btn3.addEventListener('click',(e)=>{

    fetch('https://api.github.com/users')
    .then((result)=>{
        return result.json()
    }).then((result_data)=>{
        let result = ''
        result_data.forEach((data)=>{
            result +=  `<li>${data.login}</li>`
        })
        document.querySelector('#output').innerHTML = result;
       // console.log('RESULT DATA:- ',result_data)
    }).catch((error)=>{
        console.log(error)
    })
    e.preventDefault()
})