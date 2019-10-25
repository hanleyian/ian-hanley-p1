var weather;



var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=001b0f58045147663b1ea518d34d88b4';
var units = '&units=metric';

var input;

function setup() {
  var canvas = createCanvas(450, 450);
  canvas.parent('purpleBox'); //position canvas



  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
}




function draw() {
  background(219, 3, 252);  //background color rgb

  fill("red");
  stroke("black");
  ellipse(100, 250, 116, 116);

  fill("orange");
  stroke("black");
  ellipse(100, 250, 75.6, 75.6);
  
  stroke("black");
    fill("blue");
    ellipse(300, 250, 100, 100);


    

 
  if (weather) {
    var temp = weather.main.temp;
    var humidity = weather.main.humidity;

    //temp circle
   

    fill("yellow");
    stroke("black");
    ellipse(100, 250, temp * 2, temp * 2);


    fill("black");
    stroke("black");
    text(temp + " C", 100, 100);

    //humidity circle
    
    
    stroke("black");
    fill("green");
    ellipse(300, 250, humidity, humidity);

    stroke("black");
    fill("black");
    text(humidity + " %", 300, 100);
    

  }
  
  
}





//project idea and code based on tutorial by The Coding Train on Youtube
//using api and data from OpenWeather at openweathermap.org 