// const fs = require('fs');


// fs.appendFile("ak.txt", "I am in 4th year", function (err){
//      if(err) console.log(err);
//      else console.log("File created successfully");
// })



// fs.rename("ak.txt", "hello.txt", function (err){
//      if(err) console.log(err);
//      else console.log("File renamed successfully");
// })



// fs.rm("D:\\Web-development\\BackEnd By Sheryians Coding School\\node_js\\File System\\hello.txt", {recursive: true}, function (err){
//      if(err) console.log(err.message);
//      else console.log("Folder removed successfully");
// })

import { readFile } from 'node:fs';

readFile('ak.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});











