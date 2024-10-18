console.log("Let's Write Js");
let currentSong = new Audio();
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

const playMusic = (track) => {
     // let audio = new Audio("/Projects/Spotify Clone/songs/" + track)
     currentSong.src = "/Projects/Spotify Clone/songs/" + track
     currentSong.play();
     play.src = "img/pause.svg";
     document.querySelector(".songinfo").innerHTML = "";
     document.querySelector(".songtime").innerHTML = "";
}

async function main() {
     
     // list of all songs
     let songs = await getSongs()
     console.log(songs);

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
          e.addEventListener("click", element=>{
               console.log(e.querySelector(".info").firstElementChild.innerHTML);
               playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
          })
     });

     // Attach a addEventListener to play and previous and next
     play.addEventListener("click", ()=>{
          if(currentSong.paused){
               currentSong.play();
               play.src = "img/pause.svg";
          }
          else{
               currentSong.pause();
               play.src = "img/play.svg";
          }
     })
}

main()