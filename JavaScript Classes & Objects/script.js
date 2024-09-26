// let obj = {
//      a:1,
//      b:"harry"
// }

// console.log(obj);

// let animal = {
//      eat : true
// }

// let rabbit = {
//      jump : true
// }

// rabbit.__proto__ = animal;

class Animal{
     constructor(name){
          this.name = name
          console.log('Obj is created');
     }
     eat(){
          console.log("Kha rah hu");
     }
     jump(){
          console.log("Nach kar rah hu");
     }
}

class Lion extends Animal{
     constructor(name){
          super(name)
          this.name = name
          console.log('Obj is created it is a Lion');
     }
     eat(){
          // super.eat()
          console.log("Kha rah hu vai lion hu main");
     }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Hera")
console.log(l);












