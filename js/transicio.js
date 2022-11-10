var titol = document.querySelector("#titolpromocio");
var promocio = document.querySelector(".promocio > div");
// Toggle show/hide classes on test content
titol.addEventListener("mouseover", function(){
    promocio.className = "noocult";
}, false);
titol.addEventListener("click", function(){
    promocio.className = "ocult";
}, false);