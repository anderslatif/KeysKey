"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// exports.__esModule = true;
var KeysKey = /** @class */ (function () {
    function KeysKey() {
    }
    KeysKey.Group = function (specialKeys, letter) {
        return __spreadArray(__spreadArray([], specialKeys, true), [letter], false);
    };
    KeysKey.is = function (event, keys) {
        return keys.some(function (key) {
            if (Array.isArray(key)) {
                return key.every(function (subKey) { return event.code === subKey; });
            }
            else {
                return event.code === key;
            }
        });
    };
    KeysKey.SpecialKeys = {
        Meta: 'Meta',
        Shift: 'Shift',
        Control: 'Control'
    };
    KeysKey.SpecialGroups = {
        MetaAndShift: [KeysKey.SpecialKeys.Meta, KeysKey.SpecialKeys.Shift],
        MetaOrControl: [KeysKey.SpecialKeys.Meta, KeysKey.SpecialKeys.Control]
    };
    KeysKey.Letter = {
        A: 'KeyA',
        B: 'KeyB'
    };
    KeysKey.Number = {
        One: 'Digit1',
        Two: 'Digit2',
        Three: 'Digit3'
    };
    return KeysKey;
}());
// exports["default"] = KeysKey;
