let a = prompt("Enter 1st num");

let b = prompt("Enter 2nd num");

if (isNaN(a) || isNaN(b)) {
     throw SyntaxError("Not Allowed");
}

let sum = parseInt(a) + parseInt(b);

function main(){
     let x = 1;
     try {
          console.log('The sum is ', sum*x);
          return true;
     } catch (error) {
          console.log("Error h vai");
          return false;
     }
     finally{
          console.log('Finally bro');
          
     }
}


let c = main()













