function logmethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} with arguments:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`Result of ${propertyKey}:`, result);
        return result;
    };

    return descriptor;
}

class Calculator {
    @logmethod
    add(x: number, y: number): number {
        return x + y;
    }

    @logmethod
    subtract(x: number, y: number): number {
        return x - y;
    }
}

const calculator = new Calculator();
console.log(calculator.add(5, 3));        // Output: Calling add with arguments: [ 5, 3 ]
console.log(calculator.subtract(10, 4)); // Output: Calling subtract with arguments: [ 10, 4 ]