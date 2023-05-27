console.log("fuckyou");
let indexsong=0;
let audioElement=new Audio('./songs/1.mp3');
let musicplay = document.getElementById('musicplay');
let myprogress = document.getElementById('myprogress');
let songift = document.getElementById('songift');
let playlist = Array.from(document.getElementsByClassName('playlist'));
let songs =[
    {songName: "asli",filePath:"./songs/1.mp3",coverPath:"./covers/1.jpg"},
    {songName: "Myk",filePath:"./songs/2.mp3",coverPath:"./covers/2.jpg"},
    {songName: "asli",filePath:"./songs/3.mp3",coverPath:"./covers/3.jpg"},
    {songName: "asli",filePath:"./songs/4.mp3",coverPath:"./covers/4.jpg"},    
    {songName: "asli",filePath:"./songs/5.mp3",coverPath:"./covers/5.jpg"},
    {songName: "asli",filePath:"./songs/6.mp3",coverPath:"./covers/6.jpg"},
    {songName: "asli",filePath:"./songs/7.mp3",coverPath:"./covers/7.jpg"},
    {songName: "asli",filePath:"./songs/8.mp3",coverPath:"./covers/8.jpg"},
    {songName: "asli",filePath:"./songs/9.mp3",coverPath:"./covers/9.jpg"},
    {songName: "asli",filePath:"./songs/10.mp3",coverPath:"./covers/10.jpg"},
]

playlist.forEach((element, i)=> {
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
});

//handle play/pause click
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

// listen to Event:
audioElement.addEventListener('timeupdate',()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogress.value = progress;
})
myprogress.addEventListener('change',()=>{
    audioElement.currentTime=progress.value*audioElement.duration/100;  

})
