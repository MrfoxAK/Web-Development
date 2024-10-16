async function harry() {
     let delhiweather = new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("27 deg");
          }, 4000);
     })

     let bangaloreweather = new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve("21 deg");
          }, 10000);
     })

     // delhiweather.then(alert)
     // bangaloreweather.then(alert)
     
     console.log("Fetching delhi weather please wait...");
     let delhiW = await delhiweather
     console.log("Fetched delhi weather " + delhiW);
     
     console.log("Fetching bangalore weather please wait...");
     let bangaloreW = await bangaloreweather
     console.log("Fetched bangalore weather " + bangaloreW);

     return [delhiW, bangaloreW];
}

const charry = async () => {
     console.log("Hey I am charry i am waiting");
}

const main1 = async ()=>{
     console.log("Welocme to weather control room");
     let a = await harry();
     let b = await charry();
}

main1()