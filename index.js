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
  displayValue = displayValue.replace(/\(/g, "*(");
  displayValue = displayValue.replace(/\)/g, ")*");
}

function operatorend() {
  let operators = ["+", "-", "*", "/", "("];
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
    displayValue = displayValue.replace(/\^/g, "**"); // Replace ^ with ** to make power work
    bracketcheck();
    operatorend();
    displayValue = eval(displayValue);
    maxVal();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

let themeColors = {
  purpleLight: {
    backColor: "#F5F2F9",
    textColor: "#080210",
    darkest: "#43147c",
    medDark: "#873fde",
    medLight: "#a772e9",
    light: "#BD96ED",
    ent: "#7C2FDA",
    frame: "#D3B9F3",
  },
  purpleDark: {
    backColor: "#080210",
    textColor: "#F5F2F9",
    darkest: "#43147c",
    medDark: "#873fde",
    medLight: "#a772e9",
    light: "#BD96ED",
    ent: "#7C2FDA",
    frame: "#D3B9F3",
  },
  redLight: {
    backColor: "#FDF5F5",
    textColor: "#0D0102",
    darkest: "#A91521",
    medDark: "#E51022",
    medLight: "#F2404F",
    light: "#F67984",
    ent: "#E51022",
    frame: "#EE929A",
  },
  redDark: {
    backColor: "#0D0102",
    textColor: "#FDF5F5",
    darkest: "#A91521",
    medDark: "#E51022",
    medLight: "#F2404F",
    light: "#F67984",
    ent: "#E51022",
    frame: "#EE929A",
  },
  green: {
    backColor: "#F3FBED",
    textColor: "#071001",
    darkest: "#2A6600",
    medDark: "#4E9819",
    medLight: "#5BC212",
    light: "#8FF546",
    ent: "#0E9E0E",
    frame: "#C7E8B0",
  },
  greenDark: {
    backColor: "#071001",
    textColor: "#F3FBED",
    darkest: "#2A6600",
    medDark: "#4E9819",
    medLight: "#5BC212",
    light: "#8FF546",
    ent: "#0E9E0E",
    frame: "#C7E8B0",
  },
  blueLight: {
    backColor: "#E7EFF8",
    textColor: "#040C16",
    darkest: "#13273E",
    medDark: "#22456D",
    medLight: "#366CAB",
    light: "#6495CE",
    ent: "#3B84D9",
    frame: "#BCD1EA",
  },
  blueDark: {
    backColor: "#040C16",
    textColor: "#E7EFF8",
    darkest: "#13273E",
    medDark: "#22456D",
    medLight: "#366CAB",
    light: "#6495CE",
    ent: "#3B84D9",
    frame: "#BCD1EA",
  },
  yellowLight: {
    backColor: "#FBF7EC",
    textColor: "#0A0701",
    darkest: "#C28F18",
    medDark: "#E8AB1E",
    medLight: "#F0C45F",
    light: "#F5D895",
    ent: "#E5AB24",
    frame: "#F0DFB8",
  },
  yellowDark: {
    backColor: "#191202",
    textColor: "#FBF7EC",
    darkest: "#C28F18",
    medDark: "#E8AB1E",
    medLight: "#F0C45F",
    light: "#F5D895",
    ent: "#E5AB24",
    frame: "#F0DFB8",
  },
};

let themeColorsArray = Object.values(themeColors);

let currentThemeIndex = 2;

window.onload = changeTheme;

function changeTheme() {
  currentThemeIndex = (currentThemeIndex + 1) % themeColorsArray.length;
  const newThemeColor = themeColorsArray[currentThemeIndex];

  document.body.style.backgroundColor = newThemeColor.backColor;

  document.getElementById("themeBtn").style.backgroundColor =
    newThemeColor.darkest;

  document.querySelector(".display").style.borderColor = newThemeColor.frame;

  document.querySelector(".display").style.color = newThemeColor.textColor;

  document.querySelectorAll(".dark").forEach((button) => {
    button.style.backgroundColor = newThemeColor.darkest;
  });

  document.querySelectorAll(".med-dark").forEach((button) => {
    button.style.backgroundColor = newThemeColor.medDark;
  });

  document.querySelectorAll(".med-light").forEach((button) => {
    button.style.backgroundColor = newThemeColor.medLight;
  });

  document.querySelectorAll(".light").forEach((button) => {
    button.style.backgroundColor = newThemeColor.light;
  });

  document.querySelectorAll(".ent-btn").forEach((button) => {
    button.style.backgroundColor = newThemeColor.ent;
  });

  document.querySelector(".ent-btn").style.backgroundColor = newThemeColor.ent;
}

const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("mouseover", (event) => {
  themeBtn.style.setProperty(
    "--xPos",
    event.pageX - themeBtn.offsetLeft + "px"
  );
  themeBtn.style.setProperty("--yPos", event.pageY - themeBtn.offsetTop + "px");
});
