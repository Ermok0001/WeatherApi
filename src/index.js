console.log('hello')
import'./styles/styles.scss'
import image1 from'./images/city_icon1.png'
import image2 from'./images/city_icon2.png'
import image3 from'./images/city_icon3.png'
import image4 from'./images/city_icon4.png'
import image5 from'./images/snow.png'
import image6 from'./images/sunny.png'
import image7 from'./images/your_city_bg.png'

import { Location } from './location'
import { Weather } from './weather'
import { Display } from './display'

const city_name = document.getElementById('city_name')
const temp_image = document.getElementById('temp_image')
const temp_info = document.getElementById('temp_info')
const weather_info = document.getElementById
const popular_city_row = document.getElementById('popular_city_row')
const find_city_block = document.getElementById('find_city_block')
const user_city_block = document.getElementById('user_city_block')
const input = document.getElementById('input')
const btn = document.getElementById('btn')

const location = new Location()
const display = new Display()
const weather = new Weather()



btn.addEventListener('click', ()=>{
  weather.getWeatherDatabyCityName(input.value).then((weatherData)=>{
    display.showRequestCityInfo(weatherData, find_city_block)    
  })
})

location
.getLocation()
.then(()=>{
 return weather.getWeatherDatabyCoords(
  location.longitude, 
  location.latitude
  )
})
.then((weatherData)=>{
  display.showSingleInfo(weatherData, user_city_block)
})


weather.getWeatherDatabyCityName("Astana")
.then((weatherData)=>{
  display.showPopulerCityInfo(weatherData, popular_city_row)
});
weather.getWeatherDatabyCityName("New York").then((weatherData)=>{
  display.showPopulerCityInfo(weatherData, popular_city_row)
});
weather.getWeatherDatabyCityName("Kostanay").then((weatherData)=>{
  display.showPopulerCityInfo(weatherData, popular_city_row)
});
weather.getWeatherDatabyCityName("Moscow").then((weatherData)=>{
  display.showPopulerCityInfo(weatherData, popular_city_row)
});
weather.getWeatherDatabyCityName("Madrid").then((weatherData)=>{
  display.showPopulerCityInfo(weatherData, popular_city_row)
})



// window.onload = function(){
//     window.setInterval(function(){
//         const date = new Date();

//         const hours = date.getHours();
//         const min = date.getMinutes()
//         const second = date.getSeconds()

//         const clock = hours + ":" + min + ':' + second;
//         document.getElementById('clock').innerHTML = clock;

//         const month1 = date.getDate();
//         const month = `${month1} December` 
//         document.getElementById('month').innerHTML = month
//     });
// }
