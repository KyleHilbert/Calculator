function addition(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function subtraction(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function multiplication(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

function division(num1, num2) {
  if (num2 > 0) {
    return parseInt(num1) / parseInt(num2);
  } else {
    return "Cannot divide by 0";
  }
}

function operate(operator, num1, num2) {
  if (operator === "+") {
    return addition(num1, num2);
  } else if (operator === "-") {
    return subtraction(num1, num2);
  } else if (operator === "*") {
    return multiplication(num1, num2);
  } else if (operator === "/") {
    return division(num1, num2);
  }
}

function display() {
  const result = document.querySelector(".answer");
  let num1;
  let num2;
  let operator;
  let displayOperator;
  const equation = document.querySelector(".equation");

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const display = button.innerText;

      if (isNaN(display)) {
        if (button.id === "equals") {
          equation.textContent =
            num1 + " " + displayOperator + " " + num2 + " = ";
          result.textContent = operate(operator, num1, num2);
          num1 = result.textContent;
          num2 = undefined;
          operator = undefined;
        }
        if (button.id === "clearAll") {
          equation.textContent = "\u2002";
          result.textContent = "0";
          num1 = undefined;
          num2 = undefined;
          operator = undefined;
        } else if (button.id === "plus") {
          operator = "+";
          displayOperator = button.textContent;
          equation.textContent = num1 + displayOperator;
        } else if (button.id === "minus") {
          operator = "-";
          displayOperator = button.textContent;
          equation.textContent = num1 + displayOperator;
        } else if (button.id === "divide") {
          operator = "/";
          displayOperator = button.textContent;
          equation.textContent = num1 + displayOperator;
        } else if (button.id === "multiply") {
          operator = "*";
          displayOperator = button.textContent;
          equation.textContent = num1 + displayOperator;
        }
      } else {
        if (operator === undefined) {
          if (result.innerText === "0") {
            result.innerText = display;
            num1 = display;
          } else {
            num1 += display;
            result.innerText = num1;
          }
        } else {
          if (num2 === undefined) {
            num2 = display;
          } else {
            num2 += display;
          }
          result.innerText = num2;
          equation.textContent = num1 + " " + displayOperator + " " + num2;
        }
      }
    });
  });
}

display();

// TODO
// Reset after user hits equal and they hit a new number
// Negative numbers
// Clear last digit
// Add comments and make variables better?
