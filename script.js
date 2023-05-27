console.log('Welcome to spotiffy');
// initialize the songindex
let audioElement = new Audio('1.mp3');
let songindex=0;
let musicplay = document.getElementById('musicplay');
let myprogress = document.getElementById('myprogress');
let songift=document.getElementById('songift');

let song=[
    {
        songName:"asli h", filePath:"songs/1.mp3",coverpath:"covers/1,jpg"
    }
]

// Handle play and pause click
musicplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        musicplay.classList.remove('fa-play-circle');
        musicplay.classList.add('fa-pause-circle');
        songift.style.opacity=1;
    }
    else{
        audioElement.pause();
        musicplay.classList.remove('fa-pause-circle');
        musicplay.classList.add('fa-play-circle');
        songift.style.opacity=0;
    }  
})

// listen to Event