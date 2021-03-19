// Instantiating UI object
const ui = new UI()

// Instantiating Storage object
const storage = new Storage()
// get stored location data
const weatherLocation = storage.getLocationData()

// Instantiation Weather object
const weather = new Weather(weatherLocation.city,weatherLocation.country);


// GET WEATHER on DOM LOAD
document.addEventListener('DOMContentLoaded',weatherFunction)

// Change location event
document.getElementById('w-change-btn').addEventListener('click',(event)=>{

    const city = document.getElementById('city').value
    const country = document.getElementById('country').value
  
    // Change location
    weather.changeLocation(city,country)

    // Set location to local storage
    storage.setLocationData(city,country)
    // Get and display weather
    weatherFunction()

    // Close modal
    $('#locModal').modal('hide')

    event.preventDefault()
})


function weatherFunction()
{
    weather.getWeather().then((response)=>{
        ui.paint(response)
    }).catch((error)=>{
    showError('City/Region not found!')
})
}


function showError(e){
    const div = document.createElement('div')
    div.className = 'alert alert-primary'
    div.id='error'
    div.appendChild(document.createTextNode(e))
    const parentElement = document.querySelector('.col-md-6')
    parentElement.insertBefore(div,document.querySelector('h1'))
    setTimeout(()=>{
        document.querySelector('#error').remove()
    },2500)
    storage.setLocationData(weatherLocation.city,weatherLocation.country)
}
