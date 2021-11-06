const outputDisplay = document.querySelector('.screen');
const numButtons = document.querySelectorAll(`[data-func*="num"]`);
const operatorButtons = document.querySelectorAll(`[data-func*="operator"]`);
const evalBtn = document.querySelector(`[data-func*="eval"]`);
const delBtn = document.querySelector(`[data-func*="delete"]`);
const clearBtn = document.querySelector(`[data-func*="clear"]`);

let displayValue = outputDisplay.innerText;
let operand1 = '', operand2 = '', isSecondOperand = false;
let operation = null;

numButtons.forEach((numBtn) => {
    numBtn.addEventListener('click', appendNumber);
});

operatorButtons.forEach((opBtn) => {
    opBtn.onclick = (e) => {
        setOperand();
        operand1 = eval(operand1, operand2, operation);
        isSecondOperand = true;
        display('0');
        operation = e.target.textContent;
    }
})

clearBtn.onclick = () => clear();
delBtn.onclick = () => del();

evalBtn.addEventListener('click', equals);

function equals(){
    setOperand();
    let answer = eval(operand1, operand2, operation);
    console.log(answer);
    display(answer);
    isSecondOperand = false;
    operand1 = '';
    operand2 = '';
    operation = null; 
}

function appendNumber(e) {
    let num = e.target.textContent
    console.log(num);
    if (displayValue == 0) {
        display(num)
    } else {
        value = displayValue + num;
        display(value);
    }
}

function display(value) {
    outputDisplay.textContent = value;
    displayValue = value;
    outputDisplay.animate([
        { transform: 'scale(1.01)' },
        { transform: 'scale(1.0)' }
    ], {
        duration: 100,
        transition: 'transform 150ms ease-in-out'
    })
}

function clear() {
    display(0);
}

function del() {
    if (displayValue != 0) {
        let value = displayValue.slice(0, -1)
        value ? display(value) : clear(0);
    }
}

function setOperand(){
    if(!isSecondOperand){
        operand1 = displayValue;
    }
    else if(isSecondOperand){
        if(displayValue == '0'){
            operand2 = '';
        }
        else operand2 = displayValue;
    }
}

function eval(op1, op2, opn) {
    op1 = parseFloat(op1);
    op2 = parseFloat(op2);
    if (op2 === '' || opn === null) return op1;
    switch (opn) {
        case '+':
            return add(op1, op2).toString();
        case '−':
            return subtract(op1, op2).toString();
        case '×':
            return multiply(op1, op2).toString();
        case '÷':
            return divide(op1, op2).toString();
        default:
            return;           
    }
}

function add(op1, op2) { return op1 + op2 }
function subtract(op1, op2) { return op1 - op2 }
function multiply(op1, op2) { return op1 * op2 }
function divide(op1, op2) { 
    if (op2 === 0) console.log("don't crash pls.");
    return op2 != 0 ? (op1 / op2) : 0
}