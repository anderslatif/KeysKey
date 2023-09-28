var KeysKey = /** @class */ (function () {
    function KeysKey() {
    }
    KeysKey.is = function (event, keys) {
        var results = [];
        var checkKey = function (key) {
            if (typeof key === 'string') {
                if (key === 'Meta' && event.metaKey)
                    return key;
                if (key === 'Shift' && event.shiftKey)
                    return key;
                if (key === 'Control' && event.ctrlKey)
                    return key;
                if (event.key === key)
                    return key;
                return null;
            }
            else if (key.type === 'AND') {
                var andKeys = key.keys.map(checkKey).filter(function (k) { return k !== null; });
                return andKeys.length === key.keys.length ? andKeys.flat() : null;
            }
            else if (key.type === 'OR') {
                for (var _i = 0, _a = key.keys; _i < _a.length; _i++) {
                    var k = _a[_i];
                    var orKey = checkKey(k);
                    if (orKey !== null)
                        return orKey;
                }
            }
            return null;
        };
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (checkKey(key)) {
                if (typeof key === 'string') {
                    results.push(key);
                }
                else {
                    results.push.apply(results, key.keys.filter(function (k) { return typeof k === 'string'; }));
                }
            }
        }
        if (results.length === 1) {
            return results[0];
        }
        else if (results.length > 1) {
            return results;
        }
        return '';
    };
    KeysKey.And = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return { type: "AND", keys: keys };
    };
    KeysKey.Or = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return { type: "OR", keys: keys };
    };
    KeysKey.Number = {
        Zero: '0',
        One: '1',
        Two: '2',
        Three: '3',
        Four: '4',
        Five: '5',
        Six: '6',
        Seven: '7',
        Eight: '8',
        Nine: '9',
    };
    KeysKey.Letter = {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',
        E: 'E',
        F: 'F',
        G: 'G',
        H: 'H',
        I: 'I',
        J: 'J',
        K: 'K',
        L: 'L',
        M: 'M',
        N: 'N',
        O: 'O',
        P: 'P',
        Q: 'Q',
        R: 'R',
        S: 'S',
        T: 'T',
        U: 'U',
        V: 'V',
        W: 'W',
        X: 'X',
        Y: 'Y',
        Z: 'Z',
    };
    KeysKey.SpecialKeys = {
        Meta: 'Meta',
        Shift: 'Shift',
        // ... more special keys if required
    };
    KeysKey.SpecialGroups = {
        MetaAndShift: function (event) { return event.metaKey && event.shiftKey; },
        MetaOrControl: function (event) { return event.metaKey || event.ctrlKey; },
        // ... more special groups if required
    };
    return KeysKey;
}());
//# sourceMappingURL=main.js.map