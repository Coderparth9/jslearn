//RegExp and async in js 
//Regexp

let txt = "This is a RegExp test ";
console.log(txt.match(/is/g));
console.log(txt.match(/(te)(st)/d)); 

//metacharacters & classes
let txt1 = "Hello World!";
const pattern = /Hello/;
console.log(txt1.match(pattern));
const pattern0 = /[A-Z]/g;
console.log(txt1.match(pattern0));
const pattern1 = /[^A-Z]/g;
console.log(txt1.match(pattern1));
const pattern21 = /[abc]/g;
console.log(txt1.match(pattern21));

const pattern22 = /[^abc]/g;
console.log(txt1.match(pattern22));

const pattern31 = /\d/g;
console.log(txt1.match(pattern31));
const pattern32 = /\D/g;
console.log(txt1.match(pattern32));

const pattern41 = /\w/g;
console.log(txt1.match(pattern41));
const pattern42 = /\W/g;
console.log(txt1.match(pattern42));

const pattern51 = /\s/g;
console.log(txt1.match(pattern51));
const pattern52 = /\S/g;
console.log(txt1.match(pattern52));

//assertions
let txt2 = "Vardara Softwares Pvt Ltd";
let txt3 = "The Vardara Softwares Pvt Ltd";
const pattern61 = /^Vardara/;
console.log(txt2.match(pattern61));
console.log(pattern61.test(txt2));

const pattern62 = /^Vardara/;
console.log(txt3.match(pattern62));
console.log(pattern62.test(txt3));

const pattern63 = /Ltd$/;
console.log(txt2.match(pattern63));
console.log(pattern63.test(txt2));

const pattern64 = /Ltd$/;
console.log(txt3.match(pattern64));
console.log(pattern64.test(txt3));

const pattern65 = /The$/;
console.log(txt3.match(pattern65));
console.log(pattern65.test(txt3));

const pattern66 = /Ltd\b/;
console.log(txt2.match(pattern66));
console.log(pattern66.test(txt2));

const pattern67 = /\bLTD/;
console.log(txt2.match(pattern67));
console.log(pattern67.test(txt2));

//RegExp Quantifiers
let txt4 = "Hello World! Hello Universe!";
const pattern71 = /lo*/g;
console.log(txt4.match(pattern71));

const pattern72 = /lo+/g;
console.log(txt4.match(pattern72))

const pattern73 = /lo?/g;
console.log(txt4.match(pattern73));

const pattern74 = /lo{1}/g;
console.log(txt4.match(pattern74));

const pattern75 = /lo{0,1}/g;
console.log(txt4.match(pattern75));

//objects in regex
const pattern76 = /lo{1,}/g;
console.log(pattern76.test(txt4));



//async function
//callback function
function myDisplayer(Some) {
    console.log(Some);
}

function Add(a,b,mycallback) {
    let sum = a + b;
    mycallback(sum);
}
Add(5, 10, myDisplayer);

//setTimeout
setTimeout(myFunction , 3000);
function myFunction() {
    console.log("I love Javascript !");
}

//setInterval
setInterval(interfunction, 5000);
function interfunction() {
    console.log("I love Javascript ! Every 5 seconds");
}

//promises in async
let promise = new Promise(function(resolve, reject) {
    let x = 0;
    if (x === 0) {
        resolve("Success!"); 
    } else {
        reject("Failure!"); 
    }
});
promise.then(
    function(error) { console.log(error); }, // onRejected
    function(value) { console.log(value); } // onFulfilled
);



let mypromises = new Promise(function (resolve,reject) {
    let y = 41;
    if (y % 2 === 0) {
        resolve("Even number");
    }
    else {
        reject("Odd number");
    }
})
mypromises.then(
    function(value) { console.log(value); }, 
    function(error) { console.log(error); } 
)


//using async function with promises
async function myAsyncFunction() {
    return "hello";
}
myAsyncFunction().then(
    function(value){console.log(value);},
    function(error){console.log(error);}
)

async function Hello() {
    let myypromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Hello World");
            },3000);
        
    });
    console.log(await myypromise);
}
Hello();
