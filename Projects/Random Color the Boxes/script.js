function randomNUM() {
     let rand = Math.random();
     let BGcolor;
     if (rand < 0.25) {
          BGcolor = "red"
     }
     else if (rand < 0.5 && rand >= 0.25) {
          BGcolor = "yellow"
     }
     else if (rand < 0.75 && rand >= 0.5) {
          BGcolor = "green"
     }
     else if (rand > 0.75) {
          BGcolor = "blue"
     }
     return BGcolor;
}

document.querySelectorAll(".box").forEach(e => {
     let c = randomNUM();
     e.style.backgroundColor = c;
})