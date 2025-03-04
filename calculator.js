let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1) || '0';
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number.toString();
    } else {
        displayValue += number.toString();
    }
    updateDisplay();
}

function appendOperator(operator) {
    const lastChar = displayValue.slice(-1);
    if ('+-*/'.includes(lastChar)) {
        displayValue = displayValue.slice(0, -1) + operator;
    } else {
        displayValue += operator;
    }
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}
