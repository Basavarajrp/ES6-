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

// Executing the greeting function outsiide the scope of the Person object.
personObject() // Hello undefined undefined


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

// call() method
Person.greeting.call(Customer); // Hello Ramesh Kumar!

//apply() method
Person.greeting.apply(Customer); // Hello Ramesh Kumar!

// bind() method
const greet = Person.greeting.bind(Customer)
greet() // Hello Ramesh Kumar!


// Reusable function
const greeting = function (place) {
    console.log(`Hello ${this.name} ${this.lastName} welcome to ${place}`);
}

// Person object
const Person = {
    name: "Rakesh",
    lastName: "Kumar"
}

// Customer object
const Customer = {
    name: "Rajesh",
    lastName: "Kumar"
}

// apply() method
greeting.apply(Customer, ['Mangalore']); // Hello Rakesh Kumar welcome to Bangalore

// call() method
greeting.call(Person, 'Bangalore'); // Hello Rakesh Kumar welcome to Bangalore

