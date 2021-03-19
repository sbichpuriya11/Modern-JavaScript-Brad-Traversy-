class UI{
    constructor(){
        this.timeSection =    document.querySelector('#time')
        this.fullSection = document.querySelector('#remain')
        this.city = document.querySelector('#city')
        this.icon = document.querySelector('#icon')
        this.temperature = document.querySelector('#temperature')
        this.desc = document.querySelector('#desc')
        this.sunrise = document.querySelector('#sunrise')
        this.sunset = document.querySelector('#sunset')
        this.feelslike = document.querySelector('#feelslike')
        this.wind = document.querySelector('#wind')
        this.visibility = document.querySelector('#visibility')
        this.humidity = document.querySelector('#humidity')
        this.uv = document.querySelector('#uv')
        this.pressure = document.querySelector('#pressure')
        this.current = document.querySelector('#current')

        this.icon_one = document.querySelector('#icon_one')
        this.temp_one = document.querySelector('#temp_one')
        // this.first = document.querySelector('#first')
        

        this.first = document.querySelector('#first')
        this.second = document.querySelector('#second')
        this.third = document.querySelector('#third')
        this.fourt = document.querySelector('#fourth')
        this.fifth = document.querySelector('#fifth')
        this.sixth = document.querySelector('#sixth')



        this.icon_first = document.querySelector('#icon_first')
        this.icon_second = document.querySelector('#icon_second')
        this.icon_third = document.querySelector('#icon_third')
        this.icon_fourth = document.querySelector('#icon_fourth')
        this.icon_fifth = document.querySelector('#icon_fifth')
        this.icon_sixth = document.querySelector('#icon_sixth')
        

        this.temp_first = document.querySelector('#temp_first')
        this.temp_second = document.querySelector('#temp_second')
        this.temp_third = document.querySelector('#temp_third')
        this.temp_fourth = document.querySelector('#temp_fourth')
        this.temp_fifth = document.querySelector('#temp_fifth')
        this.temp_sixth = document.querySelector('#temp_sixth')


        this.dayList =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.monthList = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
        "Aug","Sept","Oct","Nov","Dec"];
    }


    showTime(){
        const time = new Date(Date.now())
        let hrs = time.getHours()
        let min = time.getMinutes()
        let meridian = 'AM'
        let day = time.getDay()
        let date = time.getDate()
        let month = time.getMonth()
        let year = time.getFullYear()
        if(hrs>12){
            meridian = 'PM'
            hrs = hrs-12
        }else{
            meridian = 'AM'
        }
        if(min<10){
                min =`0${min}`
            }    
        if(hrs<10) 
            {
                hrs = `0${hrs}`
            }
        if(hrs==0)
            {
                hrs = 12;
            }
        
        this.timeSection.innerHTML = `${hrs}:${min}<span style='font-size:40px'>${meridian}<span>`
        this.fullSection.innerHTML = `${this.dayList[day]}, ${date} ${this.monthList[month]} ${year}`
    }
 
    paint(weather){
        this.city.innerHTML = `${weather.city_name}, ${weather.country_code}`
        this.icon.setAttribute('src',`https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`)
        this.temperature.innerHTML = `${weather.data[0].temp}°C / ${(weather.data[0].temp*9/5+32).toFixed(2)}°F`
        this.desc.innerHTML = `${weather.data[0].weather.description}`
        let setHours = new Date((weather.data[0].sunset_ts+530)*1000).getHours()
        if(setHours>12)
            setHours = setHours-12
        this.sunrise.innerHTML = `${new Date((weather.data[0].sunrise_ts+530)*1000).getHours()}:${new Date((weather.data[0].sunrise_ts+530)*1000).getMinutes()} AM`
        this.sunset.innerHTML = `${setHours}:${new Date((weather.data[0].sunset_ts+530)*1000).getMinutes()} PM`
        this.feelslike.innerHTML = `Ozone <br> ${weather.data[0].ozone.toFixed(2)}`
        this.wind.innerHTML = `Wind Speed <br>${weather.data[0].wind_spd.toFixed(2)} from ${weather.data[0].wind_cdir}`
        this.visibility.innerHTML = `Visibility <br> ${weather.data[0].vis.toFixed(2)}`
        this.humidity.innerHTML = `Humidity <br> ${weather.data[0].rh}%`
        this.uv.innerHTML = `UV Radiations <br> ${weather.data[0].uv.toFixed(2)}`
        this.pressure.innerHTML = `Pressure <br> ${weather.data[0].pres.toFixed(2)}`
        this.icon_one.setAttribute('src',`https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`)
        this.temp_one.innerHTML =  `<i class="fal fa-dewpoint"></i> ${weather.data[0].dewpt}&deg;C`
        
        this.first.innerHTML = `${this.correctDate(weather.data[1].sunrise_ts).date}, ${this.correctDate(weather.data[1].sunrise_ts).month}`
        this.second.innerHTML = `${this.correctDate(weather.data[2].sunrise_ts).date}, ${this.correctDate(weather.data[2].sunrise_ts).month}`
        this.third.innerHTML = `${this.correctDate(weather.data[3].sunrise_ts).date}, ${this.correctDate(weather.data[3].sunrise_ts).month}`
        this.fourt.innerHTML = `${this.correctDate(weather.data[4].sunrise_ts).date}, ${this.correctDate(weather.data[4].sunrise_ts).month}`
        this.fifth.innerHTML = `${this.correctDate(weather.data[5].sunrise_ts).date}, ${this.correctDate(weather.data[5].sunrise_ts).month}`
        this.sixth.innerHTML = `${this.correctDate(weather.data[6].sunrise_ts).date}, ${this.correctDate(weather.data[6].sunrise_ts).month}`


        this.icon_first.setAttribute('src',`https://www.weatherbit.io/static/img/icons/${weather.data[1].weather.icon}.png`)
        this.icon_second.setAttribute('src',`https://www.weatherbit.io/static/img/icons/${weather.data[2].weather.icon}.png`)
        this.icon_third.setAttribute('src',`https://www.weatherbit.io/static/img/icons/${weather.data[3].weather.icon}.png`)
        this.icon_fourth.setAttribute('src',`https://www.weatherbit.io/static/img/icons/${weather.data[4].weather.icon}.png`)
        this.icon_fifth.setAttribute('src',`https://www.weatherbit.io/static/img/icons/${weather.data[5].weather.icon}.png`)
        this.icon_sixth.setAttribute('src',`https://www.weatherbit.io/static/img/icons/${weather.data[6].weather.icon}.png`)


        this.temp_first.innerHTML=`${weather.data[1].temp}°C / ${(weather.data[1].temp*9/5+32).toFixed(2)}°F`
        this.temp_second.innerHTML=`${weather.data[2].temp}°C / ${(weather.data[2].temp*9/5+32).toFixed(2)}°F`
        this.temp_third.innerHTML=`${weather.data[3].temp}°C / ${(weather.data[3].temp*9/5+32).toFixed(2)}°F`
        this.temp_fourth.innerHTML=`${weather.data[4].temp}°C / ${(weather.data[4].temp*9/5+32).toFixed(2)}°F`
        this.temp_fifth.innerHTML=`${weather.data[5].temp}°C / ${(weather.data[5].temp*9/5+32).toFixed(2)}°F`
        this.temp_sixth.innerHTML=`${weather.data[6].temp}°C / ${(weather.data[6].temp*9/5+32).toFixed(2)}°F`

    }


    correctDate(date_string){
        let dt_str = new Date((date_string+50)*1000)
        return {
            date:dt_str.getDate(),
            month:this.monthList[dt_str.getMonth()]
        }
    }
}    

