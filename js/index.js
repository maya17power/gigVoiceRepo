
// Toronto, ON
// Saturday 9 PM • Clear
// ICON 21°
// F/ C
// Humidity: 60%
// Wind: 12 kph W

document.addEventListener('DOMContentLoaded',function(){
  console.log("test");

  req=new XMLHttpRequest();
  req.open("GET",'http://api.openweathermap.org/data/2.5/weather?id=5380698&APPID=9958d9084c18c17200b89cb58d66a44f',true);
  req.send();
  req.onload=function(){
  var json = JSON.parse(req.responseText);
  var icon = json.weather[0].icon;
  var description = json.weather[0].description;
  var city = json.name;
  var date = new Date();
  var humidity = json.main.humidity;
  var windspeed = json.wind.speed;


  var temp_current = (json.main.temp - 273.15) * 9/5 + 32;
  var temp_min = (json.main.temp_min - 273.15) * 9/5 + 32;
  var temp_max = (json.main.temp_max - 273.15) * 9/5 + 32;

    document.getElementsByClassName("city")[0].innerHTML = "<h1> " + city + ", CA</h1>"
    document.getElementsByClassName("date")[0].innerHTML = "<h1>" + date.toDateString() + "</h1>"
    document.getElementsByClassName('weather')[0].innerHTML="<img src='http://openweathermap.org/img/wn/"
    + icon
    + "@2x.png' class='img-fluid weathericon mx-auto d-block'>"
    + "<h4>" +  "</h4>"


    document.getElementsByClassName("currenttemp")[0].innerHTML = "<h4>" + temp_current.toFixed(0) + "&#8457;" + "</br> " + description + "</h4>"
    document.getElementsByClassName("avgtemp")[0].innerHTML = "<h4>Min " + temp_min.toFixed(0) +"&#8457; - " + "Max " + temp_max.toFixed(0) + "&#8457;</h4>"
    document.getElementsByClassName("humidity")[0].innerHTML = "<h4>Humidity: " + humidity + "&#37;</h4>"
    document.getElementsByClassName("windspeed")[0].innerHTML = "<h4>Wind: " + windspeed + "kph</h4>"
  }



});
