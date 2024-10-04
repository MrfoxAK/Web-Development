// let a = document.getElementsByClassName("c")[0]
// a.onclick = () =>{
//      let b = document.getElementsByClassName("c")[0]
//      b.innerHTML = "hello"
// }

let x = function (e) {
     alert("Hello 1");
}

let y = function (e) {
     alert("Hello 2");
}

btn.addEventListener('click', x)

btn.addEventListener('click', y)

let a = prompt("Enter Your Fav Num : ", 1);
if(a == "2"){
     btn.removeEventListener('click', x);
}