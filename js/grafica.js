
  var barres = document.getElementById('barres');
  
  var donut = document.getElementById('donut');
  
  var polar = document.getElementById('polar');



  barres.addEventListener('change', function() {
    if (this.checked) {
        $("#graficbarres").css("display", "block");
        $("#graficdonut").css("display", "none");
        $("#graficpolar").css("display", "none");
    } 
  });


  donut.addEventListener('change', function() {
    if (this.checked) {
        $("#graficbarres").css("display", "none");
        $("#graficdonut").css("display", "block");
        $("#graficpolar").css("display", "none");
    } 
  });


  polar.addEventListener('change', function() {
    if (this.checked) {
        $("#graficbarres").css("display", "none");
        $("#graficdonut").css("display", "none");
        $("#graficpolar").css("display", "block");
    } 
  });
