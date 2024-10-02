let num = [4,5,423,35,68,78]

num.forEach(element => {
     console.log(element*element)
});

for (const i in num) {
     console.log(i)
}

for (const i of num) {
     console.log(i)
}