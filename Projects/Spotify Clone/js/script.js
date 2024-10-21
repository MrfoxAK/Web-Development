console.log("Let's Write Js");
let currentSong = new Audio();
let songs;
let currFolder;

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

async function getSongs(folder) {
     currFolder = folder;
     let a = await fetch(`http://127.0.0.1:3000/Projects/Spotify%20Clone/${folder}/`)
     let response = await a.text()
     // console.log(response)
     let div = document.createElement("div")
     div.innerHTML = response;
     let as = div.getElementsByTagName("a")
     songs = []
     for (let index = 0; index < as.length; index++) {
          const element = as[index];
          if (element.href.endsWith(".mp3")) {
               songs.push(element.href.split(`/${folder}/`)[1])
          }
     }

     // Show all the songs in the playlist
     let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
     songUL.innerHTML = ""
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

     // Attach a addEventListener to each song
     Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
          e.addEventListener("click", element => {
               playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
          })
     });

     return songs;
}

const playMusic = (track, pause = false) => {
     // let audio = new Audio("/Projects/Spotify Clone/songs/" + track)
     currentSong.src = `/Projects/Spotify Clone/${currFolder}/` + track
     if (!pause) {
          currentSong.play();
          play.src = "img/pause.svg";
     }
     document.querySelector(".songinfo").innerHTML = decodeURI(track);
     document.querySelector(".songtime").innerHTML = "00:00";
}

async function displayAlbums() {
     let a = await fetch(`http://127.0.0.1:3000/Projects/Spotify%20Clone/songs/`)
     let response = await a.text()
     // console.log(response)
     let div = document.createElement("div")
     div.innerHTML = response;
     let anchors = div.getElementsByTagName("a");
     let cardContainer = document.querySelector(".cardContainer");
     let array = Array.from(anchors);

     for (let index = 0; index < array.length; index++) {
          const e = array[index];
          if (e.href.includes("/songs")) {
               let folder = e.href.split("/").slice(-2)[0];

               // Get the meta data of the folder
               let a = await fetch(`http://127.0.0.1:3000/Projects/Spotify%20Clone/songs/${folder}/info.json`);
               let response = await a.json();
               console.log(response);
               cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="${folder}" class="card">
                              <div class="play">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100"
                                        height="100">
                                        <!-- Circle background -->
                                        <circle cx="50" cy="50" r="45" fill="#1DB954" />

                                        <!-- Play triangle -->
                                        <polygon points="40,30 70,50 40,70" fill="black" />
                                   </svg>
                              </div>
                              <img src="songs/${folder}/cover.jpg" alt="">
                              <h2>${response.title}</h2>
                              <p>${response.description}</p>
                         </div>`
          }

          // Load the playlist whenever card is clicked
          Array.from(document.getElementsByClassName("card")).forEach(e => {
               e.addEventListener("click", async item => {
                    songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
                    playMusic(songs[0])
               })
          })
     }

}

async function main() {

     // list of all songs
     await getSongs("songs/ncs")
     playMusic(songs[0], true);

     // Display all the albums in the page
     displayAlbums()

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
          // console.log(currentSong.currentTime, currentSong.duration);
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
     document.querySelector(".hamburger").addEventListener("click", () => {
          document.querySelector(".left").style.left = "0";
     })

     // Add a event listener for close button
     document.querySelector(".close").addEventListener("click", () => {
          document.querySelector(".left").style.left = "-120%";
     })

     // Add event listener for previous and next buttons
     previous.addEventListener("click", () => {
          let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
          if ((index - 1) >= 0) {
               playMusic(songs[index - 1])
          }
     })
     next.addEventListener("click", () => {
          let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
          if ((index + 1) < songs.length) {
               playMusic(songs[index + 1])
          }
     })

     // Add an event listener for volume change
     document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
          console.log("Setting Volume to " + e.target.value + "/100");
          currentSong.volume = parseInt(e.target.value) / 100;
     })

     // Add event listener to mute the track
     document.querySelector(".volume>img").addEventListener("click", e => {
          if (e.target.src.includes("volume.svg")) {
               e.target.src = e.target.src.replace("volume.svg", "mute.svg")
               currentSong.volume = 0;
               document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
          }
          else {
               e.target.src = e.target.src.replace("mute.svg", "volume.svg")
               currentSong.volume = .10;
               document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
          }
     })

}

main()