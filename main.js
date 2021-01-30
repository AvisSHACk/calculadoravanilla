let screen = document.querySelector('.calculadora__screen'),
    operation = '';
const writeScreen = (value) => {
    screen.value += value;

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
}

document.querySelector('.calculadora__buttons').addEventListener('click', e => {
    if(e.target.textContent != '='){
        writeScreen(e.target.textContent);
    } else {
        runOperation(operation);
    }
    //
})
