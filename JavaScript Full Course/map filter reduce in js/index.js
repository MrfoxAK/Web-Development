let arr = [45,32,21,2,8]

// map
let a = arr.map((value, index, array)=>{
     console.log(value, index, array);
     return value + array
})
console.log(a);

// filter
let a2 = arr.filter((value)=>{
     return value < 10;
})
console.log(a2)

// reduce
const reduce_func = ((h1, h2)=>{
     return h1+h2;
})
let a3 = arr.reduce(reduce_func);
console.log(a3);