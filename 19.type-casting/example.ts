interface User {
    name: string;
    age: number;
}

const jsonData= '{ "name": "John", "age": 30}'

const user: User = JSON.parse(jsonData) as User;
console.log(`Name : ${user.name}, Age : ${user.age}, Email: ${user.email}`); // John