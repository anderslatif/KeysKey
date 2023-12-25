import { isUppercaseLetters, isLowercaseLetters, isNumbers } from "./examples/numbersAndLetters.js";
import { isSpecialCharacters } from "./examples/specialCharacters.js";
import { isSpecialCombos } from "./examples/specialCombos.js";

window.onkeydown = (event) => {
    isUppercaseLetters(event);
    isLowercaseLetters(event);
    isNumbers(event);
    isSpecialCharacters(event);
    isSpecialCombos(event);
};

window.onkeyup = () => {
    document.querySelectorAll('.grid-item-active').forEach(element => {
        element.classList.remove("grid-item-active");
    });
};
