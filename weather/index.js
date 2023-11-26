var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add'); 
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "2d20b489a27391eb9cf322d68450618e"
function convertion(val) 
 {
  return (val - 273).toFixed(3)  
}
btn.addEventListener('click',function() 
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik) 

  .then(res => res.json())
 
  .then(data =>
  {
var nameval = data['name']
var descrip = data['weather']['0']['description']
var temperatue = data['main']['temp']
var windspeed = data['wind']['speed']

city.innerHTML=`weather of <span>${nameval}<span>`
temp.innerHTML=`temperature: <span>${ convertion(temperatue)} C</span>`
description.innerHTML=`sky condition: <span>${descrip}<span>`
wind.innerHTML=`wind speed: <span>${windspeed} km/h<span>`
  })
  .catch(err => alert ('you entered wrong city name'))
  })