"use strict";
class Calculator {
    // Method for addition
    static add(a, b) {
        return a + b;
    }
    // Method for subtraction
    static subtract(a, b) {
        return a - b;
    }
    // Method for multiplication
    static multiply(a, b) {
        return a * b;
    }
    // Method for division with error handling for division by zero
    static divide(a, b) {
        if (b === 0) {
            return 'Error: Division by zero is not allowed';
        }
        return a / b;
    }
    // Method to handle invalid operation
    static calculate(a, b, operation) {
        switch (operation) {
            case 'add':
                return this.add(a, b);
            case 'subtract':
                return this.subtract(a, b);
            case 'multiply':
                return this.multiply(a, b);
            case 'divide':
                return this.divide(a, b);
            default:
                return 'Error: Invalid operation';
        }
    }
}
// Example Usage
const num1 = 10;
const num2 = 5;
console.log(Calculator.calculate(num1, num2, 'add')); // 15
console.log(Calculator.calculate(num1, num2, 'subtract')); // 5
console.log(Calculator.calculate(num1, num2, 'multiply')); // 50
console.log(Calculator.calculate(num1, num2, 'divide')); // 2
console.log(Calculator.calculate(num1, 0, 'divide')); // Error: Division by zero is not allowed
console.log(Calculator.calculate(num1, num2, 'modulus')); // Error: Invalid operation
