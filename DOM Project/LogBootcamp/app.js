const createEmployee = document.querySelector('#add')

createEmployee.addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'block';
    document.querySelector('.bg-modal').style.transition = 'ease-in 5s';
    document.querySelector('#close').addEventListener('click', () => {
        document.querySelector('.bg-modal').style.display = 'none';
    });
})

// function for creating an employee
const info = document.querySelector('#info')
info.addEventListener('submit', (e) => {
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const address = document.querySelector('#address')
    const phone = document.querySelector('#phone')

    console.log(name.value)


    // creating a tr element
    const tr = document.createElement('tr');
    // creating the td element
    const td_name = document.createElement('td')
    const td_email = document.createElement('td')
    const td_address = document.createElement('td')
    const td_phone = document.createElement('td')
    const td_checkBox = document.createElement('td')
    const td_actions = document.createElement('td')

    
    td_checkBox.classList.add('text-center')
    const input = document.createElement('input')
    input.type='checkbox'
    td_checkBox.appendChild(input)

    // CODE FOR ACTIONS
    const edit = document.createElement('a');
    edit.setAttribute('href','#');
    edit.style.textDecoration='none'
    edit.innerHTML = `<i class='material-icons'>create</i>`

    const deleteElement = document.createElement('a');
    deleteElement.setAttribute('href','#');
    deleteElement.style.textDecoration='none'
    deleteElement.innerHTML = `<i class='material-icons'>delete</i>`

    td_name.appendChild(document.createTextNode(name.value))
    td_email.appendChild(document.createTextNode(email.value))
    td_address.appendChild(document.createTextNode(address.value))
    td_phone.appendChild(document.createTextNode(phone.value))
    td_actions.appendChild(edit)
    td_actions.appendChild(document.createTextNode(' | '))
    td_actions.appendChild(deleteElement)

    tr.append(td_checkBox)
    tr.append(td_name)
    tr.append(td_email)
    tr.append(td_address)
    tr.append(td_phone)
    tr.append(td_actions)
    document.querySelector('#tbody').append(tr)
    
    // Resetting the UI Modal
    document.querySelector('.bg-modal').style.display = 'none';

    name.value = ''
    email.value = ''
    address.value = ''
    phone.value = ''


    e.preventDefault();
})


document.querySelector('#delete').addEventListener('click',function(){
    document.querySelector('.delete-modal').style.display='block'

    document.querySelector('#yes').addEventListener('click',function(){
        document.querySelector('.delete-modal').style.display='none'
        document.querySelector('tbody').innerHTML = ''
    })

    document.querySelector('#no').addEventListener('click',function(){
        document.querySelector('.delete-modal').style.display='none'
    })
})