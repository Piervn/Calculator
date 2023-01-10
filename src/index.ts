import { evaluate } from "mathjs";
import "./styles/styles.css";

const display = document.querySelector(".display") as HTMLDivElement;

const errorMsg = "Error";

const signs = document.querySelectorAll(
  ".button--sign"
) as NodeListOf<HTMLButtonElement>;

signs.forEach((button) => {
  button.addEventListener("click", () => {
    if (display.innerHTML === errorMsg) {
      display.innerHTML = "";
    }
    display.innerHTML += button.innerHTML;
  });
});

const equals = document.querySelector(".button--equals") as HTMLButtonElement;
const backspace = document.querySelector(
  ".button--backspace"
) as HTMLButtonElement;
const del = document.querySelector(".button--delete") as HTMLButtonElement;

equals.addEventListener("click", () => {
  try {
    if (display.innerHTML === "" || display.innerHTML === errorMsg) return;
    display.innerHTML = evaluate(display.innerHTML);
  } catch (error) {
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
