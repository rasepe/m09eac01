//var audio = new Audio('media/WebPmix.mp3');


let audio = document.getElementById("audio"); // Take the audio element
audio.volume = 0.5;

let time = document.querySelector(".time"); // Take the audio track
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

//Play audio, Pause audio, Volume DOWN, Volume UP i Volume OFF, Go to the BEGIN, Go to the END

btnPlay.addEventListener("click", function() {
    audio.play(); // Start the song
    // Start interval 
    audioPlay = setInterval(function() {
        // Get the value of what second the song is at
        let audioTime = Math.round(audio.currentTime);
        // We get songs all the time
        let audioLength = Math.round(audio.duration)
        // Assign a width to an element at time
        time.style.width = (audioTime * 100) / audioLength + '%';
        // Compare what second the track is now and how long in total
        // And check that the treck variable is less than four
        // if (audioTime == audioLength && treck < 3) {
        //     treck++; // then Increase the variable 
        //     switchTreck(treck); // change track
        // // Otherwise we check the same, but the treck variable is greater than or equal to four
        // } else if (audioTime == audioLength && treck >= 3) {
        //     treck = 0; // then we assign treck to zero
        //     switchTreck(treck); Change track
        // }
    }, 10)
});

btnPause.addEventListener("click", function() {
    audio.pause();
    
});

btnDown.addEventListener("click", function() {
    if (audio.volume>=0.1) {
        audio.volume = audio.volume - 0.1;
    }
    
    
});

btnUp.addEventListener("click", function() {
    if (audio.volume<=0.9) {
    audio.volume = audio.volume + 0.1;
    }
});

btnOff.addEventListener("click", function() {
    audio.volume = 0;
    
});

btnBegin.addEventListener("click", function() {

    audio.currentTime = 0;
 
});

btnEnd.addEventListener("click", function() {
    audio.currentTime = audio.duration;
    
});