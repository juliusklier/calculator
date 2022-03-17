const display = document.querySelector(".textField");
const btns = document.querySelectorAll("button");
btns.forEach(e => {
    e.setAttribute("onclick", "populate(this)");
  })
const clearBtn = document.querySelector("#clear");

const populate = function(e) {
    let a = e.innerHTML;
    let newContent = display.textContent + a;
    display.textContent = newContent
}
clearBtn.addEventListener("click", function() {
  display.innerHTML = "";
});

const add = function(numberOne, numberTwo ) {
	return numberOne + numberTwo
};

const subtract = function(numberOne, numberTwo ) {
	return numberOne - numberTwo
};

const multiply = function(numberOne, numberTwo ) {
	return numberOne * numberTwo
};

const divide = function(numberOne, numberTwo ) {
	return numberOne / numberTwo
};

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


