class UI{
    constructor()
        {
            
            this.location = document.getElementById('w-location')
            this.desc = document.getElementById('w-desc')
            this.string = document.getElementById('w-string')
            this.icon = document.getElementById('w-icon')
            this.humidity = document.getElementById('w-humidity')
            this.dewpoint = document.getElementById('w-dewpoint')
            this.feelslike = document.getElementById('w-feels-like')
            this.uv = document.getElementById('w-uv')
            this.wind = document.getElementById('w-wind')
        }

    paint(weather){
        console.log(weather)
        this.location.textContent = `${weather.data[0].city_name}, ${weather.data[0].country_code}`
        this.desc.textContent = weather.data[0].weather.description
        this.string.textContent = `${weather.data[0].temp*9/5 + 32} F (${weather.data[0].temp}° C) `
        this.icon.setAttribute('src',`https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`)
        this.humidity.textContent = `Relative Humidity: ${weather.data[0].rh}%`
        this.dewpoint.textContent = `DewPoint: ${weather.data[0].dewpt}`
        this.feelslike.textContent = `Feels Like: ${weather.data[0].app_temp}° C`
        this.wind.textContent = `Wind Speed(m/s): ${weather.data[0].wind_spd} from ${weather.data[0].wind_cdir_full}`
    }
}


// dffa89a8ce2f4d15958144820210703 (weatherAPI)

// jMuCBDqtFALypAzvAg5e8rgLfqPkllfN (Accuweather)

// 9a3a159b09d341c695e4b9c052a6ec8b (weatherbit)

// f87f7588e559a5096bb9a0b82efa7c4b (openWeatherMap)