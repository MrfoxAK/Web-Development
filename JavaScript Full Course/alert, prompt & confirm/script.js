// alert("Hello")
let a = prompt("Enter a ", "5")
a = Number.parseInt(a)
let write = confirm("Do you want to wwrite it to the page")
if(write){
     document.write(a)
}
else{
     document.write("u denyed")
}