// Store the numbers and operator for each calculation
let firstNumbers = "";
let secondNumbers = "";
let operators = "";

const display = document.querySelector(".textField");
const btns = document.querySelectorAll("button");
btns.forEach(e => {
    e.setAttribute("onclick", "populate(this)");
  })
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector("#equals");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");


// Adds the content of the button to the display
const populate = function(e) {
    let a = e.innerHTML;
    if (a === "+" || a === "-" || a === "/" || a === "x") {
      if (firstNumbers !== "") {
        firstNumbers = firstNumbers
        display.innerHTML = "";
      }
      else {
      firstNumbers = firstNumbers + display.textContent;
      display.innerHTML = "";
      }
    }
    else if (a === "=") {
      secondNumbers = secondNumbers + display.textContent;
    }
    else {
    let newContent = display.textContent + a;
    display.textContent = newContent;
    }
}
// Differentiates the AC Button and adds the clear functionality
clearBtn.addEventListener("click", function() {
  display.innerHTML = "";
  firstNumbers = "";
  secondNumbers = "";
  operators = "";
});

// Sets event for equal Bttn to start operation
equalBtn.addEventListener("click", function() {
    operate(firstNumbers, operators, secondNumbers);
  });

// Events for all 4 math operations
  plusBtn.addEventListener("click", function() {
    operators = operators + "+";
  });
  minusBtn.addEventListener("click", function() {
    operators = operators + "-";
  });
  multiplyBtn.addEventListener("click", function() {
    operators = operators + "x";
  });
  divideBtn.addEventListener("click", function() {
    operators = operators + "/";
  });


// Basic math operations
const add = function(numberOne, numberTwo ) {
  if (numberOne.includes(".") === true || numberTwo.includes(".") === true) {
    display.innerHTML = (parseFloat(numberOne) + parseFloat(numberTwo));

  }
  else {
	display.innerHTML = (parseInt(numberOne) + parseInt(numberTwo))

  }
  operators = "";
  firstNumbers = display.innerHTML;
  secondNumbers = "";
  
};

const subtract = function(numberOne, numberTwo ) {
  if (numberOne.includes(".") === true || numberTwo.includes(".") === true) {
    display.innerHTML = (parseFloat(numberOne) - parseFloat(numberTwo));
  }
  else {
	display.innerHTML = (parseInt(numberOne) - parseInt(numberTwo))
  }
  operators = "";
  firstNumbers = display.innerHTML;
  secondNumbers = "";
};

const multiply = function(numberOne, numberTwo ) {
  if (numberOne.includes(".") === true || numberTwo.includes(".") === true) {
    display.innerHTML = (parseFloat(numberOne) * parseFloat(numberTwo));
  }
  else {
	display.innerHTML = (parseInt(numberOne) * parseInt(numberTwo))
  }
  operators = "";
  firstNumbers = display.innerHTML;
  secondNumbers = "";
};

const divide = function(numberOne, numberTwo ) {
  if (numberOne.includes(".") === true || numberTwo.includes(".") === true) {
    display.innerHTML = (parseFloat(numberOne) / parseFloat(numberTwo));
  }
  else {
	display.innerHTML = (parseInt(numberOne) / parseInt(numberTwo))
  }
  operators = "";
  firstNumbers = display.innerHTML;
  secondNumbers = "";
};

// starts operation 
const operate = function(numberOne, operator, numberTwo) {
    if (operator === "+") {
        return add(numberOne, numberTwo)
    }
    else if (operator === "-") {
        return subtract(numberOne, numberTwo)
    }
    else if (operator === "x") {
        return multiply(numberOne, numberTwo)
    }
    else if (operator === "/") {
        return divide(numberOne, numberTwo)
    }
};


