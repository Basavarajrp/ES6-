# Handling default parameters in ES5
Everyone knows about the functions and its use cases, during the ES5 we have defined functions with input parameters to it. 

:worried: When calling the functions what if we have not passed the input paramters, and how this was handled.

Let's get into the code.
```Javascript
function add(num1, num2) {
    let num_1 = num1 || 1;
    let num_2 = num2 || 1;

    return num_1 + num_2
}

console.log(add()) // 2
console.log(add(2, 4)) // 6
```
If we look into the above example we can see the default paramters were handled with some other programmin technique, but popular shorthand for optional parameters in ES5 was the logical or(||) operator

If the first operand of a || expression is true, the second operand is not even evaluated. This phenomenon is called a logical shortcut.

So in our above example when we have not passed any default parameters to the function "num_1" and "num_2" was getting assigned with value 1, but when we passed the paramters to the functions "num_1" and "num_2" was getting assigned with actual passed values.

If we have a close look on the above example, we can see all the falsy( 0, ' ', false.) values are treaded in the same way. Let me break this in more easy way.

```Javascript
function add(num1, num2) {
    let num_1 = num1 || 1;
    let num_2 = num2 || 1;

    return num_1 + num_2
}

console.log(add(0, 4)) // instead of 4 we are getting 5 as the output.
```
If we see the above example when we passed two paramters one with 0 and other with 4, we should be getting the result as "0+4=4", instead of that we got the result as 5. This is because of the number 0 is considered as the falsy value in most of the programming languages so the "OR" logical shortcut was failing for the 1st operand which resulted in assigning the value 1 to "num_1" and the result was "1+4=5".

To handle this in more appropriate way we make use of the ES6 default parameters in JavaScript.


# ES6 default paramters
In the ES5 it was necessary to check the default paramter in the function body and then assign the appropriate values to the parameters, as we have already seen in the above examples.

## 	:question:What's new in ES6 to solve these problem?

We can assign the default values to the parameters while defining the function.

```javascript
function add(num1=1, num2=1) {
    return num1 + num2
}

console.log(add()) // 2
console.log(add(0, 4)) // 4
```
As we can see even after passing the 0(falsy) value as the functional argument we are getting proper result which is "0+4=4" in our case, which was not the case in the above examples. We don't need to do any chacks in the function body as we did earlier.


# Undefined v/s falsy values as default paramters
```javascript
function print(num=2) {
    console.log(num)
}

print(undefined) // 2 (still takes the default value.)
print(null) // returns null
```
From the above example we can say that even though if we set default parameter num to "undefined" still the default value 2 is considered, apart from  "undefined" if we pass any other falsy values like "null" and empty string default value is not considered.

# Evaluation of default parameters
All the default parameters are evaluated at the call time, so every time we call the function new object is created, unlike in python.
```JavaScript
function defaultParams (arr = []) {
    return arr
}

const res1 = defaultParams([1,2])
const res2 = defaultParams([3,4])

console.log(res1 === res2) // false
```

In the above example we can see that every time we call the function we get the new object, also if check the equality of two objects it gives the false as output.

# Accessing the early paramters
Default parameters that are defined inside the function are evaluated from left to right. 

The default parameters that are defined on the left side can be accessed by the parameters defined at the right side.

```javascript
function add(num1, num2, result = num1+num2){
    return result
}

console.log(add(4, 4)) // 8 
```

In the above example we can see that parameter result is making use of num1 and num2 for its caluculation, so it is possible to make use of early defined parameters.

These above method is also known as "Using Expression as Default Values".

# Effect of scope on default paramters
Scope is very important concept in the JavaScript, understanding how scope works will make our development easy in JavaScript. If you want to understand more about scopes in JavaScript refer my blog on scopes. [Scope in JavaScript](https://basavarajrp.hashnode.dev/scope-in-javascript)

When we define the function and call it , the scope is created for that particular function so that variables defined inside that functions cannot be accessed outside the function.

## :monocle_face: How the scope is created when we define the functions with default parameters.

When we have the function with default paramters then the second scope is created which will act as the parent scope to the function scope, so if we try to use the value to assign the default parameter we will get "undefined".

```javascript
function test(result = b){
    var b = 40;
    return result;
}

console.log(test()); // ReferenceError: b is not defined
```

In the above example we are trying to use variable "b" as the value to the default parameter "result" that is defined inside the function body, as we discussed that default paramter creates the parent scope for the function body, so it is throwing the reference error.

This is bit tricky to understand if we don't know what actually the scope is all about.

# Destructuring array and object as default parameters.
## :dizzy: Destructuring of array.

If the function is having one of its parameter as array/object, then we can also have the default parameters defined for them.

By assigning the empty array/object to destructured array/object, then we can make sure that even if the empty array/object is passed to the function the default values are considered.

Let's understand this by following code examples.

```javascript
function add([num1=4, num2=5] = []) {
    return num1 + num2;
}

console.log(add()) // 9
console.log(add([2,2])) // 4
```

## :dizzy: Destructuring of object.
```javascript
function add([num1=4, num2=5] = []) {
    return num1 + num2;
}

console.log(add()) // 9
console.log(add([2,2])) // 4
```
# Some cool trick to evaluate the deafault parameter.

We can also do validation on the default parameter by the following way.
```javascript
const validate = () => { throw new Error('Please enter the number.'); };

function print(num = validate()) {
    console.log(num);
}

print() // Error: Please enter the number.
print(5) // 5.
```
We can create the validations for the default parameters like the above example and perform some other operations with the validated result. 

I just wanted show that we can pass the external function to the default parameter not just only the values.
