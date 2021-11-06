const outputDisplay = document.querySelector('.screen');
const numButtons = document.querySelectorAll(`[data-func*="num"]`);
const operatorButtons = document.querySelectorAll(`[data-func*="operator"]`);
const evalBtn = document.querySelector(`[data-func*="eval"]`);
const delBtn = document.querySelector(`[data-func*="delete"]`);
const clearBtn = document.querySelector(`[data-func*="clear"]`);
let displayValue = Number(outputDisplay.innerText);
let operand1 = '', operand2 = '';

const display = (value) => {
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

const clear = () => {
    display(0);
}

const appendNumber = (e) => {
    let num = Number(e.target.textContent)
    console.log(num);
    if (displayValue === 0) {
        display(num)
    } else {
        value = (displayValue * 10) + num;
        display(value);
    }
}

numButtons.forEach((numBtn) => {
    numBtn.addEventListener('click', appendNumber);
});

clearBtn.onclick = () => clear();