var count = 0;
var btn = document.getElementById("btn");
var disp = document.getElementById("display");
var span = document.getElementById("phrase");
  
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