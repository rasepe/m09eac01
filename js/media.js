//var media = new media('media/WebPmix.mp3');


let media = document.getElementById("media"); // Take the media element
media.volume = 0.5;

let time = document.querySelector(".time"); // Take the media track
let btnPlay = document.querySelector(".play"); // Take the play button
let btnPause = document.querySelector(".pause"); // Take the pause button
let btnDown = document.querySelector(".down"); // Take the switch button of the previous track
let btnUp = document.querySelector(".up"); // Take the button to switch the next track
let btnOff = document.querySelector(".off");
let btnBegin = document.querySelector(".begin");
let btnEnd = document.querySelector(".end");
//<button class="down">Volume DOWN</button>
//<button class="up">Volume UP</button>
//<button class="off">Volume OFF</button>
//<button class="begin">Go to the BEGIN</button>
//<button class="end">Go to the END</button>

//Play media, Pause media, Volume DOWN, Volume UP i Volume OFF, Go to the BEGIN, Go to the END

btnPlay.addEventListener("click", function() {
    media.play(); // Start the song
    // Start interval 
    mediaPlay = setInterval(function() {
        // Get the value of what second the song is at
        let mediaTime = Math.round(media.currentTime);
        // We get songs all the time
        let mediaLength = Math.round(media.duration)
        // Assign a width to an element at time
        time.style.width = (mediaTime * 100) / mediaLength + '%';
        // Compare what second the track is now and how long in total
        // And check that the treck variable is less than four
        // if (mediaTime == mediaLength && treck < 3) {
        //     treck++; // then Increase the variable 
        //     switchTreck(treck); // change track
        // // Otherwise we check the same, but the treck variable is greater than or equal to four
        // } else if (mediaTime == mediaLength && treck >= 3) {
        //     treck = 0; // then we assign treck to zero
        //     switchTreck(treck); Change track
        // }
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