document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value;

            if (value === 'C') {
                currentInput = '';
                operator = '';
                previousInput = '';
                display.textContent = '';
            } else if (value === '=') {
                if (currentInput && previousInput && operator) {
                    currentInput = evaluate(previousInput, currentInput, operator);
                    display.textContent = currentInput;
                    operator = '';
                    previousInput = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    if (!operator) {
                        previousInput = currentInput;
                        currentInput = '';
                    }
                    operator = value;
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    const evaluate = (num1, num2, operator) => {
        const [n1, n2] = [parseFloat(num1), parseFloat(num2)];
        switch (operator) {
            case '+':
                return `${n1 + n2}`;
            case '-':
                return `${n1 - n2}`;
            case '*':
                return `${n1 * n2}`;
            case '/':
                return `${n1 / n2}`;
            default:
                return '';
        }
    };
});
