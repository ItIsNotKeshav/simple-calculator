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
  if (typeof displayValue === "number") {
    displayValue = '';
  }
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
        maxVal();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function maxVal() {
  var display = document.querySelector('.display');
  displayValue = displayValue.toString();
  if (displayValue.length >= 18) {
    displayValue = displayValue.slice(0, 18);
    display.style.fontSize = "1.1em";
  }
  else if(displayValue.length >= 16) {
    display.style.fontSize = "1.15em";
  }
  else if (displayValue.length >= 14) {
    display.style.fontSize = "1.20em";
  } else if (displayValue.length >= 12) {
    display.style.fontSize = "1.35em";
  }
  else if (displayValue.length >= 10) {
    display.style.fontSize = "1.5em";
  }
  else if (displayValue.length >= 8) {
    display.style.fontSize = "1.75em";
  }
  else {
    display.style.fontSize = "2em"; 
  }
  updateDisplay();
}

function updateDisplay() {
    document.querySelector('.display').innerText = displayValue;
}

