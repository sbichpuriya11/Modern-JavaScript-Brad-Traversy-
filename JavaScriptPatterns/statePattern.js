const PageState = function(){
    let currentState = new homeState(this);

    this.init = function(){
        this.change(new homeState)
    }
    this.change = function(state){
        currentState = state
    }
};

// Home state
const homeState = function(page){
    document.querySelector('#heading').textContent = null
    document.querySelector('#content').innerHTML  = `
    <div class="jumbotron">
        <h1 class="display-3">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
    </div>
    `
}

// About State
const aboutState = function(page){
    document.querySelector('#heading').textContent = 'About Us'
    document.querySelector('#content').innerHTML = `
        <p>This is the about page</p>
    `

}

// Contact State
const contactState = function(page){
    document.querySelector('#heading').textContent = 'Contact Us'
    document.querySelector('#content').innerHTML = `
    <form>
        <div class="form-group">
        <label for="formGroupExampleInput">Example label</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
        </div>
        <div class="form-group">
        <label for="formGroupExampleInput2">Another label</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
        </div>
    </form>
    `

}


// Instantiate pageState
const page = new PageState()

// init the first state
page.init()

// UI variables
const home = document.getElementById('home')
const about = document.getElementById('about')
const contact = document.getElementById('contact')

// Home
home.addEventListener('click',(e)=>{
    console.log(1)
    page.change(new homeState)
    e.preventDefault()
})

// About
about.addEventListener('click',(e)=>{
    page.change(new aboutState)
    e.preventDefault()
})

// Contact
contact.addEventListener('click',(e)=>{
    page.change(new contactState)
    e.preventDefault()
})