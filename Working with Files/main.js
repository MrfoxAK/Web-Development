const fs = require("fs")


// console.log(fs);

console.log("Starting");

// fs.writeFileSync("akash.txt", "Akash is coding");

fs.writeFile("akash2.txt", "Akash is coding", ()=>{
     console.log("File written successfully");
     fs.readFile("akash2.txt", (error, data)=>{
          console.log(error, data.toString());
     })
});

// fs.appendFile("akash2.txt", "Akash is appending", (e, d)=>{
//      console.log(d);
// })

console.log("Ending");