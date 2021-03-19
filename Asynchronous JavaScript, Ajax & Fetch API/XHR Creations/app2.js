// WORKING WITH API



// CUSTOMER.JSON
document.querySelector('#toggle1').addEventListener('click',function(e){

    const xhr  = new XMLHttpRequest()
    xhr.open('GET','customer.json',true)
    xhr.onload = function(){
        if(this.status===200)
            {
                // console.log(this.responseText)
                const customer = JSON.parse(this.responseText)
                const output = `<ul>
                    <li>Name: ${customer.name}</li>
                    <li>Customer ID: ${customer.id}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>`
                document.querySelector('#customer').innerHTML = output
            }

    }

    xhr.send()
    e.preventDefault()
})


// CUSTOMERS.JSON
document.querySelector('#toggle2').addEventListener('click',function(e){

    const xhr = new XMLHttpRequest()
    xhr.open('GET','customers.json',true)
    xhr.onload = function(){
        if(this.status===200)
            {
                // console.log('Data is ready for parsing')
                const customers = JSON.parse(this.responseText)
                let output=``
                customers.forEach(customer => {
                     output += `<ul>
                    <li>Name: ${customer.name}</li>
                    <li>Customer ID: ${customer.id}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>`
                });
                document.querySelector('#customers').innerHTML = output
            }
    }

    e.preventDefault()
    xhr.send()
})
