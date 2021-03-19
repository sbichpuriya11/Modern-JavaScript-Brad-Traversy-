document.querySelector('button').addEventListener('click',function(event){
    
    let count = document.querySelector('#form1').value

    let xhr = new XMLHttpRequest()
    xhr.open('GET',`http://api.icndb.com/jokes/random/${count}`,true)

    if(count<1)
        {
            showError('Enter a true value!')
        }
    else{
    xhr.onload = function(){
        let result = `<ul class='list-group m-5'>`
        if(this.status===200)
            {
                console.log(this.responseText)    
                let response = JSON.parse(this.responseText)
                console.log(response)
                response.value.forEach(joke => {
                    result +=`<li class='list-group-item'><h5>Joke ID:- ${joke.id}</h5><p class='font-weight-bold'>Whats that joke?</p><p>${joke.joke}</p></li>`
                });
                
            }
            result +=`</ul>`
        document.querySelector('#result').innerHTML = result
    }
}

    xhr.send()
    event.preventDefault()
})

function showError(msg)
    {
        document.querySelector('h6').textContent = msg
        document.querySelector('h6').className = 'alert alert-danger w-25 mx-auto p-4 m-5 '
        setTimeout(() => {
            document.querySelector('h6').textContent = ''
            document.querySelector('h6').classList.remove('alert','alert-danger','w-25','mx-auto','p-4','m-5')
        }, 3000);
    }
