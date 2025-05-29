var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        console.log("Calling add method with arguments: ".concat(x, ", ").concat(y));
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        console.log("Calling subtract method with arguments: ".concat(x, ", ").concat(y));
        return x - y;
    };
    return Calculator;
}());
var calculator = new Calculator();
console.log(calculator.add(5, 3)); // Output: Calling add method with arguments: 5, 3
