# ES6+
JavaScript ES6+ features.

# var VS let
Variables declared with var have function scope. This means that they are accessible inside the function/block they are defined in.

```javascript
var guessMe = 2;
console.log("guessMe: "+guessMe);// A: guessMe is 2
( function() {
    console.log("guessMe: "+guessMe);// B: guessMe is undefined
    var guessMe = 5;
    console.log("guessMe: "+guessMe);// C: guessMe is 5
} )();
console.log("guessMe: "+guessMe);// D: guessMe is 2
```
In the above code block, inside the self-executing function 1st console log is giving “undefined” the reason behind this is when ever the function is invoked all the variables defined inside the function with var keyword are made available and so the “guessMe” variable is not defined before the console log it was assigned as “undefined”. But the 2nd console log inside the function logs the o/p as “5” at this time the value was made available at the run time as it was available.

If a variable is declared using var inside a function, the Javascript engine treats them as if they are declared at the top of a functional scope. However, if that variable has been declared outside the function, it has a global scope regardless of where the actual declaration occurs. This is called hoisting.

Variables declared with let have block scope. They are valid inside the block they are defined in.

```javascript
// A: guessMe is undeclared
{
    // B: guessMe is uninitialized. Accessing guessMe throws an error
    //console.log(guessMe); <-This gives an error
    let guessMe = 5;
    console.log("guessMe: "+guessMe);// C: guessMe is 5
}
// D: guessMe is undeclared
```
Comment B may surprise you again. Even though let guessMe is hoisted similarly to var, its value is not initialized to undefined. Retrieving uninitialized values throws a JavaScript error for the “let” and “const”.

## What was the Problem with Var?
There's a weakness that comes with  var, let’s look into the below example.
```javascript
    var name = "Harry";
    var isAlive = true;

    if (isAlive) {
        var name = "Alien"
    }

    cosole.log(name); // "Alien"
```
If we look into the above example the “var” keyword is only functional scoped keyword so in the above example the “name” variable inside the  if-block is redefined this becomes problem to get track of the variable changes through the entire code for the non-functional blocks, so “let” came into rescue.

## let can be updated but not re-declared.
Just like var,  a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope. So while this will work:
```javascript
// Can be re-declared within its scope.
let greeting = "say Hi";
greeting = "say Hello instead";

// Re-initializing the variable throws error within the same scope.
let greeting = "say Hi";
let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
```
However, if the same variable is defined in different scopes, there will be no error:
```javascript
let greeting = "say Hi";
if (true) {
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"
```
Why is there no error in the above code? This is because both instances are treated as different variables since they have different scopes.

## Hoisting with let:
Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.

# Constants:

## const declarations are block scoped:
Like let declarations, const declarations can only be accessed within the block they were declared.

## const cannot be updated or re-declared:
This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:

```javascript
const greeting = "say Hi";
greeting = "say Hello instead";// error: Assignment to constant variable.

const greeting = "say Hi";
const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared
```

Declarations with const are block scoped, they have to be initialized, and their value cannot be changed after initialization.
```javascript
const PI = 3.1415;
PI = 3.14;
```
Not initializing a constant also throws an error:
```javascript
const PI; //SyntaxError: Missing initializer in const declaration
````
Redeclaring another variable with the same name in the same scope will throw an error.

## Const Declarations will differ when it comes to objects:
While a const object cannot be updated, the properties of this objects can be updated. Therefore, if we declare a const object as this:

```javascript
const person = {name: "Harry", age: 24}

// cannot do this
person = {name: "Krish", gender: "male"}

// Can do this
person.name = "Krish"
````

## Hoisting of const
Just like let, const declarations are hoisted to the top but are not initialized.

## 🔑 Key Takeaways:
- `var` declarations are globally scoped or function scoped while `let` and `const` are block scoped.
- `var` variables can be updated and re-declared within its scope; `let` variables can be updated but not re-declared; `const` variables can neither be updated nor re-declared.
- They are all hoisted to the top of their scope. But while `var` variables are initialized with `undefined`, `let` and `const` variables are not initialized.
- While `var` and `let` can be declared without being initialized, `const` must be initialized during declaration.
- Always declare and initialize all your variables at the beginning of your scope to avoid the temporal dead zone.


## What Exactly Is a Temporal Dead Zone in JavaScript?
A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value
. A block is a pair of braces ( {...} ) used to group multiple statements.
```javascript
{
console.log(name); // temperory dead zone(TDZ)
let name = "David";
console.log(name);
}
```
