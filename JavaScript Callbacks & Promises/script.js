console.log("x")
console.log("y")





setTimeout(() => {
     console.log("I am the set Time Out");
}, 2000);

console.log("z")

const fn = () => {
     console.log("Nothing");
}

const callback = (arg,fn)=>{
     console.log(arg);
}

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Harry");
}



loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )









