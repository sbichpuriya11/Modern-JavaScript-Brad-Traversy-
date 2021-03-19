// Book Contructor
function Book(title,author,isbn){

    // Step 1
    this.title= title
    this.author = author
    this.isbn = isbn


}

// UI Constructor

// STEP 2
function UI(){
}

// STEP 8 Making UI prototype addBookToList
// Passing the book obj parameter as an object
UI.prototype.addBookToList = function(book){
    // console.log(book)  //FOR CHECKING
    
    // STEP 10 DECLARING THE LIST FOR BOOK LIST
    const list = document.querySelector('#book-list')
    // console.log(list)  //FOR CHECKING

    // STEP 11 CREATING tr ELEMENT
    const row = document.createElement('tr')
    // console.log(row)  //FOR CHECKING

    // STEP 12 INSERT COLS
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td style='line-height:100%;vertical-align:middle'><a href='#' class='material-icons'> delete </a></td>
    `

    // STEP 13 APPENDING ROW TO tbody(#book-list)
    list.appendChild(row)
}

// STEP 15 Making UI prototype clearFields
UI.prototype.clearFields = function(){
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#isbn').value = ''
}

// STEP 18 Making UI prototype showError
UI.prototype.showError = function(message){
    
    // STEP 19 getID to set error
    const errorDiv = document.querySelector('#error')
    errorDiv.textContent = message
    errorDiv.className = 'alert alert-danger'

    // STEP 20 CLEARING THE ALERT
    setTimeout(()=>{
        errorDiv.innerHTML = ''
        errorDiv.classList.remove('alert','alert-danger')
    },3000)
}

// STEP 22 Making UI prototype onSuccess
UI.prototype.onSuccess = function(message){
    // STEP 19 getID to set success message
    const successDiv = document.querySelector('#error')
    successDiv.textContent = message
    successDiv.className = 'alert alert-success'

    // STEP 23 CLEARING THE ALERT
    setTimeout(()=>{
        successDiv.innerHTML = ''
        successDiv.classList.remove('alert','alert-success')
    },3000)
}

// STEP 26 Making UI prototype for delete
UI.prototype.deleteBook = function(event){

    // CHECK WETHER LAST td of event.target IS SELECTED OR NOT
    if(event.className ==='material-icons')
        {
            event.parentElement.parentElement.remove()
            return 1   // THIS IS TO CHCEK WETHER THE BOOK IS DELETED OR NOT
        }
    
}


// STEP 3
// Event Listeners
document.querySelector('#book-form').addEventListener('submit',function(e){
    
    // STEP 4 (GET FORM VALUES)
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value
    // console.log(title,author,isbn)   //FOR CHECKING

    // STEP 5 Instantiating Book constructor
    const book  = new Book(title,author,isbn)
    // console.log(book)  //FOR CHECKING  

    //  STEP 6 Instantiating UI constructor
    const ui = new UI()
    // console.log(ui)  //FOR CHECKING  

    // STEP 16 VALIDATING INPUT FIELDS
    if(title==="" || author==="" || isbn===""){
        // console.log('INPUT ERROR')  //FOR CHECKING
        
        // STEP 17 RAISING ERROR
        ui.showError('Please check your input fields')
    }
    else{

        // STEP 7 Add Book to list
    ui.addBookToList(book)

    // STEP 9 FOR CHECKING ONCE UI aaddBookToList IS CREATED
    // console.log(ui)

    // STEP 21 GIVING SUCCESS MSG
    ui.onSuccess('Book\'s details added successfully')

    // STEP 14 CLEARING THE FIELDS
    ui.clearFields(book)
    

    }

    
    e.preventDefault()
})


// STEP 24 DELETING ELEMENTS FROM LIST
// Listener for delete
document.querySelector('#book-list').addEventListener('click',function(event){
    // console.log(123)     //FOR CHECKING
    
    // STEP 25 ADDING DELETE METHOD
    const ui = new UI()

    // TO GET THE RETURN VALUE AS WELL AS DELETING THE ELEMENT AT SAME TIME
    if(ui.deleteBook(event.target))
        ui.onSuccess('Book deteled successfully.')
    event.preventDefault()
    // console.log(ui)   //FOR GETTING THE ui METHODS
})