// Same as that of app.js
// THE UI METHODS WILL ALL HAVE SAME PARAMETER AS THAT OF app.js METHODS
// ALSO THE WORKING OF ALL THESE METHODS ARE ALSO SAME AS THAT OF app.js METHODS
// ONCE GO THROUGH THE PROJECT ALL EVENTS LISTENERS ARE ALSO SAME


// STEP 1
class Book{
    
    // STEP 3 
    constructor(title,author,isbn){ 
        this.title = title
        this.author = author
        this.isbn = isbn
        
    }
}


// STEP 2
class UI {
    
    // STEP 4
    addBookToList(book){
        const list = document.querySelector('#book-list')
        const row = document.createElement('tr')
        row.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td style='line-height:100%;vertical-align:middle'><a href='#' class='material-icons'> delete </a></td>
        `
        list.appendChild(row)
        
    }


    // STEP 5
    showError(message){
        const errorDiv = document.querySelector('#error')
        errorDiv.textContent = message
        errorDiv.className = 'alert alert-danger'
        setTimeout(()=>{
            errorDiv.innerHTML = ''
            errorDiv.classList.remove('alert','alert-danger')
        },3000)
    }

    
    // STEP 6
    onSuccess(message){
        const successDiv = document.querySelector('#error')
        successDiv.textContent = message
        successDiv.className = 'alert alert-success'
        setTimeout(()=>{
            successDiv.innerHTML = ''
            successDiv.classList.remove('alert','alert-success')
        },3000)
    }


    // STEP 7
    deleteBook(event){
        if(event.className ==='material-icons')
        {
            event.parentElement.parentElement.remove()
            return 1 
        }
    }

    
    // STEP 8
    clearFields(){
        document.querySelector('#title').value = ''
        document.querySelector('#author').value = ''
        document.querySelector('#isbn').value = ''
    }
}



// STEP 7 Code for Local Storage
class Storage{
    static getBooks(){
        let books;
        if(localStorage.getItem('books')===null){   
            books=[]
        }
        else{
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books
    }

    static displayBooks(){
            const books = Storage.getBooks()
            books.forEach((cover)=>{
                const ui = new UI;

                // ADD BOOK TO UI
                ui.addBookToList(cover)
            })
    }


    static addBook(book){
        const books = Storage.getBooks();

        books.push(book)

        localStorage.setItem('books',JSON.stringify(books))

    }

    static removeBook(isbnValue){
        // console.log(isbnValue)  //FOR CHECKING
        const books = Storage.getBooks()
        books.forEach((cover,index)=>{
           if(cover.isbn==isbnValue)
                {
                    books.splice(index,1)
                }
        })
        localStorage.setItem('books',JSON.stringify(books))
    }
}

// DOM LOAD EVENT
document.addEventListener('DOMContentLoaded',Storage.displayBooks)


document.querySelector('#book-form').addEventListener('submit',function(e){
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value
    const book  = new Book(title,author,isbn)
    const ui = new UI()
    if(title.trim()=="" || author.trim()=="" || isbn.trim()==""){
        ui.showError('Please check your input fields')
    }
    else{
    ui.addBookToList(book)
   
    // STEP 8  Also adding books to LocalStorage
    Storage.addBook(book)


    ui.onSuccess('Book\'s details added successfully')
    ui.clearFields(book)
    }
    e.preventDefault()
})

document.querySelector('#book-list').addEventListener('click',function(event){
    const ui = new UI()


    // REMOVE BOOK FROM LOCAL STORAGE
    Storage.removeBook(event.target.parentElement.previousElementSibling.textContent)
    if(ui.deleteBook(event.target))
        ui.onSuccess('Book deteled successfully.')

    

    event.preventDefault()
})



