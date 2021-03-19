class Storage{
    constructor(latitude,longitude){
        this.latitude = latitude
        this.longitude = longitude
        // this.defaultLatitude = 21.207769
        // this.defaultLongitude = 79.184052
        this.defaultLatitude  = 28.292290
        this.defaultLongitude = 74.966583
    }   

    getLocationData(){
        if(localStorage.getItem('longitude')===null)
            this.latitude = this.defaultLatitude
        else   
            this.latitude = localStorage.getItem('latitude')
        
        if(localStorage.getItem('longitude')===null)
            this.longitude = this.defaultLongitude
        else
            this.longitude = localStorage.getItem('longitude')
        
        return {
            latitude:this.latitude,
            longitude:this.longitude
        }
    }
        setLocationData(latitude,longitude){
            localStorage.setItem('latitude',latitude)
            localStorage.setItem('longitude',longitude)
        }

}