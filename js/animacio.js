var titol = document.querySelector("#titoloferta");
var creu = document.querySelectorAll(".oferta i");
var oferta = document.querySelectorAll(".oferta > div");
// Toggle show/hide classes on test content



for (let i = 0; i < oferta.length; i++) {
    // Do stuff
    titol.addEventListener("mouseover", function(){
        oferta[i].className = "noocult";
    }, false);
    creu[i].addEventListener("click", function(){
        oferta[i].className = "ocult";
    }, false);
  }

// Toggle show/hide classes on test content
