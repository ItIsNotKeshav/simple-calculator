const buttons = document.querySelectorAll('.btn, .ent-btn');

buttons.forEach((button) => {
    button.addEventListener("mouseover", (event) => {
        const x = event.pageX - button.offsetLeft;
        const y = event.pageY - button.offsetTop;

        button.style.setProperty("--xPos", x + "px");
        button.style.setProperty("--yPos", y + "px");
    });
});

let displayValue = '';

function addNumber(num) {
  if (displayValue.length <= 16){
    displayValue += num;
    maxVal();
  }
    updateDisplay();
}

function addOperator(operator) {
    displayValue += operator;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    maxVal();
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    maxVal();
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function maxVal() {
  var display = document.querySelector('.display');
  if (displayValue.length > 14) {
    display.style.fontSize = "16px";
  } else if (displayValue.length > 12) {
    display.style.fontSize = "20px";
  }
  else if (displayValue.length > 10) {
    display.style.fontSize = "24px";
  }
  else if (displayValue.length > 8) {
    display.style.fontSize = "28px";
  }
  else {
    display.style.fontSize = "36px"; // or whatever your default size is
  }
  updateDisplay();
}

function updateDisplay() {
    document.querySelector('.display').innerText = displayValue;
}

