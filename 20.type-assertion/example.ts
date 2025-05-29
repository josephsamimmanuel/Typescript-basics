const element = document.getElementById("myElement") as HTMLInputElement

element.value = "Hello, World!"
// TypeScript will throw an error if you try to access 'value' on an HTMLElement    

element.name = "myInput"
// This will not throw an error because 'element' is asserted to be an HTMLInputElement