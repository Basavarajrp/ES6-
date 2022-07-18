# What is "this" in JavaScript
In JavaScript "this" refers to an object, also it depends on what context it is getting called and getting executed, "this" in JavaScript varies based on the context of execution.

### There are different type of context in JavaScript:
- Global Context.
- Execution Context.


Let's understand these in more effective way by some code followed by the explinations.
### Example 1:
```javascript
const Person1 = {
    name: "Rajesh",
    lastName: "Kumar",
    greeting: function () {
        console.log(`Hello ${this.name} ${this.lastName}.`)
    }
}

Person1.greeting() // Hello Rajesh Kumar.
```
If we look into the above example we can see that "this" keyword is refering to the current object  properties.

### Example 2: 

```javascript
const Person2 = {
    name: "Rajesh",
    lastName: "Kumar",
    greeting: function () {
        console.log(`Hello ${this.name} ${this.lastName}.`)
    }
}

// Taking the reference of the greeting function from the Person object.
const personObject = Person2.greeting;

// Executing the greeting function outside the scope of the Person object.
personObject() // Hello undefined undefined
```
### :roll_eyes: What's happening in the 2nd example and why "undefined"?

Let's revist the above definition that we defined at the begining, and let's co-relate them with following points.
- We know that "this" keyword behaves differently based upon the context it is getting executed.
- Also there is a context named as "Global" which includes all variables, objects, and references that are not contained within a customized scope like Person object. That means what ever varaibles we define at the global level it holds them.

By seeing the above two points, we came to know there is a global context that contains the variables, references that are declared outside the scope({}). So in our code we have nothing outside the Person object and the value of the Global object now is "undefined". 

Also we are taking the reference of the greeting function from the Person object and executing it outside the scope of Person object, this means now our "this" is refering to global object which is undefined. 

By this we can see that execution context kicks in and checks the context of function call or its execution scope which is global in our case and gives the respective value for the "this" keyword, so we are getting undefined in our 2nd example.

In the 1st example we were not taking the reference of the greeting function outside the Person object, instead we were directly calling the function with in the Person object so we got the respective "name" and "lastName".


# What is the use of Call, Apply and Bind
Now we understood how "this" keyword behaves differently when it comes to execution context.

Let's look into the below example and understand how the call, apply and bind helps us to use "this" keyword irrespective of the objects defined, and make use of single function and bind that fuction to different objects.

```javascript
// Person object.
const Person = {
    name: "Rajesh",
    lastName: "Kumar",
    greeting: function () {
        console.log(`Hello ${this.name} ${this.lastName}.`)
    }
}

// Customer object.
const Customer = {
    name: "Ramesh",
    lastName: "Kumar",
    greeting: function () {
        console.log(`Hello ${this.name} ${this.lastName}.`)
    }
}
```
If we see the above code we have two different objects defined and one function in them, but function is doing the same thing in both objects.

As per the standards we should not repeat the same code(DRY principal) we also have two different objects with different scope, then how to solve this issue and avoid the code repetation. There comes call, apply and bind methods.

```javascript
// Person object.
const Person = {
    name: "Rajesh",
    lastName: "Kumar",
    greeting: function () {
        console.log(`Hello ${this.name} ${this.lastName}.`)
    }
}

// Customer object.
const Customer = {
    name: "Ramesh",
    lastName: "Kumar"
}

Person.greeting.call(Customer); // Hello Ramesh Kumar!
Person.greeting.apply(Customer); // Hello Ramesh Kumar!
```

In these examaple we used the greeting function from the Person object for the Customer object without repeting the code.

We have borrowed the greeting function from Person object and passed the Customer as the current object instead of the Person object within the call() method. When the above code gets executed the value of "this" will point to the Customer object instead of the Person object.

## :raised_eyebrow: Hold on, then what is the difference between call and apply?


# What is the difference between Call, Apply and Bind in JavaScript
# Advantage of using Call, Apply and Bind in JavaScript