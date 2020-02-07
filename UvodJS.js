//console.log("Hello World");
// alert('Blik, bejku. Jedu JavaSCRIPT!!!');
// comment
/*comment
comment
comment*/
/*var b = 'smoothie';
console.log(b);

		Dotazovani se na neco.
var name = prompt('What is your name?');
document.getElementById('someText').innerHTML = name;*/  


			// Jmeno
/*var jmeno = prompt('First name');
var prijmeni = prompt('Second name');
var res = jmeno + " " + prijmeni;
document.getElementById('someText').innerHTML = res;*/

// Numbers in JS - umime

//		Functions
/*
1. create a funtion
2. Call the function
*/
function fun() {
	alert('this is a function');
}
//fun();

/*function greeting() {
	var a = prompt('What is your name?');
	//console.log('Hello ' + a);
	var res = 'Hello ' + a;
	document.getElementById('someText').innerHTML = res;
}
greeting();*/

function greeting(yourName) {
    var yourName = prompt('What is your name?');
	var res = 'Hello ' + yourName;
	document.getElementById('someText').innerHTML= res;
}
// greeting();


// How do arguments work in functions?
function nums(num1, num2) {
	var result = num1 + num2;
	console.log(result);
}
//nums(10, 46);
let word = 'algoritmus';
console.log(word.indexOf('a'));
console.log(word.charAt(3));
console.log(word.toUpperCase());
console.log(word.split(''));
console.log(word.slice(2,5));

let fruits = ["apple", "strawberry","pineapple", "peach"];
for(let i = 0; i < fruits.length; i++ )
{
    console.log(fruits[i]);
}
console.log("to string", fruits.toString());
console.log(fruits.join('-'));
console.log(fruits, fruits.pop(), fruits); // removes last element
console.log(fruits.push('pear'), fruits); // appends an element
fruits[fruits.length] = 'banana'; // same as push
console.log(fruits);
fruits.shift();  // removes first element
console.log(fruits);
fruits.unshift('orange');
console.log(fruits);

let vegetable = ['asparagus', 'carrot', 'tomato'];
let allGroceries = fruits.concat(vegetable);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));   
console.log(allGroceries.reverse());

let someNum = [2,10,4,5,7,3,2,5,9,20,156,24];
console.log(someNum.sort(function(a, b) {return a - b} )); //sorted in ascending order
console.log(someNum.sort(function(a, b) {return b - a} )); //sorted in descending order


let emptyArray = new Array();
for(let a = 0; a < 10; a++)
{
    emptyArray.push(a);    
}
console.log(emptyArray);

let emptyArray1 = new Array();
for(let b = 0; b < 10; b++)
{
    emptyArray1.unshift(b);    
}
console.log(emptyArray1);


