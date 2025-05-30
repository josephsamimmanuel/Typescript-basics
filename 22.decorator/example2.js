var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logmethod(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Calling ".concat(propertyKey, " with arguments:"), args);
        var result = originalMethod.apply(this, args);
        console.log("Result of ".concat(propertyKey, ":"), result);
        return result;
    };
    return descriptor;
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    __decorate([
        logmethod
    ], Calculator.prototype, "add", null);
    __decorate([
        logmethod
    ], Calculator.prototype, "subtract", null);
    return Calculator;
}());
var calculator = new Calculator();
console.log(calculator.add(5, 3)); // Output: Calling add with arguments: [ 5, 3 ]
console.log(calculator.subtract(10, 4)); // Output: Calling subtract with arguments: [ 10, 4 ]
