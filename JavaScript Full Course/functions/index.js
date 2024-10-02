let a = 1
let b = 2
let c = 3

function Avg(x, y) {
     return (x+y)/2
}

// console.log("Avg of a and b is ",(a+b)/2);
console.log(Avg(a,b));

const sum = (x,y) =>{
     return x+y;
}

console.log(sum(1,2));

let s = sum(1,3);
console.log(s);

// const greet = () =>{
//      return "Hello"
// }

const greet = (username) =>{
     return `Hello ${username}`;
}
let g = greet("Akash")
console.log(g)