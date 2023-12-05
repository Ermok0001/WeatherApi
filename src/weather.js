const API_KEY = '20a711620df6213e14c64a1b92db8630'


export class Weather{
getWeatherDatabyCoords(long, lat){
    return new Promise((resolve, reject)=>{
    let URL_Api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
  
    fetch(URL_Api)
  .then((response1)=>{
    return response1.json()
  })
  .then((response2)=>{
    resolve(response2)
  })
  })
}

getWeatherDatabyCityName(cityname){
  return new Promise ((resolve, reject)=>{
    let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}`
    
    fetch(API_URL)
  .then((resp1)=>{
    return resp1.json()
  })
  .then((resp2)=>{
    console.log(resp2)
    resolve(resp2)
  })
  })
  }
}