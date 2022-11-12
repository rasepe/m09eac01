var titol = document.querySelector("#titolpromocio");
var creu = document.querySelector(".promocio i");
var promocio = document.querySelector(".promocio > div");

titol.addEventListener("mouseover", function(){
    promocio.className = "noocult";
}, false);

creu.addEventListener("click", function(){
    promocio.className = "ocult";
}, false);
