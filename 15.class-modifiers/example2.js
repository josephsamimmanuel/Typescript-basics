var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    // Getter methods to access private properties
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    // Setter methods to modify private properties
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setAge = function (age) {
        if (age < 0) {
            throw new Error("Age cannot be negative");
        }
        else {
            this.age = age;
        }
    };
    return User;
}());
var user = new User("Alice", 30);
console.log(user.getName()); // Output: Alice
console.log(user.getAge()); // Output: 30
user.setName("Bob"); // Modifying the name property
console.log(user.getName()); // Output: Bob
user.setAge(-10); // Modifying the age property
console.log(user.getAge()); // Output: 31
