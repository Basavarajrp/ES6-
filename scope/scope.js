var guessMe = 2;
console.log("guessMe: "+guessMe);// A: guessMe is 2
( function() {
    console.log("guessMe: "+guessMe);// B: guessMe is undefined
    var guessMe = 5;
    console.log("guessMe: "+guessMe);// C: guessMe is 5
} )();
console.log("guessMe: "+guessMe);// D: guessMe is 2


// A: guessMe is undeclared
{
    // B: guessMe is uninitialized. Accessing guessMe throws an error
    //console.log(guessMe); <-This gives an error
    let guessMe = 5;
    console.log("guessMe: "+guessMe);// C: guessMe is 5
}
// D: guessMe is undeclared


// Problem with Var
var name = "Harry";
var isAlive = true;

if (isAlive) {
	   var name = "Alien"
}

cosole.log(name); // "Alien"


// let can be updated but not re-declared.
// Can be re-declared within its scope.
let greeting = "say Hi";
greeting = "say Hello instead";

// Re-initializing the variable throws error within the same scope.
let greeting = "say Hi";
let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared


// const cannot be updated or re-declared:
const greeting = "say Hi";
greeting = "say Hello instead";// error: Assignment to constant variable.

const greeting = "say Hi";
const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared


// Const Declarations will differ when it comes to objects:
const person = {name: "Harry", age: 24}

// cannot do this
person = {name: "Krish", gender: "male"}

// Can do this
person.name = "Krish"