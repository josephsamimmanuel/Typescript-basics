function greetUser(user) {
    return "Hello, ".concat(user.firstName, "  ").concat(user.lastName, "!");
}
function logUserDetails(user) {
    return "User: ".concat(user.firstName, " ").concat(user.middleName, " ").concat(user.lastName, ", Age: ").concat(user.age);
}
var user1 = {
    firstName: "John",
    middleName: "Doe",
    lastName: "Francis",
    age: 30
};
var user2 = {
    firstName: "JV",
    lastName: "Logesh",
};
console.log(greetUser(user2));
console.log(logUserDetails(user1));
