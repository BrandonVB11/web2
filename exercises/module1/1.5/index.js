var count = 0;
var btn = document.querySelector("#btn");
var disp = document.querySelector("#display");
var span = document.querySelector("#phrase");

  
btn.onclick = function () {
     count++;
     disp.innerHTML = count;
};

btn.addEventListener("click", () => {
    if(count >= 5 && count <= 9){
        span.innerHTML = "Bravo, bel échauffement ! ";
    };
    if(count >= 10){
        span.innerHTML = "Vous êtes passé maître en l'art du clic ! ";
    };
    console.log("onClickHandlerForBtn1::click");
  });

function returnPicture (){
    document.getElementById("rick").src ="Rick_roll.gif";
}