class Weather{
    constructor(latitude,longitude){
        this.apiKey = '9a3a159b09d341c695e4b9c052a6ec8b'
        this.latitude = latitude
        this.longitude = longitude
    }

    async getData(latitude,longitude){
        this.longitude = longitude
        this.latitude = latitude
        const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${this.latitude}&lon=${this.longitude}&key=${this.apiKey}`)
        const result = await response.json()
        console.log(result)
        return result
    }

    changeLocation(latitude,longitude){
        this.longitude = longitude
        this.latitude  = latitude
    }
}