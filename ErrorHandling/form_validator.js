// Form blur event listener
document.getElementById('name').addEventListener('blur',()=>{
    const name = document.getElementById('name')
    // console.log(name)
    const re = /^[A-Za-z]{2,10}$/
    if(!re.test(name.value)){ //Means invalid 
        name.classList.add('is-invalid')
    }else{
        name.classList.remove('is-invalid')
    }
})
document.getElementById('zipcode').addEventListener('blur',()=>{
    const zipcode = document.getElementById('zipcode')
    // console.log(1);  
    const re = /^[1-9]{6}$/
    if(!re.test(zipcode.value)){
        zipcode.classList.add('is-invalid')
    }else{
        zipcode.classList.remove('is-invalid')
    }
})
document.getElementById('email').addEventListener('blur',()=>{
    const email = document.getElementById('email')
    // console.log(1);
    const re = /^([a-zA-Z0-9_\-]+)\.?([a-zA-Z0-9_\-]+)?@([a-zA-Z0-9_\-\.]+)\.([A-Za-z]{2,5})$/
    if(!re.test(email.value )){
        email.classList.add('is-invalid')
    }else{
        email.classList.remove('is-invalid')
    }
})
document.getElementById('phone').addEventListener('blur',()=>{
    const number = document.getElementById('phone')
    // console.log(1);
    const re = /^(\(?\+\d{2}\))?[-. ]?\d{10}$/
    if(!re.test(number.value)){
        number.classList.add('is-invalid')
    }else{
        number.classList.remove('is-invalid')
    }
})