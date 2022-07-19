// THIS in JS:
const Person1 = {
    name: "Rajesh",
    lastName: "Kumar",
    greeting: function () {
        console.log(`Hello ${this.name} ${this.lastName}.`)
    }
}

Person1.greeting() // Hello Rajesh Kumar.

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


// CALL, APPLY AND BIND:
// Person object.
const Person3 = {
    name: "Rajesh",
    lastName: "Kumar",
    greeting: function () {
        console.log(`Hello ${this.name} ${this.lastName}.`)
    }
}

// Customer object.
const Customer3 = {
    name: "Ramesh",
    lastName: "Kumar"
}

// call() method
Person3.greeting.call(Customer3); // Hello Ramesh Kumar!

//apply() method
Person3.greeting.apply(Customer3); // Hello Ramesh Kumar!

// bind() method
const greet = Person3.greeting.bind(Customer3)
greet() // Hello Ramesh Kumar!



