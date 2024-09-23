let button = document.getElementById("btn");

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("click", ()=>{
     // alert("I was clicked");
     document.querySelector(".box").innerHTML = "<b> I was clicked </b>";
})

button.addEventListener("contextmenu", ()=>{
     // alert("I was clicked");
     alert("Don't Right Click Pls");
})

document.addEventListener("keydown", (e)=>{
     console.log(e.key)
     // console.log(e.keyCode)
})


// button.addEventListener("dblclick", ()=>{
//      // alert("I was clicked");
//      document.querySelector(".box").innerHTML = "<b> I was clicked </b>";
// })














