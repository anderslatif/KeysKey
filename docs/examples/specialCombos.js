// Remember that this is the path to lib embedded in the GH-page folder
// and not the lib that is compiled by the build script.
import KeysKey from "../lib/index.js";

export function isSpecialCombos(event) {
    let result = false;

    result = KeysKey.SpecialCombos.isAltAndControl(event);
    if (result) {
        result = false;
        document.getElementById("isAltAndControl").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isAltAndShift(event);
    if (result) {
        result = false;
        document.getElementById("isAltAndShift").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isAltOrShift(event);
    if (result) {
        result = false;
        document.getElementById("isAltOrShift").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isControlAndShift(event);
    if (result) {
        result = false;
        document.getElementById("isControlAndShift").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isControlOrShift(event);
    if (result) {
        result = false;
        document.getElementById("isControlOrShift").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isDigit(event);
    if (result) {
        result = false;
        document.getElementById("isDigit").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isFunctionKey(event);
    if (result) {
        result = false;
        document.getElementById("isFunctionKey").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isEnglishLetter(event);
    if (result) {
        result = false;
        document.getElementById("isEnglishLetter").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isLowercaseLetter(event);
    if (result) {
        result = false;
        document.getElementById("isLowercaseLetter").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isMediaControl(event);
    if (result) {
        result = false;
        document.getElementById("isMediaControl").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isMetaAndControl(event);
    if (result) {
        result = false;
        document.getElementById("isMetaAndControl").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isMetaAndShift(event);
    if (result) {
        result = false;
        document.getElementById("isMetaAndShift").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isMetaOrControl(event);
    if (result) {
        result = false;
        document.getElementById("isMetaOrControl").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isMetaOrShift(event);
    if (result) {
        result = false;
        document.getElementById("isMetaOrShift").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isModifier(event);
    if (result) {
        result = false;
        document.getElementById("isModifier").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isNavigationKey(event);
    if (result) {
        result = false;
        document.getElementById("isNavigationKey").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isNonEnglishLetter(event);
    if (result) {
        result = false;
        document.getElementById("isNonEnglishLetter").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isSpecialCharacter(event);
    if (result) {
        result = false;
        document.getElementById("isSpecialCharacter").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isUppercaseLetter(event);
    if (result) {
        result = false;
        document.getElementById("isUppercaseLetter").classList.add("grid-item-active");
    }

    result = KeysKey.SpecialCombos.isWhitespace(event);
    if (result) {
        result = false;
        document.getElementById("isWhitespace").classList.add("grid-item-active");
    }
}
