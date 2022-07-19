# Handling default parameters in ES5
Everyone knows about the functions and its use cases, during the ES5 we still defined functions with input parameters to it. 

:worried: When calling the functions what if we have not passed the input paramters, how this was handled.

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
# Accessing the early paramters
# Effect of scope on default paramters
# Objects and Arrays as default paramters
