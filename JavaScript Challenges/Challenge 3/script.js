function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(6, 8));


function compute(num1, num2, operation) {
    function add(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }

    function multiply(x, y) {
        return x * y;
    }

    function divide(x, y) {
        if (y !== 0) {
            return x / y;
        } else {
            return "Cannot divide by zero";
        }
    }

    let result;

    if (operation === "add") {
        result = add(num1, num2);
    } else if (operation === "subtract") {
        result = subtract(num1, num2);
    } else if (operation === "multiply") {
        result = multiply(num1, num2);
    } else if (operation === "divide") {
        result = divide(num1, num2);
    } else {
        result = "Invalid operation";
    }

    return result;
}


const num1 = 8;
const num2 = 7;
const operation = "add";
const result = compute(num1, num2, operation);
console.log(result);




// Global scope
const globalVar = 42;

const squareNumber = (number) => {
    // Trying to log the value of globalVar inside the function
    console.log("Value of globalVar inside squareNumber:", globalVar);

    // Local scope
    const localVar = "Local variable";

    return number * number;
};

// Logging globalVar from outside the function
console.log("Value of globalVar in global scope:", globalVar);

// Attempting to log localVar from outside the function (will produce an error)
// This line will result in: Uncaught ReferenceError: localVar is not defined
// console.log("Value of localVar in global scope:", localVar);


for (let i = 1; i <= 10; i++) {
    console.log(i);

}
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}
let k = 1;
do {
    if (k % 2 === 0) {
        console.log(k);
    }
    k++;
} while (k <= 10);

