const displayValue = document.getElementsByClassName("display-value")[0];
const numButtons = document.getElementsByClassName("num");
const clearButton = document.getElementsByClassName("clear")[0];
const negationButton = document.getElementsByClassName("negation")[0];
const operatorButtons = document.getElementsByClassName("operator");
const equalsButton = document.getElementsByClassName("equals")[0];
var operator = "";
var firstValue = 0;
var secondValue = 0;
clearButton.addEventListener('click', () => {
    displayValue.innerHTML= 0;
    operator = "";
    firstValue = 0;
    secondValue = 0;
});

negationButton.addEventListener('click', () => displayValue.innerHTML = -displayValue.innerHTML);

equalsButton.addEventListener('click', () => {
    secondValue = parseFloat(displayValue.innerHTML);
    operation();
}
)

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', (event)=> {
        if (operator == ""){
        console.log("First one kicked");
        operator = event.target.value;
        firstValue = parseFloat(displayValue.innerHTML);
        displayValue.innerHTML = 0;
        console.log(operator);
        console.log(firstValue);
        } else {
            console.log("This is kicked");
            secondValue = parseFloat(displayValue.innerHTML);
            operation();
        }
    })
}

for (let i = 0; i < numButtons.length; i++) {
    
    numButtons[i].addEventListener('click', (event) => {
        updateDisplay(event.target.value);
});
}
const updateDisplay = (targetValue) => {
    if (displayValue.innerHTML != 0) {
        if (displayValue.textContent.length < 12){
            displayValue.innerHTML += `${targetValue}`;
        }
    }
    else {
        displayValue.innerHTML = `${targetValue}`;
    }
} 

const operation = () => {
    let result = 0;

    if (operator == "+") {
        result = (firstValue + secondValue);
        displayValue.innerHTML = result;
    } else if (operator == "-") {
        result = (firstValue - secondValue);
        displayValue.innerHTML = result;
    } else if (operator == "/") {
        result = (firstValue / secondValue);
        displayValue.innerHTML = result;
    } else if (operator == "*") {
        result = (firstValue * secondValue);
        displayValue.innerHTML = result;
    } else if (operator == "%") {
        result = ((firstValue / 100) * 10);
        displayValue.innerHTML = result;
    }

}


