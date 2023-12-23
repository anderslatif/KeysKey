// Remember that this is the path to lib embedded in the GH-page folder
// and not the lib that is compiled by the build script.
import KeysKey from "../lib/index.js";

export function isSpecialCharacters(event) {
    let result = false;

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Ampersand);
    console.log(event);
    if (result) {
        result = false;
        document.getElementById("Ampersand").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Asterisk);
    if (result) {
        result = false;
        document.getElementById("Asterisk").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.At);
    if (result) {
        result = false;
        document.getElementById("At").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Backquote);
    if (result) {
        result = false;
        document.getElementById("Backquote").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Backslash);
    if (result) {
        result = false;
        document.getElementById("Backslash").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.BracketLeft);
    if (result) {
        result = false;
        document.getElementById("BracketLeft").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.BracketRight);
    if (result) {
        result = false;
        document.getElementById("BracketRight").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Caret);
    if (result) {
        result = false;
        document.getElementById("Caret").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Colon);
    if (result) {
        result = false;
        document.getElementById("Colon").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Comma);
    if (result) {
        result = false;
        document.getElementById("Comma").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.CurlyLeft);
    if (result) {
        result = false;
        document.getElementById("CurlyLeft").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.CurlyRight);
    if (result) {
        result = false;
        document.getElementById("CurlyRight").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Dollar);
    if (result) {
        result = false;
        document.getElementById("Dollar").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Equal);
    if (result) {
        result = false;
        document.getElementById("Equal").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Exclamation);
    if (result) {
        result = false;
        document.getElementById("Exclamation").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.GreaterThan);
    if (result) {
        result = false;
        document.getElementById("GreaterThan").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Hash);
    if (result) {
        result = false;
        document.getElementById("Hash").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.LessThan);
    if (result) {
        result = false;
        document.getElementById("LessThan").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.ParenLeft);
    if (result) {
        result = false;
        document.getElementById("ParenLeft").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.ParenRight);
    if (result) {
        result = false;
        document.getElementById("ParenRight").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Percent);
    if (result) {
        result = false;
        document.getElementById("Percent").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Pipe);
    if (result) {
        result = false;
        document.getElementById("Pipe").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Period);
    if (result) {
        result = false;
        document.getElementById("Period").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Plus);
    if (result) {
        result = false;
        document.getElementById("Plus").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.QuestionMark);
    if (result) {
        result = false;
        document.getElementById("QuestionMark").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Quote);
    if (result) {
        result = false;
        document.getElementById("Quote").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Semicolon);
    if (result) {
        result = false;
        document.getElementById("Semicolon").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Slash);
    if (result) {
        result = false;
        document.getElementById("Slash").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Subtract);
    if (result) {
        result = false;
        document.getElementById("Subtract").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Tilde);
    if (result) {
        result = false;
        document.getElementById("Tilde").classList.add("grid-item-active");
    }

    result = KeysKey.Is(event, KeysKey.SpecialCharacter.Underscore);
    if (result) {
        result = false;
        document.getElementById("Underscore").classList.add("grid-item-active");
    }
}
