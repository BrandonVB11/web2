const styleRed = document.getElementById("red");
const styleOrange = document.querySelector("#orange");
const styleGreen = document.querySelector("#green");
var delay = 2;

var myIntervalId;

start();

function start(){
  myIntervalId = setInterval(changeColor,2);
};

function changeColor() {
    styleRed.document.body.style.background = "red";
};
