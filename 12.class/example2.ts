// with class

// class User {
//     firstName: string;
//     lastName: string;
//     age: number | undefined;

//     constructor(firstName: string, lastName: string, age?: number) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age; 
//     }

//     greet(): string {
//         return `Hello, ${this.firstName} ${this.lastName}!`;
//     }

//     getAge(): number {
//         return this.age ?? 0;
//     }
// }

// create instances of User

let userA = new User("John", "Doe", 30);
let userB = new User("JV", "Logesh", 25);

console.log(userA.greet()); // Hello, John Doe!
console.log(userB.getAge()); // 25!