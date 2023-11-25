const search =async()=>
{
    let CityName = inputname.value
    if(CityName)
    {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=3f216cfd12c6efc45088d4cf7831538e&units=metric`)
        if(res.status==404)
        {
            alert('Please Enter A Valid City Name!')
        }
        else
        {
            res.json()
        .then((City)=>{
            console.log(City);
            Name=City.name
            city.innerHTML=Name
            Country=City.sys.country
            country.innerHTML=Country
            Temp=City.main.temp
            temp.innerHTML=(Math.round(Temp)+'°C')
            Max=City.main.temp_max
            high.innerHTML=(Math.round(Max)+'°C Max')
            Min=City.main.temp_min
            low.innerHTML=((Math.round(Min))+'°C Min')
            Pressure=City.main.pressure
            Humidity=City.main.humidity
            Wind=City.wind.speed

            /* date */

   let now = new Date();
   var date = document.querySelector('.location .date');
   date.innerText = dateBuilder(now);

   function dateBuilder (d) {
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   
     let day = days[d.getDay()];
    date = d.getDate();
     let month = months[d.getMonth()];
     let year = d.getFullYear();
     

    return `${day} ${date} ${month} ${year}`
   }

    /* footer display*/

            wind.innerHTML=` <div class="wind-img"><img src="./images/wind.png" alt="">
            <h3 class="units" id="wind">${Wind} KpH</h3>`
            hum.innerHTML=`<div class="humidity-img"><img src="./images/humidity.png" width="80px" height="80px">
            <h3 class="units" id="hum">${Humidity}%</h3>`
            pres.innerHTML=`<div class="pressure-img"><img src="./images/pressure.png" width="80px" height="80px">
            <h3 class="units" id="pres">${Pressure}</h3>
        </div>` 
    
   /* weather */
            Weather=City.weather[0].main
            wheather.innerHTML=Weather
            if(City.weather[0].main=="Clear")
            {
                icon.innerHTML=`<img src="./images/clear.png">` 
            }
            else if (City.weather[0].main=="Clouds")
            {
                icon.innerHTML=`<img src="./images/clouds.png">` 
            }
            else if (City.weather[0].main=="Drizzle")
            {
                icon.innerHTML=`<img src="./images/drizzle.png">` 
            }
            else if (City.weather[0].main=="Mist")
            {
                icon.innerHTML=`<img src="./images/mist.png">` 
            }
            else if (City.weather[0].main=="Rain")
            {
                icon.innerHTML=`<img src="./images/rain.png">` 
            }
            else if (City.weather[0].main=="Snow")
            {
                icon.innerHTML=`<img src="./images/snow.png">` 
            }
            else if (City.weather[0].main=="Haze")
            {
                icon.innerHTML=`<img src="./images/smoke.png">` 
            }
            else if (City.weather[0].main=="Smoke")
            {
                icon.innerHTML=`<img src="./images/smoke.png">` 
            }
        })
        }
    }
    else
    {
        alert("Please Enter A City")
    }
}