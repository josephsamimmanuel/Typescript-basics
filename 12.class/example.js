// without class
var userA = { firstName: "John", lastName: "Doe", age: 30 };
var userB = { firstName: "JV", lastName: "Logesh", age: 25 };
function greetUser(user) {
    return "Hello, ".concat(user.firstName, " ").concat(user.lastName, "!");
}
function getUserAge(user) {
    var _a;
    return (_a = user.age) !== null && _a !== void 0 ? _a : 0;
}
console.log(greetUser(userA));
console.log(getUserAge(userB));
