console.log("Let's Write Js");
let currentSong = new Audio();
let songs;

function secondsToMinutesSeconds(seconds) {
     if (isNaN(seconds) || seconds < 0) {
          return "00:00";
     }

     const minutes = Math.floor(seconds / 60);
     const remainingSeconds = Math.floor(seconds % 60);

     const formattedMinutes = String(minutes).padStart(2, '0');
     const formattedSeconds = String(remainingSeconds).padStart(2, '0');

     return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs() {
     let a = await fetch("http://127.0.0.1:3000/Projects/Spotify%20Clone/songs/")
     let response = await a.text()
     // console.log(response)
     let div = document.createElement("div")
     div.innerHTML = response;
     let as = div.getElementsByTagName("a")
     let songs = []
     for (let index = 0; index < as.length; index++) {
          const element = as[index];
          if (element.href.endsWith(".mp3")) {
               songs.push(element.href.split("/songs/")[1])
          }
     }
     return songs
}

const playMusic = (track, pause = false) => {
     // let audio = new Audio("/Projects/Spotify Clone/songs/" + track)
     currentSong.src = "/Projects/Spotify Clone/songs/" + track
     if (!pause) {
          currentSong.play();
          play.src = "img/pause.svg";
     }
     document.querySelector(".songinfo").innerHTML = decodeURI(track);
     document.querySelector(".songtime").innerHTML = "00:00";
}

async function main() {

     // list of all songs
     songs = await getSongs()
     // console.log(songs);
     playMusic(songs[0], true);

     // Show all the songs in the playlist
     let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
     for (const song of songs) {
          songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" src="img/music.svg" alt="">
                                   <div class="info">
                                        <div>${song.replaceAll("%20", " ")}</div>
                                        <div>Akash</div>
                                   </div>
                                   <div class="playnow">
                                        <span>Play Now</span>
                                        <img class="invert" src="img/play.svg" alt="">
                                   </div></li>`;
     }

     // // play the first song
     // var audio = new Audio(songs[2]);
     // audio.play();
     // audio.addEventListener("loadeddata", () => {
     //      // let duration = audio.duration;
     //      console.log(audio);
     //      // The duration variable now holds the duration (in seconds) of the audio clip
     // });

     // Attach a addEventListener to each song
     Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
          e.addEventListener("click", element => {
               console.log(e.querySelector(".info").firstElementChild.innerHTML);
               playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
          })
     });

     // Attach a addEventListener to play and previous and next
     play.addEventListener("click", () => {
          if (currentSong.paused) {
               currentSong.play();
               play.src = "img/pause.svg";
          }
          else {
               currentSong.pause();
               play.src = "img/play.svg";
          }
     })

     // Listen for timeupdate event
     currentSong.addEventListener("timeupdate", () => {
          console.log(currentSong.currentTime, currentSong.duration);
          document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
          document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
     })

     // Add an event listener to the seekbar
     document.querySelector(".seekbar").addEventListener("click", e => {
          let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
          document.querySelector(".circle").style.left = percent + "%";
          currentSong.currentTime = ((currentSong.duration) * percent) / 100
     })

     // Add a event listener for hamburger
     document.querySelector(".hamburger").addEventListener("click", ()=>{
          document.querySelector(".left").style.left = "0";
     })

     // Add a event listener for close button
     document.querySelector(".close").addEventListener("click", ()=>{
          document.querySelector(".left").style.left = "-120%";
     })

     // Add event listener for previous and next buttons
     previous.addEventListener("click",()=>{
          let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
          if((index-1) >= 0){
               playMusic(songs[index-1])
          }
     })
     next.addEventListener("click",()=>{
          let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
          if((index+1) < songs.length){
               playMusic(songs[index+1])
          }
     })

}

main()