const output = document.getElementById("out");
let currentInput = "";
let operator = null;
let previousInput = "";
function updateOutput(value) {
  output.textContent = value;
}
function handleNumber(num) {
  currentInput += num;
  updateOutput(currentInput);
}
function handleOperator(op) {
  if (currentInput === "" && op === "-") {
    currentInput = "-"; // Allow negative numbers
    updateOutput(currentInput);
    return;
  }
  if (currentInput === "") return;
  if (previousInput !== "" && operator) {
    calculate();
  } else {
    previousInput = currentInput;
  }
  operator = op;
  currentInput = "";
}
function calculate() {
  if (operator && previousInput !== "" && currentInput !== "") {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Error";
        break;
    }
    updateOutput(result);
    previousInput = result.toString();
    currentInput = "";
    operator = null;
  }
}
function clearCalculator() {
  currentInput = "";
  previousInput = "";
  operator = null;
  updateOutput("0");
}
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (!isNaN(value)) {
      handleNumber(value);
    } else if (value === "=") {
      calculate();
    } else {
      handleOperator(value);
      }
    });
  }