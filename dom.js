//DOM-
console.dir(document);

document.getElementById("demo").innerHTML = "Hello Parth!";
document.getElementById("demo").style.color = "red";


// Change the text of the first <h2> element
document.getElementsByTagName("h2")[0].innerHTML = "Hello";


document.getElementsByClassName("Test")[0].innerHTML = "Hello Classname!";

const y = document.querySelector(".intro");
y.innerHTML = "Hello CSS Selectors!";
let displayDate = function() {
    let date = new Date();
    document.getElementById("date").innerHTML = date.toDateString();
};
const x = document.getElementsByClassName("event")[0];
x.addEventListener("click", displayDate);

function myfunction() {
    x.style.backgroundColor = "yellow";
}
x.addEventListener("mouseover", myfunction);
x.addEventListener("mouseout", function() {
    x.style.backgroundColor = "white";
});
x.removeEventListener("mouseover", myfunction);

//nodes and childs
const parent = document.getElementById("parent");
const child = document.getElementById("child");
console.log(parent.childNodes);

console.log(parent.children);

console.log(parent.firstChild);

console.log(parent.lastChild);

console.log(parent.firstElementChild);
