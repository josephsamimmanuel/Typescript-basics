class User {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Getter methods to access private properties
    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    // Setter methods to modify private properties
    public setName(name: string): void {
        this.name = name;
    }

    public setAge(age: number): void {
        if (age < 0) {
            throw new Error("Age cannot be negative");
        }else{
        this.age = age;
        }
    }
}

const user = new User("Alice", 30);

console.log(user.getName());    // Output: Alice
console.log(user.getAge());     // Output: 30

user.setName("Bob");            // Modifying the name property
console.log(user.getName());    // Output: Bob

user.setAge(-10);                // Modifying the age property
console.log(user.getAge());     // Output: 31