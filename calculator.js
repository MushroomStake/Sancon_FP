function appendToDisplay(value) {
    document.getElementsByName('display')[0].value += value;
}

function clearDisplay() {
    document.getElementsByName('display')[0].value = '';
}

function deleteLastCharacter() {
    var currentValue = document.getElementsByName('display')[0].value;
    document.getElementsByName('display')[0].value = currentValue.slice(0, -1);
}

function calculateResult() {
    document.getElementsByName('display')[0].value = eval(document.getElementsByName('display')[0].value);
}