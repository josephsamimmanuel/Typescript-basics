// class User {
//     firstName: string;
//     lastName: string;
//     age?: number;
//     constructor(firstName: string, lastName: string, age?: number) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     greet(): string {
//         return `Hello, ${this.firstName} ${this.lastName}!`;
//     }
//     getAge(): number{
//         return this.age ?? 0;
//     }
// }
// class Admin {
//     firstName: string;
//     lastName: string;
//     age?: number;
//     role: string;
//     constructor(firstName: string, lastName: string, age?: number, role: string = "admin") {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.role = role;
//     }
//     greet(): string {
//         return `Hello, ${this.firstName} ${this.lastName}, your role is ${this.role}!`;
//     }
//     getAge(): number {
//         return this.age ?? 0;
//     }
//     manageUsers(): string {
//         return `${this.firstName} ${this.lastName} is managing users for ${this.role}.`;
//     }
// }
// // create instances of User and Admin
// let userA = new User("John", "Doe", 30);
// let userB = new User("JV", "Logesh", 25);
// let adminA = new Admin("Alice", "Smith", 28, "superadmin");
// let adminB = new Admin("Bob", "Johnson", 35);
// console.log(userA.greet()); // Hello, John Doe!
// console.log(userB.getAge()); // 25
// console.log(adminA.greet()); // Hello, Alice Smith, your role is superadmin!
// console.log(adminB.manageUsers()); // Bob Johnson is managing users for admin.
