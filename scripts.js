let display = document.getElementById("display");
let memoryVal = 0;
let memoryDisplay = document.getElementById("memoryDisplay");

// Append number or operator to the display
function appendToDisplay(value) {
  display.value += value;
}

// Clear the entire display
function clearDisplay() {
  display.value = "";
}

// Delete the last character from the display
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate and show the result
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function runSquareRoot() {
  const v = calculateSquareRoot(parseFloat(display.value));
  display.value = v;
}

function runSquare() {
  const v = calculateSquare(parseFloat(display.value));
  display.value = v;
}

function runReciprocal() {
  const v = calculateReciprocal(parseFloat(display.value));
  display.value = v;
}

function runNaturalLog() {
  const v = naturalLog(parseFloat(display.value));
  display.value = v;
}

function runSine() {
  const v = sine(parseFloat(display.value));
  display.value = v;
}

function runCosine() {
  const v = cosine(parseFloat(display.value));
  display.value = v;
}

function runTangent() {
  const v = tangent(parseFloat(display.value));
  display.value = v;
}

// Memory functions
function memoryStore() {
  memoryVal = display.value;
  memoryDisplay.value = memoryVal;
}

function memoryRecall() {
  display.value = memoryVal;
}

function memoryClear() {
  memoryVal = 0;
  memoryDisplay.value = memoryVal;
}

// Keyboard support
document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
  const key = event.key;

  if (isNumber(key)) {
    appendToDisplay(key);
  } else if (isOperator(key)) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  } else if (key === "s") {
    runSquare();
  } else if (key === "r") {
    runSquareRoot();
  } else if (key === "t") {
    runTangent();
  }
}

function isNumber(key) {
  return /\d/.test(key); // Returns true if key is a digit (0-9)
}

function isOperator(key) {
  return ["+", "-", "*", "/"].includes(key); // Returns true if the key is an operator
}
