var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.isAdult = function (age) {
        return age >= 18;
    };
    return User;
}());
console.log(User.isAdult(20)); // true
