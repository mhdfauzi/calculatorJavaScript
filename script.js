const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value);
    })
})

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

numbers.forEach((number) =>{
    number.addEventListener("click", (event) =>{
        updateScreen(event.target.value);
    })
})

let prevNummber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNummber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
})

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNummber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNummber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNummber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNummber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result;
    calculationOperator = '';
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})

const clearAll = () => {
    prevNummber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}

const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', (event) => {
    Percentage(event.target.value);
    updateScreen(currentNumber);
})

const Percentage = () => {
    if (currentNumber === '0') {
        return;
    }
    currentNumber /= 100;
}