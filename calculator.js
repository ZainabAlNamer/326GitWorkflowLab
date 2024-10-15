// TODO: Fix the square root function not displaying
function calculateSquareRoot(value) {
  if (value < 0) {
    return "Invalid input: negative number";
  }
  return Math.sqrt(value);
}


// TODO: Implement square function
function calculateSquare(value) {
  return value ** 2;
}

// BUG: FIX reciprocal function
function calculateReciprocal(value) {
  return 1 / value;
}

// TODO: Implement natural log function
function naturalLog(value) {
  return Math.log(value);
}

// TODO: Implement sine function
function sine(value) {
  return Math.sin(value); // Corrected from Math.sine
}

// TODO: Implement cosine function
function cosine(value) {
  return Math.cos(value);
}

// TODO: Implement tangent function
function tangent(value) {
  return Math.tan(value);
}

module.exports = {
  calculateSquareRoot,
  calculateSquare,
  calculateReciprocal,
  naturalLog,
  sine,
  cosine,
  tangent,
};
