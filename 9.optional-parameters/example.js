var concat = function (a, b, c) {
    if (b === undefined && c === undefined) {
        return a;
    }
    else if (c === undefined) {
        return a + b;
    }
    else {
        return a + b + c;
    }
};
console.log(concat("Hello")); // Output: Hello
console.log(concat("Hello", "World")); // Output: HelloWorld
