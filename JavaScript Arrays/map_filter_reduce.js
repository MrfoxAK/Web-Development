let arr = [1,2,2,5,80,10];


// let newArr = [];

// for (let index = 0; index < arr.length; index++) {
//      const element = arr[index];
//      newArr.push(element**2);
// }

// console.log(newArr);



let newArr = arr.map((e)=>{
     return e**2
})




// console.log(newArr);



const greaterThan7 = (e)=>{
     if(e>7){
          return true;
     }
     return false;
}


console.log(arr.filter(greaterThan7))




let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))