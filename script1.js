//Js Number, Array, Dates;
//Numbers Methods
/* */
let x = 10;

x.valueOf(); // Returns the primitive value of the number
console.log(x.valueOf()); // Output: 10
console.log(typeof x.valueOf()); // Output: "number"

x.toString(); // Converts number to string
console.log(x.toString()); // Output: "10"
console.log(typeof x.toString()); // Output: "string"

x.toString(2); // Converts number to binary string
console.log(x.toString(2)); // Output: "1010" (binary representation of 10 but its data type is string )
console.log(typeof x.toString(2)); // Output: "string"

parseInt("10 30"); // Converts string to integer
console.log(parseInt("10 30")); // Output: 10

Number.isInteger(); // Checks if the value is an integer
console.log(Number.isInteger(10)); // Output: true

Number.isInteger(); // Checks if the value is an integer
console.log(Number.isInteger(10.5)); // Output: true

Number.isFinite(); // Checks if the value is a finite number
console.log(Number.isFinite(50)); // Output: true

Number.parseFloat(); // Converts string to float
console.log(Number.parseFloat("10.5")); // Output: 10.5

Number.parseFloat(); // Converts string to float
console.log(Number.parseFloat("10 20 30")); // Output: 10

//array

let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(typeof arr); // Output: "object"
console.log("length of array: " + arr.length); // Output: 5
console.log("First Element: " + arr[0]); // Output: 1
console.log("Last Element: " + arr[4]); // Output: 5

arr.unshift(0); // Adds an element to the beginning of the array
console.log(arr); // Output: [0, 1, 2, 3, 4, 5]

arr.shift(); // Removes the first element from the array
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.push(6); // Adds an element to the end of the array
console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

arr.pop(); // Removes the last element from the array
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.includes(); // Checks if the array includes a specific element
console.log(arr.includes(5)); // Output: true

let reverse = arr.reverse(); // Reverses the order of the elements in the array
console.log("Reversed Array: " + reverse); // Output: [5, 4, 3, 2, 1]

let sort = arr.sort(); // Sorts the elements of the array
console.log("sorted array :" + sort); // Output: [1, 2, 3, 4, 5]

let string = arr.toString(); // Converts the array to a string
console.log("Array to String: " + string); // Output: "1,2,3,4,5"

console.log("Index of number 3:- " + arr.indexOf(3)); // Returns the index of the first occurrence of an element

for (let i = 0; i < arr.length; i++) {
  console.log("Element at index " + i + ": " + arr[i]); // Output: Elements at each index
}

arr.forEach((element) => {
  console.log("Element: " + element); // Output: Each element in the array
});

for (let num of arr) {
  console.log("Elements in array: " + num);
} // Output: Each element in the array using for...of loop

//merging 2 arrays

let arr1 = [1, 2, 3, 8];
console.log("First Array: " + arr1); // Output: [1, 2, 3, 8]
console.log("Length of First Array: " + arr1.length); // Output: 4

let arr2 = [4, 5, 6, 7];
console.log("Second Array: " + arr2); // Output: [4, 5, 6, 7]
console.log("Length of Second Array: " + arr2.length); // Output: 4

let even = arr2.filter((num) => num % 2 === 0); // Filters even numbers from arr2
console.log("Even Numbers in arr2: " + even); // output: [4, 6]

let mergedArray = arr1.concat(arr2); // Merges two arrays
console.log("Merged Array: " + mergedArray); // Output: [1, 2, 3, 8, 4, 5, 6, 7]

mergedArray.splice(4, 2); // Removes elements from the merged array starting at index 4 and removes 2 elements
console.log("Array after Splice: " + mergedArray); // Output: [1, 2, 3, 8, 6, 7]

let Superheroes = ["Ironman", "Spiderman", "Hulk", "Thor"];
console.log("Superheroes: " + Superheroes); // Output: ["Ironman", "Spiderman", "Hulk", "Thor"]
console.log("Length of Superheroes Array: " + Superheroes.length); // Output:
Superheroes.forEach((element) => {
  console.log("Element: " + element);
});

//Dates in Javascript

let date = new Date(); // Creates a new Date object with the current date and time
console.log("Current Date: " + date); // Output: Current date and time

const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today is: " + day[date.getDay()]); // Returns the day of the week as a string
currentYear = date.getFullYear(); // Returns the current year
console.log("Current Year: " + currentYear); // Output: Current year
console.log("Current Month: " + (date.getMonth() + 1)); // Returns the current month (0-11, so we add 1 for human-readable format)
console.log("Current Date: " + date.getDate()); // Returns the current date (1-31)
console.log("Current Hours: " + date.getHours()); // Returns the current hour (0-23)
console.log("Current Minutes: " + date.getMinutes()); // Returns the current minutes
console.log("Current Seconds: " + date.getSeconds()); // Returns the current seconds
console.log("Current Milliseconds: " + date.getMilliseconds()); // Returns the current milliseconds

