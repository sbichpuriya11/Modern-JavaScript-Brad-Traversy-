document.querySelector('button').addEventListener('click', function () {
    const xhr = new XMLHttpRequest()
    console.log('READYSTATE', xhr.readyState)
    xhr.open('GET', 'data1.txt', true)
    console.log('READYSTATE', xhr.readyState)

    // OPTIONAL
    xhr.onprogress = function(){
        // WE CAN ADD ALL LOADER/SPINNER FOR LOADING HERE
        console.log('READYSTATE',xhr.readyState)
    }

    xhr.onreadystatechange = function () {
        console.log('READYSTATE', xhr.readyState)
        if (this.status === 200 && this.readyState == 4) {
            console.log(this.responseText)
            document.querySelector('#paragraph').textContent = this.responseText
        }
    }

    xhr.onerror = function(){
        console.log('ERROR')   
    }

    xhr.send()
})


// READY STATE VALUES
// 0. request not initialized
// 1. server connection established
// 2. request received
// 3. processing request
// 4. request finished and response is ready