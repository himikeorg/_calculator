// Math funcitonality

const add = function (num1, num2) {
    return num1 + num2;
}

const subtract = function (num1, num2) {
    return num1 - num2;
}

const multiply = function (num1, num2) {
    return num1 * num2;
}

const divide = function (num1, num2) {
    return num1 / num2;
}

let firstNum = "";
let secondNum = "";
let operator = "";

const operate = function (num1, oper, num2) {
    switch (oper) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    } 

}

// Check if number, operator, equals, or clear

const isNumber = function (getId) {
    if (getId.textContent === "0" ||
    getId.textContent === "1" ||
    getId.textContent === "2" ||
    getId.textContent === "3" ||
    getId.textContent === "4" ||
    getId.textContent === "5" ||
    getId.textContent === "6" ||
    getId.textContent === "7" ||
    getId.textContent === "8" ||
    getId.textContent === "9") {
        return true;
    }
};

const isOperator = function () {
 if (operator === "+" ||
    operator === "-" ||
    operator === "x" ||
    operator === "/") {
        return true;
    }
};

const isEquals = function () {

};

const isClear = function () {

};

// DOM stuff

const screenTextEl = document.querySelector(".screen-text");
let screenText;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const getId = document.getElementById(button.id);

        
        if (isNumber(getId)
        ) {
            if (isOperator()) 
            {
                secondNum += getId.textContent;
                screenTextEl.textContent += Number(getId.textContent);
            } else {
                firstNum += getId.textContent;
                screenTextEl.textContent = Number(firstNum);
            }
        } else if (getId.textContent === "+" ||
            getId.textContent === "-" ||
            getId.textContent === "x" ||
            getId.textContent === "/"
        ) {      
                operator = getId.textContent;
                screenTextEl.textContent += (getId.textContent);
    
        } else if (getId.textContent === "="){
            if (operator === "/" && Number(secondNum) === 0) {
                screenTextEl.textContent = "Can't divide by 0"
            } else if (firstNum === "" || secondNum === "") {
                screenTextEl.textContent = "Error"; 
                firstNum = "";
                secondNum = "";
                operator = "reset";
            } else {
            screenTextEl.textContent = operate(Number(firstNum), operator, Number(secondNum));
            firstNum = operate(Number(firstNum), operator, Number(secondNum)).toString();
            secondNum = 0;
            }
        } else {
            firstNum = "";
            secondNum = "";
            operator = "reset";
            screenTextEl.textContent = "0";
        }
    })
})








