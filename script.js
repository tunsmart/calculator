const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const multiply = function(a,b) {
  return a * b;
};

const divide = function(a,b) {
    return a / b;
  };

const operate = function(operator, a, b) {
    if (operator == '+') {
        return add(a,b);
    } else if (operator == '-') {
        return subtract(a,b);
    } else if (operator == '*') {
        return multiply(a,b);
    } else {
        return divide(a,b);
    }
}

const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits');
const clear = document.querySelector('.clear');
const operators = document.querySelectorAll('.operators');
const equal = document.querySelector('.equal');

let displayValue1 = '';
let displayValue2 = '';
display.textContent = '';
let currentOperator = '';
let result = 0;

clear.addEventListener('click', clearValues);
equal.addEventListener('click', compute);
digits.forEach((digit) => digit.addEventListener('click', displayAndStore));
operators.forEach((operator) => operator.addEventListener('click', operation));

function clearValues() {
    displayValue1 = '';
    displayValue2 = '';
    display.textContent = '';
    result = 0;
}

function compute() {
    if (currentOperator.length != 0 && displayValue1.length != 0 && displayValue2.length != 0) {
        result = operate(currentOperator, +displayValue1, +displayValue2);
        display.textContent = result;
        displayValue1 = result;
        displayValue2 = '';
        currentOperator = '';
        return;
    } else {
        return;
    }
}

function displayAndStore() {
    if (currentOperator.length != 0 && displayValue2.length == 0) {
        displayValue2 = this.id;
        display.textContent = this.id;
        return;
    } else if (currentOperator.length != 0 && displayValue2.length != 0) {
        displayValue2 += this.id;
        display.textContent += this.id;
        return;
    } else if (result != 0) {
        displayValue1 = result;
        display.textContent = result;
        return;
    } else {
        display.textContent += this.id;
        displayValue1 += this.id;
        return;
    }
}

function operation() {
    if (currentOperator.length != 0 && displayValue1.length != 0 && displayValue2.length != 0) {
        result = operate(currentOperator, parseInt(displayValue1), parseInt(displayValue2));
        display.textContent = result;
        displayValue1 = result;
        displayValue2 = '';
        currentOperator = this.id;
        return;
    } else {
        currentOperator = this.id
        return;
    }
}



