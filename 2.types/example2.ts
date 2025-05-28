var myString: string = "test"
var myNumber: number = 42;
var myBoolean: boolean = true;
var myArray: string[] = ["one", "two", "three"];
var myObject: { name: string, age: number} = {
    name: "Alice",
    age: 30
}
var myFunction: (x: number, y: number) => number = function(x, y) {
    return x + y;
}
function myVoidFunction(): void {
    console.log("This function does not return anything.");
}