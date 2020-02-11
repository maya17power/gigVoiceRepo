
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

    document.getElementsByClassName('weather')[0].innerHTML= "<h1> " + city + ", CA</h1>"
    + "<h3>" + date.toDateString() + "</h3>"
    + "<h4>"
    + "<img src='http://openweathermap.org/img/wn/"
    + icon
    + "@2x.png' class='img-fluid'>"
    + temp_current.toFixed(0) + "&#8457; "
    + description + "</br>"
    + "min " + temp_min.toFixed(0) +"&#8457; - " + "max " + temp_max.toFixed(0) + "&#8457;"
    + "</br>Humidity: " + humidity + "&#37; "
    + "</br>Wind: " + windspeed + "kph"
    + "</h4>"
  }

});
