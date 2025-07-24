//Objects in Javascript
/*
let car = {
  Brand: "BMW",
  Model: "M4 Competition",
  Year: 2025,
  Details: function () {
    return (
      this.Brand +
      " " +
      this.Model +
      " " +
      this.transmission +
      " " +
      this.color +
      " " +
      this.FuelType +
      " " +
      this.Year
    );
  },
};

car.color = "Blue";
car.FuelType = "Petrol";
car.transmission = "Manual Transmission";

console.log("Here is the full details of your car: " + car.Details());
console.log(car);

delete car.color;
console.log("Here is the full details of your car: " + car.Details());
//for in loop
for (let key in car) {
  console.log(key, car[key]);
}

for (const key of Object.entries(car)) {
  console.log(key);
}

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.name = function Name() {
    return "Fullname is: " + this.firstName + " " + this.lastName;
  };
}
const Person1 = new Person("Parth", "Maharishi", 20);
console.log(Person1);
console.log(Person1.name());

//Object Prototypes

function student(Name, Class, Subject) {
  this.Name = Name;
  this.Class = Class;
  this.Subject = Subject;
  this.details = function () {
    return this.Name + " " + this.Class + " " + this.Subject + " " + this.age;
  };
}

const student1 = new student("Harish", "BCA 6th Sem", "DSA using python");
console.log(student1.details()); //output Harish BCA 6th Sem DSA using python undefined because we defined age after this argument

student.Age = 20;
console.log(student1.Age); //output is undefined without using prototype

student.prototype.age = 20;
console.log(student1.age); //output is 20

console.log(student1.details()); //output Harish BCA 6th Sem DSA using python 20

//General Methods of Objects

//object assign method

const employee = {
  firstname: "firstname",
  lastname: "lastname",
  age: "age",
};
const employee1 = { firstname: "Parth", lastname: "Maharishi", age: 20 };
const employee2 = { firstname: "Harish", lastname: "Khileri", age: 21 };

const emp1 = Object.assign(employee, employee1);
console.log(emp1);
console.log(employee); //output is same as emp1

const emp2 = Object.assign(employee, employee2);
console.log(emp2);
console.log(employee); //output is same as emp2

//object enteries
console.log(Object.entries(employee1));

for (const [key, value] of Object.entries(employee1)) {
  console.log(key + " " + value);
}

//obect.fromenteries Method
//1
const entries = [
  ["name", "Alice"],
  ["age", 30],
  ["city", "New York"],
];

const obj = Object.fromEntries(entries);

console.log(obj); // Output: { name: 'Alice', age: 30, city: 'New York' }

//2
//object.values method
const entry1 = [
  ["name1", "Parth"],
  ["age1", 20],
  ["city", "Jaipur"],
];
let txt = Object.values(entry1);
console.log(txt);
console.log(Object.fromEntries(entry1));

//object.groupby method
let Person = [
  { name: "Parth", Age: 20 },
  { name: "Harish", Age: 21 },
  { name: "Dev", Age: 20 },
];
const group = Object.groupBy(Person, (per1) => per1["name"]); //groupby name
console.log(group);

const groupage = Object.groupBy(Person, (per2) => per2["Age"]); //groupby Age
console.log(groupage);

console.log(Object.groupBy(Person, (per1) => per1["name"])); //groupby name


//Object properties in Javascript

//Object.defineProperty

const Person = {
  name: "Jonny",
  age: 24,
  city: "Mumbai",
};
//new property add
const property = Object.defineProperty(Person, "Year", { value: 2025 });
console.log(property);

//property change
const person = {
  firstName: "Tony",
  lastName: "Stark",
  movie: "Ironman",
  year: "2012",
};

console.log(person); //before changing year

const property1 = Object.defineProperty(person, "year", { value: "2008" });
console.log(property1); //after changing year output {firstName: 'Tony', lastName: 'Stark', movie: 'Ironman', year: '2008'}

//Object.getOwnPropertyNames()

const get =Object.getOwnPropertyNames(person);
console.log(get);

//object,keys
console.log(Object.keys(person));


const person = {
  firstName: "Tony",
  lastName: "Stark",
  movie: "Ironman",
  year: "2012",

  get Fullname(){
    return this.firstName+" "+this.lastName;
  },

};
console.log(person.Fullname);

//setter object property
let product = {
    _price:0,

    set price(value){

        if (value > 0) {
            console.log("Product price is: "+value);
            return;
        }
        else{
             console.log("Product price is invalid: "+value);
             return;
        }
    }
}
product.price = 50;
product.price = -6;
*/

/*
let product = {
    _price: 0,

    set price(value) {
        if (value < 0) {
            console.log(`Invalid price ${value}`);
            return; // Don't set invalid values
        }
        this._price = value;
        console.log(`Product Price is ${value}`);
    },

    get price() {
        return this._price;
    }
}

// Use the setter (not direct property access)
product.price = -5;  // Output: "Invalid price -5"
console.log(product._price); // Output: 0 (unchanged)

product.price = 25;  // Output: "Product Price is 25"
console.log(product._price); // Output: 25
console.log(product.price);  // Output: 25 (using getter)
*/

//Object protection in js 

//Object.preventExtensions
let person5={
    name1 : "Parth",
    city : "Jaipur" 
}
//check is this object extensible
console.log(Object.isExtensible(person5));  //outout is true before this Object.preventExtensions

Object.preventExtensions(person5);//after this we cannot add properties in object but we can remove exsisting properties
console.log(person5.name1);

person5.age = 50;

console.log(person5.age);//output undefined 

delete person5.name1;//In this we can delete properties 
console.log(person5.name1);//output is undefined
//check is object extensible
let check = Object.isExtensible(person5);
console.log(check);//output is false after this Object.preventExtensions


//Object.seal
Object.seal(person5)//using this we seal this object we cannot add & delete properties

delete person5.city;//this is not deleted after the object is sealed
console.log(person5.city)

//lets check can we delete & add object properties
let check1 =Object.isSealed(person5); 
console.log(check1);

//object.freez
//lets check is the object is frozen or not
let check3 =Object.isFrozen(person5);
console.log(check3);

Object.freeze(person5);//by using this we cannot acess the object
console.log("Now the object is frozen");

console.log(delete person5.city);//output false
console.log(person5.city);//output is Jaipur

person5.lastname = "Maharishi";
console.log(person5.lastname);//output is undefined

//lets check agai
let check4 =Object.isFrozen(person5)
console.log(check4);