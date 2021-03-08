let clickedBtns = document.querySelectorAll('.calc-buttons');
clickedBtns.forEach(btn => btn.addEventListener('click', function(event) {
    calculate(event.target.innerHTML) }, false));

let currentNum = "0";
let currentResult = 0;
let prevOperator = null;
const calcScreen = document.querySelector('.calculate-numbers');

function calculate(button) {
    console.log("You clicked: " + button);
    if(isNaN(button)) {
        handleSymbol(button);
    } else {
        handleNumber(button);
    }
    refreshScreen();
}

function handleSymbol(button) {
    console.log('It is a symbol: ' + button);
    switch(button) {
        case "C":
            currentNum = "0";
            prevOperator = null;
            currentResult = 0;
            console.log("Number deleted!");
            break;
        case "=":
            console.log("equal!");
            if (prevOperator === null) {
                return;
            }
            arithmeticOperations(parseInt(currentNum));
            currentNum = "" + currentResult;
            prevOperator = null;
            currentResult = 0;
            break;
        default: 
        handleMath(button);
        break;
    }
}

function handleNumber(button) {
    console.log('It is a number');
    if(currentNum === "0") {
        currentNum = button;
        console.log(currentNum)
    } else {
        currentNum += button;
    }
}

function handleMath(button) {
    const internalNum = parseInt(currentNum);
    if (currentResult === 0) {
        currentResult = internalNum;
    } else {
        arithmeticOperations(internalNum);
    }
    prevOperator = button;
    currentNum = "0";
}

function arithmeticOperations(internalNum) {
    if (prevOperator === "+") {
        currentResult += internalNum;
    }
    else if (prevOperator === "-") {
        currentResult -= internalNum;
    }
    else if (prevOperator === "/") {
        currentResult /= internalNum;
    }
    else if (prevOperator === "*") {
        currentResult *= internalNum;
    }
}

function refreshScreen() {
    calcScreen.value = currentNum;
}