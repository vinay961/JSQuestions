// Create a function counter that returns a function. The returned function should increment a counter each time it is called.

function counter(){
    let cnt=0;
    return function(){
        return cnt++;
    }
}

// const increment = counter();
// console.log(increment());
// console.log(increment());
// console.log(increment())


// Add a method greet to the person object that logs a greeting message including the person's name.
const person1 = {
    name:"Vinay",
    greet: function(){console.log(this.name + ", Good morning")}
}

// person.greet()


// Write an IIFE that calculates the sum of numbers from 1 to 10 and logs the result.
// ((function(name) {
//     console.log(name);
// }))("Vinay");


// Write a function processArray that takes an array and a callback. The callback should determine how each element in the array is processed.

function processArray(nums,callback){
    return callback(nums)
}

const determine = (nums) =>{
    return nums.map((num)=>num+1)
}

const nums = [1,2,3,4,5]

// console.log(processArray(nums,determine));

// Use Object.defineProperty to make a property non-writable and non-enumerable.

const person2 = {
    name:"Vinay"
}
Object.defineProperty(person2,"secret",{
    value:"This is secret",
    writable:false,
    enumerable:false
})

// console.log(Object.keys(person2));


// Write a function mergeObjects that combines multiple objects into one, handling conflicts by giving precedence to the latest object.
function mergeObjects(...objects){
    return objects.reduce((acc,obj)=> ({...acc,...obj}) ,{})
}
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };

const merged = mergeObjects(obj1, obj2, obj3);
// console.log(merged);

