class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    static isAdult(age: number): boolean {
        return age >= 18;
    }
}

// const user = new User("Alice", 25);
// console.log(user.isAdult()); // Alice

console.log(User.isAdult(20)); // true