console.log("Let's Write Js");

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

async function main() {
     // list of all songs
     let songs = await getSongs()
     console.log(songs);

     let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
     for (const song of songs) {
          songUL.innerHTML = songUL.innerHTML + `<li>${song.replaceAll("%20", " ")}</li>`;
     }
     // play the first song
     var audio = new Audio(songs[2]);
     audio.play();
     audio.addEventListener("loadeddata", () => {
          // let duration = audio.duration;
          console.log(audio);
          // The duration variable now holds the duration (in seconds) of the audio clip
     });
}

main()