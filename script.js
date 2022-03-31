const calcTwo = document.querySelector('.calc-2');
const updScreen = (number) => {
    calcTwo.value = number;
};

const numbers = document.querySelectorAll(".number");

let prevNumber = '';
let calcOperator = '';
let currNumber = '0';

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inpNumber(event.target.value);
        updScreen(currNumber);
    });
});

const inpNumber = (number) => {
    if (currNumber === '0') {
        currNumber = number;
    } else {
        currNumber += number;
    }
};

const operators = document.querySelectorAll(".operator");
const inpOperator = (operator) => {
    if (calcOperator === '') {
        prevNumber = currNumber;
    }
    calcOperator = operator;
    currNumber = "0";
};

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inpOperator(event.target.value);
        updScreen(calcOperator);
    })
});

const equalSign = document.querySelector('.equal');
const calculate = () => {
    let result = '';
    switch (calcOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currNumber);
            break;
        case "-":
            result = prevNumber - currNumber;
            break;
        case "*":
            result = prevNumber * currNumber;
            break;
        case "/":
            result = prevNumber / currNumber;
            break;
        default:
            return;
    };
    currNumber = result;
    calcOperator = '';
};

equalSign.addEventListener('click', () => {
    calculate()
    updScreen(currNumber);
});

const clearAll = () => {
    prevNumber = '';
    calcOperator = '';
    currNumber = '0';
};

const clrBtn = document.querySelector('.clear');
clrBtn.addEventListener('click', () => {
    clearAll()
    updScreen(currNumber);
});

const decimal = document.querySelector('.decimal');
inpDecimal = (dot) => {
    if (currNumber.includes('.')) {
        return;
    }
    currNumber += dot;
};

decimal.addEventListener('click', (event) => {
    inpDecimal(event.target.value);
    updScreen(currNumber);
});

inpPercentage = (percentage) => {
    if (currNumber.includes('&')) {
        return;
    }
    currNumber = currNumber / 100;
};

const percentage = document.querySelector('.percentage');
percentage.addEventListener('click', (event) => {
    inpPercentage(event.target.value);
    updScreen(currNumber);
});