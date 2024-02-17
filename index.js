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
  displayValue = displayValue.replace(/\(/g, '*(');
  displayValue = displayValue.replace(/\)/g, ')*');
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


let themeColors = {
  purple: {
    backgroundColorLight: '#F5F2F9',
    backgroundColorDark: '#080210',
    textLight: '#080210',
    textDark: '#F5F2F9',
    darkest: '#43147c',
    medDark: '#873fde',
    medLight: '#a772e9',
    light: '#BD96ED',
    ent: '#7C2FDA',
    frame: '#D3B9F3',
  },
  red: {
    backgroundColorLight: '#FDF5F5',
    backgroundColorDark: '#0D0102',
    textLight: '#FDF5F5',
    textDark: '#0D0102',
    darkest: '#A91521',
    medDark: '#E51022',
    medLight: '#F2404F',
    light: '#F67984',
    ent: '#E51022',
    frame: '#EE929A',
  },
  green: {
    backgroundColorLight: '#F3FBED',
    backgroundColorDark: '#071001',
    textLight: '#071001',
    textDark: '#F3FBED',
    darkest: '#2A6600',
    medDark: '#4E9819',
    medLight: '#5BC212',
    light: '#8FF546',
    ent: '#0E9E0E',
    frame: '#C7E8B0',
  },
  blue: {
    backgroundColorLight: '#E7EFF8',
    backgroundColorDark: '#040C16',
    textLight: '#040C16',
    textDark: '#E7EFF8',
    darkest: '#13273E',
    medDark: '#22456D',
    medLight: '#366CAB',
    light: '#6495CE',
    ent: '#3B84D9',
    frame: '#BCD1EA',
  },
  yellow: {
    backgroundColorLight: '#FBF7EC',
    backgroundColorDark: '#0A0701',
    textLight: '#0A0701',
    textDark: '#FBF7EC',
    darkest: '#C28F18',
    medDark: '#E8AB1E',
    medLight: '#F0C45F',
    light: '#F5D895',
    ent: '#E5AB24',
    frame: '#F0DFB8',
  },
}

let themeColorsArray = Object.values(themeColors);


let currentThemeIndex = 0;

function changeTheme() {
  currentThemeIndex = (currentThemeIndex + 1) % themeColorsArray.length;
  const newThemeColor = themeColorsArray[currentThemeIndex];

  // Apply the new theme colors to the body and button elements
  document.body.style.backgroundColor = newThemeColor.backgroundColorDark;
  document.getElementById('themeBtn').style.backgroundColor = newThemeColor.backgroundColorLight;
  

  document.querySelectorAll('.dark').forEach((button) => {
    button.style.backgroundColor = newThemeColor.darkest;
  });
  document.querySelectorAll('.med-dark').forEach((button) => {
    button.style.backgroundColor = newThemeColor.medDark;
  });

  document.querySelectorAll('.med-light').forEach((button) => {
    button.style.backgroundColor = newThemeColor.medLight;
  });

  document.querySelectorAll('.light').forEach((button) => {
    button.style.backgroundColor = newThemeColor.light;
  });

  document.querySelectorAll('.ent-btn').forEach((button) => {
    button.style.backgroundColor = newThemeColor.ent;
  });

  


  document.querySelector('.ent-btn').style.backgroundColor = newThemeColor.ent;
}

let isDarkMode = false;

function toggleThemeMode() {
  isDarkMode = !isDarkMode;
  const themeMode = isDarkMode ? 'dark-mode' : 'light-mode';
  document.body.classList.toggle(themeMode);
}

// Adding animation to the button
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('mouseover', (event) => {
  themeBtn.style.setProperty('--xPos', event.pageX - themeBtn.offsetLeft + 'px');
  themeBtn.style.setProperty('--yPos', event.pageY - themeBtn.offsetTop + 'px');
});

