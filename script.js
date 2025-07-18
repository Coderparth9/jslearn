// Functions and objects in JavaScript

//Functions
console.log("hello");

function add(c, d) {
    return c + d;
}
console.log(add(5, 10));
function myfunction() {
    console.log("Hello, this is my function!");
    
}
myfunction();

function square(num) {
    console.log("square is " + num * num);
}
square(5);  

let arrowsquare = (a) => {
    console.log(+a + " Arrow function square is " + a * a);
    
}
arrowsquare(7);

function Product(a,b) {
    return a * b;
    
}
Product(5, 6);
console.log(Product(6, 6));


function Sum(x,y,z) {
    console.log("Sum is " + (x + y + z));
}
Sum(5,6,15);



//Objects in javascript

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
}
console.log("Old Car: ", car);

car.brand = "BMW";
car.model = "M4 Competition";
car.year = 2023;
console.log("New Car: ", car);


let person = {
    name: "John",
    age: 30,
    gender: "Male"
};
console.log("Person: ", person);

person.age = 31;
console.log("Age after 1 year: ", person);

person.number = 1234567890;
console.log("Person new number: ", person);

delete person.gender;
console.log("Person after deleting gender", person);

person.car = {
    car1: "Polo",
    car2: "Civic",
};
console.log("Person with car: ", person);


let student = {
    name: "Alice",
    age: 20,
    hello: function() {
        console.log("Hello, my name is " + this.name);
    },

    Hey: function(){
        console.log("Hey, I am " + this.name);
    }
};
student.hello();
student.Hey();

function Student(name, age) {
    this.name = name;
    this.age = age;
    this.intro = function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    };
}   
let student1 = new Student("Parth", 20);
let student2 = new Student("Dev", 21);
student1.intro();
student2.intro();