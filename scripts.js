
let display = document.getElementById('display');
let memoryVal = 0;
let memoryDisplay = document.getElementById('memoryDisplay');

// Append number or operator to the display
function appendToDisplay(value) {

    display.value += value;
}

// Clear the entire display
function clearDisplay() {

    display.value = '';
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
        display.value = 'Error';
    }
}

function runSquareRoot() {
    const v = calculateSquareRoot(display.value);
    display.value = v;
    
}

function runSquare() {
    // Hint: Use exponentiation
    const v = calculateSquare(display.value);
    display.value = v;
}

function runReciprocal() {
    // Hint: Reciprocal is 1/x
    const v = calculateReciprocal(display.value);
    display.value = v;
}

// TODO: Implement run your functions here

function runNaturalLog() {
    const v = naturalLog(display.value);  
    display.value = v;
}

function runSine() {
    const v = sine(display.value); 
    display.value = v;
}

function runCosine() {
    const v = cosine(display.value);  
    display.value = v;
}

function runTangent() {
    const v = tangent(display.value); 
    display.value = v;
}

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
 
