// // syncronous programing
// let a = prompt("Enter Your Name : ");
// let b = prompt("Enter Your Email : ");
// let c = prompt("Enter  Your Phone Number : ");
// console.log(`Hello ${a}, your email is ${b} and your phone number is ${c}.`);


// // asynchronous programing
// console.log("start");
// setTimeout(() => {
//      console.log("Hy There");
// }, 2000);
// console.log("end");


// callbacks
function loadScript(src, callback){
     let script = document.createElement("script");
     script.src = src;
     script.onload = function() {
          console.log("loaded src with src " + src);
          callback(null, src);
     };
     script.onerror = function() {
          console.error("Failed to load src with src " + src);
          callback(new Error("Failed to load src with some error"));
     };
     document.head.appendChild(script);
}


function goodnight(src){
     alert("Good Night" + src);
}
function goodmorning(error, src){
     if(error){
          console.log("ERROR");
     }
     alert("Good Morning" + src);
}
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodnight)
loadScript("https://cdn.jsdedrrdg livr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning)


// Eaxmple of a callback function
// function printName(name) {
//   console.log(`Hello, ${name}!`);
// }
// function askName(callback) {
//   let name = prompt("Enter your name: ");
//   callback(name);
// }
// askName(printName);