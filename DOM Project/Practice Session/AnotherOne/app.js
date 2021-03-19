// console.log('Hello')


const button = document.querySelector('button')
const table = document.querySelector('#table')
// console.log(table)
button.addEventListener('click',loadTable)


function loadTable(e){

    const xhr = new XMLHttpRequest()

    xhr.open('GET','100_Sales_Records.csv',true);
    let that= this
    xhr.onload = ()=>{
        // console.log('Send')
        let tab=`<table class='table table-bordered'>`
        if(xhr.status==200)
            {
                // console.log('Go')
                let response= xhr.responseText.split(/\r?\n|\r/);
                response.forEach((row,index)=>{
                    let single_row = row.split(',')
                    // console.log(single_row)
                    // console.log(index)
                    tab +=`<tr>`
                    if(index===0)    
                        {
                            let th = single_row
                            for(let i =0;i<th.length;i++)
                                tab +=`<th>${th[i]}</th>`
                        }
                    else{
                        let td = single_row;
                        for(let i=0;i<td.length;i++)
                            tab += `<td>${td[i]}</td>`
                    }   
                    // for(let col=0;col<single_row;col++)
                    tab +=`</tr>`   
                })
                tab +=`</table>`
            }
            document.querySelector('#table').innerHTML = tab      
    }

    xhr.send();


    // console.log("Clicked")
    e.preventDefault()
}


const input = document.querySelector('input')
input.value=''
input.addEventListener('keyup',search)

function search(e){
    let table = document.querySelector('table')
    if(table===null)
        {
            showError('Please load the data first')
        }
    else{
    let tr = table.querySelectorAll('tr')
    // console.log(table)
    let table_length = tr.length;
    let inputTxt = e.target.value.toLowerCase();
    // console.log(inputTxt)
    // console.log(tr)
    
    for(let iter = 0;iter<tr.length;iter++)
        {
            if(iter===0)
                continue;
            else{
                let tr_single = tr[iter].querySelector('td:nth-child(7)');
                
                    if(tr_single.innerHTML.indexOf(inputTxt)>-1)
                            tr[iter].style.display=''

                    else    
                            tr[iter].style.display='none'
                // Exess code
                // console.log(tr_single.innerHTML)
                // if(inputTxt.indexOf(tr_single[6])>-1)
                //     console.log(tr_single[6])
                // console.log(tr_single)
            }
        }


}
}

function showError(e){
    // container from UI
    const container = document.querySelector('.container');
    
    const div = document.createElement('div')

    div.appendChild(document.createTextNode(e))
    
    div.className = 'alert alert-danger w-50 justify-content-center container'
    container.append(div)


    setTimeout(()=>{
        container.removeChild(div);
    },2000)


}