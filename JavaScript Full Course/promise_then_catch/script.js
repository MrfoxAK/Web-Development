let p1 = new Promise((resolve, reject) => {
     console.log("Promise is Pending");
     setTimeout(() => {
          alert("Done, fulfilled");
          resolve("Success");
          // reject(new Error("I am a Eorr"));
     }, 3000);
})

let p2 = new Promise((resolve, reject) => {
     console.log("Promise is Pending");
     setTimeout(() => {
          alert("Done, fulfilled");
          // resolve("Success");
          reject(new Error("I am a Eorr"));
     }, 3000);
})

// console.log(p1, p2);
p1.then((value)=>{
     console.log(value);
})

p2.catch((error)=>{
     console.log("Some Error occurred");
})