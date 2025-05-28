var test:string = "This is a test string";
test = 123;                                 // This will cause a type error in TypeScript

// The above line will throw an error because '123' is not a string
// To fix the error, we should assign a string value

test = "123";                               // This is correct, now 'test' is a string again

test = function() { return "This is a function"; }; // This will cause a type error in TypeScript
// The above line will throw an error because the function is not a string
// To fix the error, we should assign a string value
test = "This is a function";                // This is correct, now 'test' is a string again