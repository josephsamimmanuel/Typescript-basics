var complexType = { name: "myName", id: 123 };
complexType = { id: 456, name: "anotherName" };
complexType = { id : 456 };
complexType = { name: "anotherName" };
complexType = { address: "123 Main St" };
complexType = { name: "yetAnotherName", id: 789, address: "456 Elm St" };
console.log(complexType);

// The above code demonstrates duck typing in TypeScript.
// Duck typing is a concept where the type of an object is determined by its properties and methods rather than its explicit type declaration.

