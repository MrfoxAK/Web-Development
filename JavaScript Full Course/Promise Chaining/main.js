// let p1 = new Promise((resolve, reject) => {
//      setTimeout(() => {
//           console.log("Resolved after 2 sec");
//           resolve(56);
//      }, 2000);
// })


// p1.then((value) => {
//      console.log(value);
//      let p2 = new Promise((resolve, reject) => {
//           setTimeout(() => {
//                resolve("p2");
//           }, 4000);
//      })
//      return p2;
// }).then((value) => {
//      console.log("We are all done");
//      return 2;
// }).then((value) => {
//      console.log("Now we are pakka done!");
// })



const loadScript = (src) => {
     return new Promise((resolve, reject) => {
          let script = document.createElement("script");
          script.type = "text/javascript";
          script.src = src;
          document.body.appendChild(script);
          script.onload = () => {
               resolve("Script has been loaded successfully");
          }
          script.onerror = () => {
               reject(0);
          }
     })
}



let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
p1.then((value)=>{
     console.log(value);
     return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
}).then((value)=>{
     console.log("Sec scrpt is reday");
}).catch((error)=>{
     console.log("We are sorry at this moment. Please try again");
})
















