// Functions, objects, event, string in JavaScript

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

function stud(name, age){
    this.name = name;
    this.age =age;
    this.init = function() {
        console.log(name, age);
    }; 
}   
let stud1 = new stud("harish", 22);
let stud2 = new stud("surya", 23);
stud1.init();
stud2.init();   


//strings in javascript

let str = "Hello, World!";
console.log("Original String: ", str);
console.log("Length of String: ", str.length);//lenght of string
console.log("Uppercase: ", str.toUpperCase());//uppercase conversion
console.log("Lowercase: ", str.toLowerCase());//lowercase conversion

let txt = `this is let code practice for javascript`;
console.log("Original Text: ", txt);


let numbers = "121324464789";
console.log(numbers.slice(0, 7));//slice method

let text = 
`The quick
brown fox          //multiline string
jumps over
the lazy dog`;
console.log(text);
let char = text.charAt( 5);//character at method
console.log(char);

let con="Hello ";
let con1="World!";
let con2 = " How are you?";
console.log(con2[0],con2[10]);

let con3 = con.concat(con1,con2);
console.log("Concatenated String: ", con3);//concatenation of strings
console.log(con3.slice(6, 12)); //sclice method
console.log(con3.length)

let str1 = "Hello, World! ";
console.log(str1.length);
console.log(str1[0]); //first character
console.log(str1.includes("Hello")); //check string includes a word or not
console.log(str1.repeat(5));  //repeat method
console.log(str1.replace("World", "JavaScript")); //replace method

let str2 = "JavaScript is fun fun fun !";
console.log(str2.length);
console.log("before replace: " +str2);
console.log("After replaced: " +str2.replace(/fun/g, "funny")); //replace all occurrences of "fun" with "funny"
console.log(str2.split(" ")); //split method by space
console.log(str2.indexOf("fun")); //index of method
console.log(str2.lastIndexOf("fun")); //last index of method
console.log(str2.search("is")); //search method

function reverseString(str) { //reverse string function
return str.split("").reverse().join("");
}
console.log(reverseString("Hello, World!"));

//number in javascript
let number3 = 123e-6,
    number4 = 123e2,
    number5 = 123e2;
console.log("Exponential Notation: ", number3,number4, number5);
//bigint in javascript

let x = BigInt("999999999999999999999999999999999999999999");
console.log(typeof x);
let y = `999999999999999999999999999999999999999999`;
console.log(typeof y);

let z = 244;
z.toString(); //convert to string
console.log("in string ", z.toString());
console.log(typeof z.toString()); 

let i = 244;
i.toString(2); //convert to binary
console.log("binary", i.toString(2));
console.log(typeof i.toString(2)); 


let j = 244;
j.toExponential(2); //convert to exponential
console.log("exponential", j.toExponential(2));
console.log(typeof j.toExponential(2)); //check type of exponential notation


j.toFixed(8); //convert to fixed point notation
console.log("fixed point", j.toFixed(8));
console.log(typeof j.toFixed(8)); //check type of fixed point notation


j.toPrecision(4); //convert to precision notation
console.log("precision", j.toPrecision(4));
console.log(typeof j.toPrecision(4)); //check type of precision notation

