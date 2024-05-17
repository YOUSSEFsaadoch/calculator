let display = document.getElementById('display');
let historyList = document.getElementById('history-list');
let keys = document.querySelectorAll('.keys button');

let history = [];
let currentExpression = '';

keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        let keyValue = e.target.textContent;
        switch (keyValue) {
            case 'AC':
                currentExpression = '';
                history = [];
                display.value = '';
                historyList.innerHTML = '';
                break;
            case 'CE':
                currentExpression = currentExpression.slice(0, -1);
                display.value = currentExpression;
                break;
            case '=':
                try {
                    let result = eval(currentExpression);
                    history.push(`${currentExpression} = ${result}`);
                    historyList.innerHTML += `<p>${history[history.length - 1]}</p>`;
                    currentExpression = result.toString();
                    display.value = currentExpression;
                } catch (error) {
                    display.value = 'Error';
                }
                break;
            default:
                if (keyValue === '.' && currentExpression.includes('.')) {
                    break;
                }
                currentExpression += keyValue;
                display.value = currentExpression;
        }
    });
});