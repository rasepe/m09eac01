let media = document.getElementById("media"); // Take the media element

let time = document.querySelector(".time"); // Take the media track

//Botons:
let btnPlay = document.querySelector(".play");
let btnPause = document.querySelector(".pause");
let btnDown = document.querySelector(".down");
let btnUp = document.querySelector(".up");
let btnOff = document.querySelector(".off");
let btnBegin = document.querySelector(".begin");
let btnEnd = document.querySelector(".end");

btnPlay.addEventListener("click", function() {
    media.play(); // Start the song
    // Start interval 
    mediaPlay = setInterval(function() {
        // Valor del temps actual de la reproducció:
        let mediaTime = Math.round(media.currentTime);
        // Valor del temps total de durada del mitjà:
        let mediaLength = Math.round(media.duration);
        // Assignem amplada als elements amb classe .time:
        time.style.width = (mediaTime * 100) / mediaLength + '%';

    }, 10)
});

btnPause.addEventListener("click", function() {
    media.pause();
    
});

btnDown.addEventListener("click", function() {
    if (media.volume>=0.1) {
        media.volume = media.volume - 0.1;
    }  
});

btnUp.addEventListener("click", function() {
    if (media.volume<=0.9) {
    media.volume = media.volume + 0.1;
    }
});

btnOff.addEventListener("click", function() {
    media.volume = 0;
    
});

btnBegin.addEventListener("click", function() {
    media.currentTime = 0;
});

btnEnd.addEventListener("click", function() {
    media.currentTime = media.duration;
});