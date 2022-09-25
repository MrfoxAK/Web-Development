console.log("This is func");

let n = "AK";
let n1 = "A2";
let n2 = "A22K";
let greetText="Good Morning"

// function greet(name,greetText) {
//      let n1 = "name 1"; //local scope
//      console.log(n1);
//      console.log(greetText+" "+name+" is a good boy");
// }

function greet1(name,greetText1="AKash") {
     let n1 = "name 1"; //local scope
     console.log(n1);
     console.log(greetText1+" "+name+" is a good boy");
}

// greet(n,greetText);
// greet(n1,greetText);
// greet(n2,greetText);

greet1(n1)


function sum(a,b) {
     return a+b;
}

let sumVar = sum(1,4);
console.log(sumVar);
