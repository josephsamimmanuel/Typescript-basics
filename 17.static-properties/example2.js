var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        User.totalUsers++;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.getTotalUser = function () {
        return User.totalUsers;
    };
    User.totalUsers = 0;
    return User;
}());
function createUser(name) {
    return new User(name);
}
var user1 = createUser("Alice");
var user2 = createUser("Bob");
console.log(user1.getName()); // Alice
console.log(user2.getName()); // Bob
console.log("Total users created: ".concat(User.getTotalUser())); // Total users created: 2
