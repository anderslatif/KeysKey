// Remember that this is the path to lib embedded in the GH-page folder
// and not the lib that is compiled by the build script.
import KeysKey from "./lib/index.js";

export function basicUseCases(event) {
    let result = false;
    result = KeysKey.And(event, KeysKey.Letter.A);
    if (result) {
        result = false;
        document.getElementById("A").classList.add("grid-item-active");
    }

    result = KeysKey.And(event, KeysKey.Letter.B);
    if (result) {
        result = false;
        document.getElementById("B").classList.add("grid-item-active");
    }

    result = KeysKey.And(event, KeysKey.Letter.C);
    if (result) {
        result = false;
        document.getElementById("C").classList.add("grid-item-active");
    }

    result = KeysKey.And(event, KeysKey.Letter.a);
    if (result) {
        result = false;
        document.getElementById("a").classList.add("grid-item-active");
    }

    result = KeysKey.And(event, KeysKey.Letter.b);
    if (result) {
        result = false;
        document.getElementById("b").classList.add("grid-item-active");
    }

    result = KeysKey.And(event, KeysKey.Letter.c);
    if (result) {
        result = false;
        document.getElementById("c").classList.add("grid-item-active");
    }

    result = KeysKey.And(event, KeysKey.Number.One);
    if (result) {
        result = false;
        document.getElementById("1").classList.add("grid-item-active");
    }

    result = KeysKey.And(event, KeysKey.Number.Two);
    if (result) {
        result = false;
        document.getElementById("2").classList.add("grid-item-active");
    }

    result = KeysKey.And(event, KeysKey.Number.Three);
    if (result) {
        result = false;
        document.getElementById("3").classList.add("grid-item-active");
    }
}

export function libraryMethods(event) {
    let result = false;

    console.log("event", event);
    result = KeysKey.Is(event, KeysKey.Letter.a);
    if (result) {
        result = false;
        document.getElementById("Is").classList.add("grid-item-active");
    }

    result = KeysKey.And(event, [KeysKey.Letter.a, KeysKey.ModifierKeys.Shift]);
    console.log("result", result);
    if (result) {
        result = false;
        document.getElementById("And").classList.add("grid-item-active");
    }

    result = KeysKey.Or(event, [KeysKey.Letter.a, KeysKey.ModifierKeys.Shift]);
    if (result) {
        result = false;
        document.getElementById("Or").classList.add("grid-item-active");
    }

}

export function specialKeysGroup(event) {
    
}

export function specialCombos(event) {
    checkKeyCombination(event, 'isAltAndControl', ['Alt', 'Control']);
    checkKeyCombination(event, 'isAltAndShift', ['Alt', 'Shift']);
    checkKeyCombination(event, 'isAltKey', ['Alt']);
    checkKeyCombination(event, 'isAltOrShift', ['Alt', 'Shift']);
    checkKeyCombination(event, 'isControlAndShift', ['Control', 'Shift']);
    checkKeyCombination(event, 'isControlOrShift', ['Control', 'Shift']);
    checkKeyCombination(event, 'isDelete', [event.key]);
    checkKeyCombination(event, 'isDigit', [event.key]);
    checkKeyCombination(event, 'isFunctionKey', [event.key]);
    checkKeyCombination(event, 'isLetter', [event.key]);
    checkKeyCombination(event, 'isLowercaseLetter', [event.key]);
    checkKeyCombination(event, 'isMediaControl', [event.key]);
    checkKeyCombination(event, 'isMetaAndControl', ['Meta', 'Control']);
    checkKeyCombination(event, 'isMetaAndShift', ['Meta', 'Shift']);
    checkKeyCombination(event, 'isMetaOrControl', ['Meta', 'Control']);
    checkKeyCombination(event, 'isMetaOrShift', ['Meta', 'Shift']);
    checkKeyCombination(event, 'isModifier', [event.key]);
    checkKeyCombination(event, 'isNavigationKey', [event.key]);
    checkKeyCombination(event, 'isNonEnglishLetter', [event.key]);
    checkKeyCombination(event, 'isSpecialCharacter', [event.key]);
    checkKeyCombination(event, 'isUppercaseLetter', [event.key]);
    checkKeyCombination(event, 'isWhitespace', [event.key]);
    
    function checkKeyCombination(event, elementId, keys) {
        let result = KeysKey.SpecialCombos[elementId](event);
        if (result && arraysEqual(result, keys)) {
            document.getElementById(elementId).classList.add("grid-item-active");
        } else {
            document.getElementById(elementId).classList.remove("grid-item-active");
        }
    }

    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;

        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
}
