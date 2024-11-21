const fs = require('fs');

console.log("1");


// // blocking.... / sync....
// const result = fs.readFileSync("c.txt", "utf8");
// console.log(result);


// non-blocking.... / async....
fs.readFile("c.txt", "utf8",(err, result) => {
     console.log(result);
});


console.log("2");







