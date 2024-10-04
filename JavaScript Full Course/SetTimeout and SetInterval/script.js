
// const sum = (a, b, c) => {
//      console.log("I am running " + (a+b+c));
// }

// let a = setTimeout(() => {
//      alert("Hey bro")
// }, 3000);

// clearTimeout(a)
// console.log(a);


// // setInterval(() => {
// //      alert("Hey bro")
// // }, 3000);

// setTimeout(sum, 2000, 1, 2, 7)

let timeleft = 5;

const c = setInterval(() => {
     if(timeleft <= 0){
          clearInterval(c);
          console.log("Time's Up");
          document.write("Time's Up");
     }
     else{
          document.write(timeleft);
          console.log(timeleft);
          timeleft--;
     }
}, 1000);