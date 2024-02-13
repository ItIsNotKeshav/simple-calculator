const buttons = document.querySelectorAll(".btn, .ent-btn");

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    const x = event.pageX - button.offsetLeft;
    const y = event.pageY - button.offsetTop;

    button.style.setProperty("--xPos", x + "px");
    button.style.setProperty("--yPos", y + "px");
  });
});

let displayValue = "";

function addNumber(num) {
  if (displayValue === "Error") {
    displayValue = "";
    updateDisplay();
  }
  if (typeof displayValue === "number") {
    displayValue = "";
  }
  if (displayValue.length <= 16) {
    displayValue += num;
    maxVal();
  }
  updateDisplay();
}

function addOperator(operator) {
  let operators = ["+", "-", "*", "/", "(", ")", "^"];
  if (operators.includes(displayValue[displayValue.length - 1])) {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
  }
  if (displayValue === "Error") {
    displayValue = "";
    updateDisplay();
  }

  displayValue += operator;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  maxVal();
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  maxVal();
  updateDisplay();
}

function maxVal() {
  var display = document.querySelector(".display");
  displayValue = displayValue.toString();
  if (displayValue.length >= 18) {
    displayValue = displayValue.slice(0, 18);
    display.style.fontSize = "1.1em";
  } else if (displayValue.length >= 16) {
    display.style.fontSize = "1.15em";
  } else if (displayValue.length >= 14) {
    display.style.fontSize = "1.20em";
  } else if (displayValue.length >= 12) {
    display.style.fontSize = "1.35em";
  } else if (displayValue.length >= 10) {
    display.style.fontSize = "1.5em";
  } else if (displayValue.length >= 8) {
    display.style.fontSize = "1.75em";
  } else {
    display.style.fontSize = "2em";
  }
  updateDisplay();
}

function updateDisplay() {
  document.querySelector(".display").innerText = displayValue;
}


function bracketcheck() {
  for (let i = 0; i < displayValue.length; i++) {
    if (displayValue[i] === '(') {
        if (i > 0 && (isNumber(displayValue[i - 1]) || displayValue[i - 1] === ')')) {
            displayValue = insert(displayValue, i, '*');
            i++; // Skip the inserted '*'
        }
    } else if (displayValue[i] === ')') {
        if (i < displayValue.length - 1 && (isNumber(displayValue[i + 1]) || displayValue[i + 1] === '(')) {
            displayValue = insert(displayValue, i + 1, '*');
            i++; // Skip the inserted '*'
        }
    }
  }
}

function operatorend() {
  let operators = ["+", "-", "*", "/", "(" ];
  if (operators.includes(displayValue[displayValue.length - 1])) {
    displayValue = displayValue.slice(0, -1);
  }
}


function calculate() {
  try {
    // Check if displayValue is a number
    if (!isNaN(displayValue)) {
      return displayValue;
    }
    console.log(displayValue);
    displayValue = displayValue.replace(/\^/g, '**'); // Replace ^ with ** to make power work
    bracketcheck();
    console.log(displayValue);
    operatorend();
    console.log(displayValue);
    displayValue = eval(displayValue);
    maxVal();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

