let promise = new Promise(function(resolve, reject) {
     resolve(56)
})

console.log("Hy 1");

setTimeout(() => {
     console.log("hy 2");
}, 2000);

console.log("Hy 3");
console.log(promise);