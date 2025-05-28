interface User {
    firstName: string;
    lastName: string;
    middleName?: string; 
    age?: number;
    }


function greetUser(user: User): string {
    return `Hello, ${user.firstName}  ${user.lastName}!`;
}

function logUserDetails(user: User): string | number{
    return `User: ${user.firstName} ${user.middleName} ${user.lastName}, Age: ${user.age}`;
}

let user1 = {
    firstName: "John",
    middleName: "Doe",
    lastName: "Francis",
    age: 30
};

let user2 = {
    firstName: "JV",
    lastName: "Logesh",
};

console.log(greetUser(user2));
console.log(logUserDetails(user1));