let date1 = new Date("2023-10-07 13:18:30"); // Creates a Date object for a specific date
console.log("Specific Date: " + date1); // Output: Specific date
console.log(date1.toString()); // Converts the date to a string representation
console.log("Date String: " + date1.toDateString()); // Converts the date to a human-readable string
console.log("Time String: " + date1.toTimeString()); // Converts the date to a time string
console.log("Locale String: " + date1.toLocaleString()); // Converts the date to a locale-specific string
console.log("UTC String" + date1.toUTCString()); // Converts the date to a UTC string

let ms = Date.now(); // Returns the number of milliseconds since January 1, 1970
console.log("Milliseconds since 1970: " + ms); // Output: Milliseconds since 1970

let date2 = new Date(2023, 9, 7, 13, 18, 30); // Creates a Date object for a specific date (year, month, day, hours, minutes, seconds)
console.log("Date Before : " + date2); // Output: Date object for the specified date
date2.setFullYear(2024); // Sets the year of the date object to 2024
console.log("Updated Year: " + date2.getFullYear()); // Returns the updated

date2.setDate(25); // Sets the day of the month to 25
console.log("Updated Date: " + date2.getDate()); // Output: Updated date

date2.setMonth(11); // Sets the month to December (0-11, so 11 is December)
console.log("Updated Month: " + (date2.getMonth() + 1)); // Returns the updated month (adding 1 for human-readable format)
console.log("Updated Date: " + date2); // Output: Updated date with new month

console.log("Date in ISO format: " + date2.toISOString()); // Converts the date to ISO format

//Math in JavaScript
//Math Properties
console.log("Math.PI: " + Math.PI); // Output: 3.141592653589793
console.log("Math.E: " + Math.E); // Output: 2.718281828459045

//Methods
//Number to integer conversion
console.log("Math.round(4.4): " + Math.round(4.6)); // Output: 5 (rounds to nearest integer)
console.log("Math.ceil(3.9): " + Math.ceil(3.9)); // Output: 5 (rounds up to nearest integer)
console.log("Math.floor(4.6): " + Math.floor(4.6)); // Output: 4 (rounds down to nearest integer)
console.log("Math.trunc(5.9): " + Math.trunc(5.9)); // Output: 4 (removes decimal part)

console.log("Math.sign(0): " + Math.sign(0)); // Output: -1 (returns sign of number)
console.log("Math.pow(2, 4): " + Math.pow(2, 4)); // Output: 8 (2 raised to the power of 3)

let c = 10;
console.log("Math.log(a): " + Math.log(c)); // Output: 2.302585092994046 (natural logarithm of 10)
console.log("Math.log10(a): " + Math.log10(c)); // Output: 1 (base 10 logarithm of 10)
console.log("Math.log2(a): " + Math.log2(c)); // Output: 3.321928094887362 (base 2 logarithm of 10)

let g = Math.floor(Math.random() * 100); // Generates a random integer between 0 and 99
console.log("Random Integer: " + g); // Output: Random integer between 0 and 99

//boolean in JavaScript
let y = 10;
console.log(y != 10);
/* */

//sets

let ab = new Set([1, 2, 3, 4, 5, 1, 2]); // Creates a new Set with unique values
ab.add(5);
ab.add(50);
console.log(ab); // Output: Set { 1, 2, 3, 4, 5 }
console.log(ab.size); // Output: 5 (size of the set)
for (const el of ab) {
  console.log(el); // Output: Each unique element in the set
}

console.log(ab.has(3)); // Checks if the set contains the value 3 (Output: true)
console.log(ab.values()); // Returns an iterator of the values in the set
console.log(ab.keys()); // Returns an iterator of the keys in the set (same as values)
console.log(ab.entries()); // Returns an iterator of key-value pairs in the set (key and value are the same in a Set)

let a = new Set([1, 2, 3, 4, 5]);
let b = new Set([4, 5, 6, 7, 8]);
console.log(a);
console.log(+b.size); // Output: 5 (size of the set)
console.log(typeof b); // Output: "object"

console.log(a.union(b)); //union or in this both a & b set merged

console.log(a.difference(b)); //difference between a & b print in console

console.log(a.intersection(b)); //intersection same things in 2 sets written in console

console.log(a.symmetricDifference(b)); //it removes simmilar values
