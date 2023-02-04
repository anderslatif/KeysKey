// todo 
// export * from "./";
// todo create .addEventListener() method
export function is(event, _a) {
    var key = _a[0], keys = _a.slice(1);
    return event.key === key;
}
console.log("TESt");
var NumbersMapping = /** @class */ (function () {
    function NumbersMapping() {
    }
    NumbersMapping[0] = 48;
    NumbersMapping[1] = 49;
    NumbersMapping[2] = 50;
    NumbersMapping[3] = 51;
    NumbersMapping[4] = 52;
    NumbersMapping[5] = 53;
    NumbersMapping[6] = 54;
    NumbersMapping[7] = 55;
    NumbersMapping[8] = 56;
    NumbersMapping[9] = 57;
    return NumbersMapping;
}());
var SpecialKeys = /** @class */ (function () {
    function SpecialKeys() {
    }
    SpecialKeys.ENTER = "Enter";
    SpecialKeys.ESCAPE = "Escape";
    SpecialKeys.SPACE = " ";
    SpecialKeys.ARROW_UP = "ArrowUp";
    SpecialKeys.ARROW_DOWN = "ArrowDown";
    SpecialKeys.ARROW_LEFT = "ArrowLeft";
    SpecialKeys.ARROW_RIGHT = "ArrowRight";
    SpecialKeys.TAB = "Tab";
    SpecialKeys.BACKSPACE = "Backspace";
    SpecialKeys.DELETE = "Delete";
    SpecialKeys.HOME = "Home";
    SpecialKeys.END = "End";
    SpecialKeys.PAGE_UP = "PageUp";
    SpecialKeys.PAGE_DOWN = "PageDown";
    SpecialKeys.SHIFT = "Shift";
    SpecialKeys.CONTROL = "Control";
    SpecialKeys.ALT = "Alt";
    SpecialKeys.META = "Meta";
    SpecialKeys.CAPS_LOCK = "CapsLock";
    SpecialKeys.NUM_LOCK = "NumLock";
    SpecialKeys.SCROLL_LOCK = "ScrollLock";
    SpecialKeys.F1 = "F1";
    SpecialKeys.F2 = "F2";
    SpecialKeys.F3 = "F3";
    SpecialKeys.F4 = "F4";
    SpecialKeys.F5 = "F5";
    SpecialKeys.F6 = "F6";
    SpecialKeys.F7 = "F7";
    SpecialKeys.F8 = "F8";
    SpecialKeys.F9 = "F9";
    SpecialKeys.F10 = "F10";
    SpecialKeys.F11 = "F11";
    SpecialKeys.F12 = "F12";
    return SpecialKeys;
}());
//# sourceMappingURL=index.js.map