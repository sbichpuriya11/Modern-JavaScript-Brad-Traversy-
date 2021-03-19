document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector("#loader").style.visibility = "visible"; 
    } else { 
        document.querySelector("#loader").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
    } 
}; 






// Instanstiating Time class
const ui = new UI

// For updating time after every second
setInterval(()=>{
    ui.showTime()
},1000)

// Instanstiating Storage class
const storage = new Storage()
// Get stored Location
const weatherLocation = storage.getLocationData()
console.log(weatherLocation)

// Instanstiating Weather class
const weather = new Weather(weatherLocation.latitude,weatherLocation.longitude)


// GET weather on DOM LOADED
// document.addEventListener('DOMContentLoaded',()=>{
//     weather.getData().then((response)=>{
//         ui.paint(response)
//     }).catch((error)=>{
//         console.log(error)
//     })
// })



// GETTING CITY VALUE
const city = document.getElementById('city')
let locationCoords = storage.getLocationData()
let longitude = locationCoords.longitude;
let latitude = locationCoords.latitude;

console.log(longitude)
console.log(latitude)


weather.getData(latitude,longitude).then((response)=>{
    ui.paint(response)
    storage.setLocationData(latitude,longitude)
}).catch()





city.addEventListener('click',(e)=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        latitude = position.coords.latitude
        longitude = position.coords.longitude
    
        console.log('THIS IS GEOLOCATION '+latitude,longitude)
        weather.getData(latitude,longitude).then((response)=>{
            ui.paint(response)
            storage.setLocationData(latitude,longitude)
        })

        // console.log(weather.getData(latitude,longitude))
        // console.log(latitude,longitude)
    })
})





