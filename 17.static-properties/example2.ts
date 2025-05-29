class User {
    name: string;
    static totalUsers: number = 0;

    constructor(name: string) {
        this.name = name;
        User.totalUsers++
    }

    getName(): string {
        return this.name;
    }

    static getTotalUser() {
        return User.totalUsers
    }
}

function createUser(name: string): User {
    return new User(name);
}

const user1 = createUser("Alice");
const user2 = createUser("Bob");

console.log(user1.getName()); // Alice
console.log(user2.getName()); // Bob
console.log(`Total users created: ${User.getTotalUser()}`); // Total users created: 2