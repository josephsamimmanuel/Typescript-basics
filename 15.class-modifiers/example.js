var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user = new User("Alice", 30);
console.log(user.name); // Output: Alice
console.log(user.age); // Output: 30
