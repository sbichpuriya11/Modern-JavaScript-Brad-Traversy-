class Weather{
    constructor(city,country){
        this.apiKey =  '9a3a159b09d341c695e4b9c052a6ec8b'
        this.city = city,
        this.country  = country
    }
 
    // Fetch weather from API
    async getWeather(){
        
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?&city=${this.city}&country=${this.country}&key=${this.apiKey}&include=hourly
        `)

        const responseData = await response.json()
        // console.log(responseData)
        return responseData
    }

    // Change weather location
    changeLocation(city,country){
        this.city = city
        this.country = country
    }
}




