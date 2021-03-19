const inputText = document.querySelector('#inputText')

inputText.addEventListener('keyup',inputTextCapture)


function inputTextCapture(e){
    const text = e.target.value.toLowerCase();
    // console.log(text)
    
    let table = document.querySelector('table');
    // console.log(table)

    let tr = table.querySelectorAll('tr');
    // console.log(tr)

    for(var i=0;i<tr.length;i++)
        {
            let td = tr[i].querySelector('td')
            if(td)
                {
                    let textValue = td.textContent || td.innerHTML
                    if(textValue.toLowerCase().indexOf(text)>-1)
                        tr[i].style.display=''
                    else{
                        tr[i].style.display='none'
                    }


                }
        }
    
}
