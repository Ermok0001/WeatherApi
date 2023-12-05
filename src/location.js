export class Location{
    constructor(){
        this.latitude
        this.longitude
    }
    getLocation(){
            return new Promise((resolve,reject)=>{
            navigator.geolocation.getCurrentPosition((position)=>{
              console.log(position)
              resolve(position)
              this.latitude = position.coords.latitude
              this.longitude = position.coords.longitude
          })
          })

    }
}