//Js Maps, Typed, iterables, iterators,
//Maps in javascript
/*
let fruits = new Map([
    ["apples",500],
    ["bananas",200],
    ["oranges",300]
])
console.log(fruits);
fruits.set("Grapes",300);
console.log(fruits);//
console.log(fruits.size);
console.log("value of bananas: "+fruits.get("bananas"));
console.log(typeof fruits);
console.log(fruits instanceof Map);
console.log(fruits.delete("apples"));
console.log(fruits)
console.log(fruits.clear());
console.log(fruits);

//Typed Array


let arr = Int8Array.from([2, 3, 545, 7, 7,]); //from method
console.log(arr);

let arr1 = Int16Array.of(1, 2, 34, 5); //of method
console.log(arr1);

console.log(arr1.constructor.name);//constructor.name property

console.log(arr.BYTES_PER_ELEMENT); //BYTES_PER_ELEMENT PROPERTY


let d = new Date();
let num = Number(d);
let time = d.getTime();
console.log(typeof num);
console.log(typeof d.getTime);

let date = new Date();
console.log(date);
console.log(typeof date);


console.log(date.toString());
console.log(typeof date.toString());

let person = {
    first : "John",
    second : "Wick"
}


//destructuring in Javascript


let {first,second} = person;
console.log(person);
console.log(first+" "+second);

let {first: firstName, second: secondName, age = 25} = person;
console.log(first+" "+second+" "+age);
      

let st = "Parth";

let [a1,a2,a3,a4,a5]= st;
console.log(a1, a2, a3, a4, a5); */



//Regular expression in javascript



//let regex = new RegExp('pattern')
/*
let txt = "Vardara Softwares";//search
let regex = /Vardara/i;
let x1 = txt.search(/vardara/i);//In this i is flag which make to search case-insensitive
console.log("Search: "+x1);
let xy = regex.test(txt);
console.log(xy);

let y = txt.match(/Softwares/);//search
console.log(y);

let z1 = txt.replace(/Softwares/,"Enterprises");//replace Softwares with Enterprises
console.log("Softwares replced with: "+z1);

//Modifier Flag of RegExp
let a1 = txt.match(/Vardara/g);
console.log(a1);

let a2 = "I am intern in Vardara Softares";
console.log(a2);
let a = a2.search(/i/i);
console.log(a);


let str = "Hello World!";
let regex1 = /Hello/i;

let result = regex1.test(str);
console.log(result); //output is true

let re = /WOrl/;
let x = re.test(str);
console.log(x); //output is false

let ab = "Hello! Parth";

let chec = /Hello/i;
let z = chec.test(ab);
console.log(z);


//Methods of Regexp
//test method  
let test = /hello/;
let str1 = "hello parth";
let str2 = "Hii";

console.log(test.test(str1)); //Output True
console.log(test.test(str2)); //Output False

//exec Method
console.log(test.exec(str1));
console.log(test.exec(str1));

console.log(test.exec(str2));



const pattern = /(\d{3})-(\d{2})-(\d{4})/;
const str3 = "My phone number is 123-45-6789";
const result1 = pattern.exec(str3);
console.log(result1);// Output: [ '123-45-6789', '123', '45', '6789', index: 23, input: 'My phone number is 123-45-6789', groups: undefined ]


let pat = /(\d{3})-(\d{2})-(\d{5})/
let numbre = "MY NUmber is 123-34-34567";
console.log(pat.exec(numbre));
 
//escape method in regexp

let a12 = /\./;
console.log(a12.test("Hello.hello"));//output true because in this string "." exist

let a13 = /\\/;
console.log(a13.test("Hi"));//output false because in this string " \ "not exsist
*/

//Regexp Patterns
//. Dot (any Character)
let a = /a.c/;
console.log("run".match(a));

//^ caret (Starting of string)
let b = /^Hello/;
console.log("Hello".match(b));
console.log("Hii".match(b));

//$ (Ending of string)
let c = /World$/i;
console.log("Hello world".match(c));
console.log("World Hii".match(c));
console.log("Wonder of World".match(c));


/*
let xyz = 20/2 + 20*5 + (2+5) * 2  

console.log(xyz);

{
let x1 = 20/2 + 20*5 + 2 + 5 * 2  
console.log(x1)
}
*/








