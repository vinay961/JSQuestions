// function Animal(name) {
//    this.name = name;
// }

// Animal.prototype.speak = function() {
//    console.log(this.name + ' makes a noise.');
// };

// function Dog(name) {
//    Animal.call(this, name); 
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.speak = function() {
//    console.log(this.name + ' barks.');
// };

// const dog = new Dog('Rex');
// dog.speak(); 
  
//   Object.create() it create a new object with same property

const animal = {
    speak: function (){
        console.log(this.name + ' makes a noise.');
    }
}

const cat = Object.create(animal);
cat.name = "meow"
cat.speak()