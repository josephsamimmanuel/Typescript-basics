interface Employee {
    name: string;
    id: number;
}

interface Admin {
    isAmdin: boolean;
    accessLevel: number;
}

type AdminEmployee = Employee & Admin;

let adminEmployee : AdminEmployee = {
    id: 123,
    name: "John Doe",
    isAmdin: true,
    accessLevel: 5
};

console.log(adminEmployee);