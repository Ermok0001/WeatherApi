export class Display{

  showPopulerCityInfo(weatherData, element){
    element.innerHTML += `
    <img src="./images/city_icon1.png" alt="">
    <div class="contain">
        <h2>${weatherData.name}</h2>
        <p>${weatherData.weather[0].main}</p>
        <h1>${Math.floor(weatherData.main.temp - 273.15)}<span>°C</span></h1>
    </div>`
  }
 
      showSingleInfo(weatherData, element){
        element.innerHTML = `
        <div class="wether_and_time">
        <h2>${weatherData.name}, ${weatherData.sys.country}</h2>  
        <h1 id="clock"} >09:30</h1>
        <h3 id="month" >25</h3>
        <p>Thursday</p>
        <img src=${this.#getImagesSrc(weatherData.main.temp - 271.15)} alt="">
        <h1>${Math.floor(weatherData.main.temp - 271.15)}   <span>°C</span></h1>
        <p style="color: #3e4054; text-align: center;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci laborum eius.</p>
      </div>
        `
      }
      
      
showRequestCityInfo(weatherData){
  if(weatherData.cod == 404){
    alert("Error")
  }else{
        find_city_block.innerHTML = `
        <img style="position: absolute; height: 190px; width: 200px; border-radius: 28px; margin-left: 30px;" src="./images/your_city_bg.png" alt="">
           
           <div class="img_city">
               <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
               <h1>04:30 <span>am</span></h1>
               <h3>26 March</h3>
               <p>Thursday</p>
           </div>
         
         <div class="weather">
               <img src=${this.#getImagesSrc(weatherData.main.temp - 271.15)} alt="">
               <h1>${Math.floor(weatherData.main.temp - 271.15)} C</h1>
               <p style="color: #3e4054;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis inventore temporibus sequi voluptates obcaecati totam fugit officiis ipsum. Odio delectus quam ipsam incidunt perferendis sequi dolor dolorum quod sint ipsum?</p>
           </div>
        `
      }
    }

    #getImagesSrc(temp){
      if(temp < 10){
        return "./images/snow.png";
      }else{
        return "./images/sunny.png";
      }
    }
  }

