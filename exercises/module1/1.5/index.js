var count = 0;
var btn = document.querySelector("#btn");
var disp = document.querySelector("#display");
var span = document.querySelector("#phrase");
var btnImg = document.querySelector("#RGB");


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
    if(count >= 100){
        span.innerHTML = "Tu es le maitre du clic ! ";
    }
    console.log("onClickHandlerForBtn1::click");
  });

 
  function ramdom(number){
    return Math.floor(Math.random()*(number+1));
  }
  
  btnImg.addEventListener('click',() =>{ 
    const color = `rgb(${ramdom(255)},${ramdom(255)},${ramdom(255)})`;
    document.body.style.backgroundColor = color;
});