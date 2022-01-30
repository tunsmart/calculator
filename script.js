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
    if (b==0) {
        alert("Can't divide by Zero")
        return 0;
    } else return a/b;
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
const digits = document.querySelectorAll('.digit');
const clear = document.querySelector('.clear');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const dot = document.querySelector('.float');
const percent = document.querySelector('.percent');

let displayValue1 = '';
let displayValue2 = '';
display.textContent = '0';
let currentOperator = '';
let result = '';

clear.addEventListener('click', clearValues);
dot.addEventListener('click', addDot);
percent.addEventListener('click', getPercent);
equal.addEventListener('click', compute);
digits.forEach((digit) => digit.addEventListener('click', displayAndStore));
operators.forEach((operator) => operator.addEventListener('click', operation));

function clearValues() {
    displayValue1 = '';
    displayValue2 = '';
    display.textContent = '0';
    result = '';
}

function addDot() {
    if (displayValue1.length != 0 && currentOperator.length != 0 && displayValue2.search(/[\.]/g) == -1) {
        displayValue2 += this.id;
        display.textContent == displayValue1 ? display.textContent = this.id : display.textContent += this.id;
    } else if (displayValue1.search(/[\.]/g) == -1 && displayValue2.length == 0) {
        //checks if '.' is not present in displayvalue1 and that displayvalue2 is empty 
        displayValue1 += this.id;
        display.textContent += this.id;
    }
}

function getPercent() {
    if (displayValue1.length != 0 && currentOperator.length == 0) {
        display.textContent = parseFloat(displayValue1)/100;
        displayValue1 = parseFloat(displayValue1)/100;
    } else if (displayValue1.length != 0 && currentOperator.length != 0 && displayValue2.length != 0) {
        display.textContent = parseFloat(displayValue2)/100;
        displayValue2 = parseFloat(displayValue2)/100;
    }
}

function compute() {
    if (currentOperator.length != 0 && displayValue1.length != 0 && displayValue2.length != 0) {
        result = operate(currentOperator, +displayValue1, +displayValue2).toString();
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
        display.textContent == 0 ? display.textContent = this.id : display.textContent += this.id;
        return;
    } else if (result != 0) {
        displayValue1 = result;
        display.textContent = result;
        return;
    } else {
        display.textContent == 0 ? display.textContent = this.id : display.textContent += this.id;
        displayValue1 += this.id;
        return;
    }
}

function operation() {
    if (currentOperator.length != 0 && displayValue1.length != 0 && displayValue2.length != 0) {
        result = operate(currentOperator, parseFloat(displayValue1), parseFloat(displayValue2)).toString();
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