var titol = document.querySelector("#titolpromocio");
var promocio = document.querySelector(".promocio > div");
// Toggle show/hide classes on test content
titol.addEventListener("mouseover", function(){
    promocio.className = "noocult";
}, false);
titol.addEventListener("mouseout", function(){
    promocio.className = "ocult";
}, false);