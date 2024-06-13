const kevin=(t)=> Math.floor(t - 273.15)
const weather=async()=>{
    try {
        var res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=584b4a7a31e71c8645f53d22222a0184")
        
        var ress = await res.json()
  
        var tit = document.querySelector('.place')       
        tit.innerText = ress.name
     
        var temp = document.querySelector('.temperature')       
        temp.innerText = kevin(ress.main.temp)
    
        var desc = document.querySelector('.weatherCondition')
        desc.innerText = ress.weather[0].description    

    
    } catch (error) {
        console.log(error)
    }
}

weather()