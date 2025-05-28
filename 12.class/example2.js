// with class
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "Hello, ".concat(this.firstName, " ").concat(this.lastName, "!");
    };
    User.prototype.getAge = function () {
        var _a;
        return (_a = this.age) !== null && _a !== void 0 ? _a : 0;
    };
    return User;
}());
// create instances of User
var userA = new User("John", "Doe", 30);
var userB = new User("JV", "Logesh", 25);
console.log(userA.greet()); // Hello, John Doe!
console.log(userB.getAge()); // Hello, JV Logesh!
