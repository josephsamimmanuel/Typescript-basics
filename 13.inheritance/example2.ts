// with inheritance

class Person{
    firstName: string;
    lastName: string;
    age?: number;

    constructor(firstName: string, lastName: string, age?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet(): string {
        return `Hello, ${this.firstName} ${this.lastName}!`;
    }

    getAge(): number {
        return this.age ?? 0;
    }
}

class User extends Person {
    constructor(firstName: string, lastName: string, age?: number) {
        super(firstName, lastName, age);
    }
}

class Admin extends User {
    role: string;
    constructor(firstName: string, lastName: string, age?: number, role: string = "admin") {
        super(firstName, lastName, age);
        this.role = role;
    }

    greet(): string {
        return `Hello, ${this.firstName} ${this.lastName}, your role is ${this.role}!`;
    }

    getRole(): string {
        return this.role;
    }

    manageUsers(): string {
        return `Managing users as ${this.role}.`;
    }
}

// create instances of User and Admin
let userA = new User("John", "Doe", 30);
let userB = new User("JV", "Logesh", 25);
let adminA = new Admin("Alice", "Smith", 28, "superadmin");
let adminB = new Admin("Bob", "Johnson", 35);

console.log(userA.greet()); // Hello, John Doe!
console.log(userB.getAge()); // 25
console.log(adminA.greet()); // Hello, Alice Smith, your role is admin!
console.log(adminB.manageUsers()); // Managing users as admin.
console.log(adminA.getRole()); // superadmin
console.log(adminB.getRole()); // admin
console.log(adminA.getAge()); // 28
console.log(adminB.getAge()); // 35