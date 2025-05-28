// with inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello, ".concat(this.firstName, " ").concat(this.lastName, "!");
    };
    Person.prototype.getAge = function () {
        var _a;
        return (_a = this.age) !== null && _a !== void 0 ? _a : 0;
    };
    return Person;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this;
    }
    return User;
}(Person));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, age, role) {
        if (role === void 0) { role = "admin"; }
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.role = role;
        return _this;
    }
    Admin.prototype.greet = function () {
        return "Hello, ".concat(this.firstName, " ").concat(this.lastName, ", your role is ").concat(this.role, "!");
    };
    Admin.prototype.getRole = function () {
        return this.role;
    };
    Admin.prototype.manageUsers = function () {
        return "Managing users as ".concat(this.role, ".");
    };
    return Admin;
}(User));
// create instances of User and Admin
var userA = new User("John", "Doe", 30);
var userB = new User("JV", "Logesh", 25);
var adminA = new Admin("Alice", "Smith", 28, "superadmin");
var adminB = new Admin("Bob", "Johnson", 35);
console.log(userA.greet()); // Hello, John Doe!
console.log(userB.getAge()); // 25
console.log(adminA.greet()); // Hello, Alice Smith, your role is admin!
console.log(adminB.manageUsers()); // Managing users as admin.
console.log(adminA.getRole()); // superadmin
console.log(adminB.getRole()); // admin
console.log(adminA.getAge()); // 28
console.log(adminB.getAge()); // 35
