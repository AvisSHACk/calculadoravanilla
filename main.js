let screen = document.querySelector('.calculadora__screen'),
    operation = '',
    inOperation = false;

const writeScreen = (value) => {
    inOperation = false;
    inOperation ? screen.value = value : screen.value += value;

    if(value == '+' ||
        value == '-' ||
        value == '*' ||
        value == '/') {

        operation = value;
    }

}

const runOperation = (operation) => {
    let numbers;
    switch (operation){
        case '+': 
            numbers = screen.value.split('+');
            screen.value = Number(numbers[0]) + Number(numbers[1])
            break;
        case '-': 
            numbers = screen.value.split('-');
            screen.value = Number(numbers[0]) - Number(numbers[1])
            break;
        case '*': 
            numbers = screen.value.split('*');
            screen.value = Number(numbers[0]) * Number(numbers[1])
            break;
        case '/': 
            numbers = screen.value.split('/');
            screen.value = Number(numbers[0]) / Number(numbers[1])
            break;
        default:
            break;
    }

    inOperation = true;
}

document.querySelector('.calculadora__buttons').addEventListener('click', e => {
    if(e.target.textContent != '='){
        writeScreen(e.target.textContent);
    } else {
        runOperation(operation);
    }
})
