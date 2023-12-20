import { basicUseCases, libraryMethods, specialKeysGroup, specialCombos } from "./examples.js";

window.onkeydown = (event) => {

    basicUseCases(event);
    libraryMethods(event);
    specialKeysGroup(event);
    specialCombos(event);

};

window.onkeyup = () => {
    document.querySelectorAll('.grid-item-active').forEach(element => {
        element.classList.remove("grid-item-active");
    });
};