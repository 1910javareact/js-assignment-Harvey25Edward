/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

// object literal
let myObj = {
    name = 'Harvey',
    age = 25
} 
// constructor
function myObje(name='Harvey' ,age=25){
    this.name = name
    this.age = age
}

// class
let my = new myObj('Alec', 32)