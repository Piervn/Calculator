"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mathjs_1 = require("mathjs");
require("./styles/styles.css");
const display = document.querySelector(".display");
const errorMsg = "Error";
const signs = document.querySelectorAll(".button--sign");
signs.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.innerHTML === errorMsg) {
            display.innerHTML = "";
        }
        display.innerHTML += button.innerHTML;
    });
});
const equals = document.querySelector(".button--equals");
const backspace = document.querySelector(".button--backspace");
const del = document.querySelector(".button--delete");
equals.addEventListener("click", () => {
    try {
        if (display.innerHTML === "" || display.innerHTML === errorMsg)
            return;
        display.innerHTML = (0, mathjs_1.evaluate)(display.innerHTML);
    }
    catch (error) {
        display.innerHTML = errorMsg;
    }
});
backspace.addEventListener("click", () => {
    if (display.innerHTML === errorMsg) {
        display.innerHTML = "";
    }
    display.innerHTML = display.innerHTML.slice(0, -1);
});
del.addEventListener("click", () => {
    display.innerHTML = "";
});
