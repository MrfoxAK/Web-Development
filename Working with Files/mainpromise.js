import fs from "fs/promises"

let a = await fs.readFile("Working with Files\\akash2.txt");

let b = await fs.writeFile("Working with Files\\akash2.txt", "\n\n\n\n this is a test");

console.log(a.toString())