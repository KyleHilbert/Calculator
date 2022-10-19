function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  if (num2 > 0) {
    return num1 / num2;
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

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const display = button.innerText;

      if (isNaN(display)) {
        //fix later, when not a num
      } else {
        result.textContent = display;
      }
    });
  });
}

display();
//console.log(operate("+", 2, 4));
//console.log(operate("+", -2, 4));
//console.log(operate("-", 2, 4));
//console.log(operate("-", -2, 4));
//console.log(operate("*", 2, 4));
//console.log(operate("*", -2, 4));
//console.log(operate("/", 2, 4));
//console.log(operate("/", -2, 4));
//console.log(operate("/", 2, 0));
