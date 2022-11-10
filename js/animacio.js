var titol = document.querySelector("#titoloferta");
var oferta = document.querySelectorAll(".oferta > div");


for (let i = 0; i < oferta.length; i++) {
    // Do stuff
    titol.addEventListener("mouseover", function(){
        oferta[i].className = "noocult";
    }, false);
    titol.addEventListener("click", function(){
        oferta[i].className = "ocult";
    }, false);
  }

// Toggle show/hide classes on test content
