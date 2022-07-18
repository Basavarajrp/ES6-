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

