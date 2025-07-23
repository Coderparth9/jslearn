//Error, Scope, Hoisting, Strict Mode, This Keyword, Arrow Function, Classes, Modules, JSON

//JS Error 
//Try and Catch
/*
try {
  // Code that might cause an error
} catch (error) {
  // Code that runs *if* there is an error
}


try {
  let result = 10 / x; // x is not defined
  console.log(result);
} catch (err) {
  console.log("Oops! Something went wrong.");
  console.log("Error message: " + err.message);
}

try{
  let sum = 10 + a;
  console.log(sum);
} catch(error) {
  console.log("A is not defined");
  console.log("Error: " +error.message);

}

//JS Throw
let age1 = 19;
try {
    if (age1< 18) {
        throw new Error("You are to small");
    }
    console.log("Your age is: "+age1+", You can drive if you have license");
} catch (error1) {
    console.log("Error is: "+error1.message);
    
}


let a = 4, b = 0, sum = a + b;
try {
    if (sum < 5) {
        throw new Error("Sum digits are too small.");
    }
} catch (error2) {
    console.log("Error is: " + error2.message);
} finally {
    console.log(sum);
}

//strict mode
"use strict";
x123 = 23;


//this keyword
let x = this
console.log(x);
//this keyword
const person = {
  name1: "Alice",
  sayHi: function() {
    console.log(this.name1);
  }
};
*/
//function borrowing
//call function borrowing
/*
let person1 = {
    firstname : "Parth",
    lastname :"Maharishi",
    fullname: function(age){
        return this.firstname+" "+this.lastname+" "+age ;
    }
}
let person2 = {
    firstname : "Rohit",
    lastname : "Meena"
}    
let result1 = person1.fullname.call(person2, [22]);//call 
console.log(result1);

console.log(person1.fullname.apply(person2, [25]));  //apply





let person3 = {
    firstname :"Harish",
    lastname :"Choudhary" 
}
let result2 = person1.fullname.call(person3,[20]);//call
console.log(result2);

let bind1 = person1.fullname.bind(person3);//bind
bind1(25);
*/

//Arrow Function
/*

function myfunction() { 
    return "Hello Function";//without arrow function
}
console.log(myfunction());


let Hello = () => {
    return "Hello World!";//with arrow function
}
console.log(Hello());


hel = () => "Hello!";//with arrow function
console.log(hel());

//class in js
class Superman {
    constructor(num,nam,ability) {
        this.num = num;
        this.nam = nam;
        this.ability = ability;
        return `Superman${Superman}`;
    }
} 

let Superman1 = new Superman("1","Ironman", "He can fly");
console.log(Superman1)

let Superman2 = new Superman("2","Thor","God of Thunder");

console.log(Superman2);
 
console.log(Superman1,Superman2);

*/


/*
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
    
  }
}


const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1,myCar2);

*/
/*
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
    console.log(this.year);

  }
  age2() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);

console.log(myCar.age2());


*/

class Person5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, My name is ${this.name}`;
    }
}

// Create an instance of Person5
const myname = new Person5("Parth", 20);
console.log(myname.greet());


//modules

export const name = "Parth";
export const age = 20;


