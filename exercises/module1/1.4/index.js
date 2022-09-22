const styleRed = document.getElementById("red");
const styleOrange = document.getElementById("orange");
const styleGreen = document.getElementById("green");
var delay = 0;

var myIntervalId;

start();

function start(){
  clearInterval(myIntervalId);
  myIntervalId = undefined;
  myIntervalId = setInterval(changeColor,1000);
};

function changeColor() {
  delay++;
  if(delay == 1){
    styleOrange.style.backgroundColor = "white"
    styleRed.style.backgroundColor = "red"
    start();
  }
  if(delay == 2){
    styleRed.style.backgroundColor = "white"
    styleOrange.style.backgroundColor = "orange"
    start();
  }
  if(delay == 3){
    styleOrange.style.backgroundColor = "white"
    styleGreen.style.backgroundColor = "green"
    start();
  }
  if(delay == 4){
    styleGreen.style.backgroundColor = "white"
    styleOrange.style.backgroundColor = "orange"
    start();
  }
  if(delay == 5){
    styleOrange.style.backgroundColor = "white"
    styleRed.style.backgroundColor = "red"
    delay == 1;
    start();
  }
};
