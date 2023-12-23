<img src="https://github.com/anderslatif/KeysKey/blob/main/KeysKeyLogo.png" alt="logo" width="200"/>

# KeysKey

[![NPM Version][npm-version-image]][npm-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![Test CI](https://github.com/anderslatif/KeysKey/actions/workflows/test.yml/badge.svg)](https://github.com/anderslatif/KeysKey/actions/workflows/test.yml)

Provides the key to your keys.

Clean and readable interface for OS agnostic Keyboard mappings without the usual quirks.

https://www.npmjs.com/package/keyskey

## Motivation

**Purpose**: Streamlines key event handling in web development.

**Use Cases**: For web games, HTML Canvas, and global key presses in Electron-like web-based software.

**Current Issue**: At the time when I started to need this, existing libraries were not user-friendly and did not produce readable code.

**Solution**: Provides a clear, readable method to detect specific key presses, simplifying cross-platform key event management.


## Demo

[Demo](https://anderslatif.github.io/KeysKey/)

## Documentation

Since this library uses TypeScript just import and explore by letting your IntelliSense guide you. 

## Basic Usage

Get the event from `keydown`, `keyup`, `keypress` and populate it as the first argument always:

```javascript
import KeysKey from "keyskey";

window.onkeydown = (event) => {
  const result = KeysKey.Is(event, "A");
  // assuming the letter A has been pressed
  console.log(result); // [ 'A' ]
};
```

The following examples will feature a hard coded object called event that mimics the dispatched DOM event to show the values being pressed and held.  

All methods return undefined when there is no match:

```javascript
import KeysKey from "keyskey";

const event = { key: 'A', metaKey: false, shiftKey: false, ctrlKey: false };
const result = KeysKey.Is(event, "a");
console.log(result); // // undefined
```

Can give an array of strings instead of KeysKey constants:

```javascript
import KeysKey from "keyskey";

const event = { key: 'A', metaKey: false, shiftKey: false, ctrlKey: false };  
const result = KeysKey.Or(event, ["A", "a"]);
console.log(result); //  [ 'A' ]

```

Also works as a variadic function:

```javascript
import KeysKey from "keyskey";

const event = { key: '1', metaKey: false, shiftKey: true, ctrlKey: false };
const result = KeysKey.And(event, KeysKey.Number.One, KeysKey.Modifier.Shift);
console.log(result) // [ '1', "Shift" ]
```

Example of a special key combo:

```javascript
import KeysKey from "keyskey";

const event = { key: 'A', metaKey: false, shiftKey: true, ctrlKey: true };
const result = KeysKey.SpecialCombos.isControlAndShift(event);
console.log(result); // [ 'Control', 'Shift' ]
```

Another example of a special key combo:

```javascript
import KeysKey from "keyskey";

const event = { key: '8', metaKey: false, shiftKey: false, ctrlKey: false };
const result = KeysKey.SpecialCombos.isDigit(event);
console.log(result); // [ '8' ]
```

## Full Documentation

[Generated Docs from JS Docstrings contain all the types.](https://anderslatif.github.io/KeysKey/generated_docs/)

### Library Methods

| Function Name | Parameters      | Explanation                                              |
|---------------|-----------------|----------------------------------------------------------|
| `KeysKey.Is`  | `event`, `keys` | Checks if keys match the provided event.                 |
| `KeysKey.And` | `event`, `keys` | Takes a single key string, array of keys or operates as a variadic function. |
| `KeysKey.Or`  | `event`, `keys` | True if at least one of the keys match the event.        |

Note on .And, .is, and .Or methods:

These functions can take a single key string, an array of keys, or operate as a variadic function.
The event parameter typically represents a keyboard event.
The keys parameter can be a single key string, an array of key strings, or multiple separate key string arguments.
The functions assess the keys against the event and return a boolean value based on the specific matching criteria (exact match, all keys match, or at least one key matches).

### Special Combos

These can be targetted through: `KeysKey.SpecialCombos.`:


| Function Name          | Parameters         | Explanation |
|------------------------|--------------------|-------------|
| `isAltAndControl`      | `event: KeyEvent`  | Returns `["Alt", "Control"]` if both Alt and Control keys are pressed, otherwise `undefined`. |
| `isAltAndShift`        | `event: KeyEvent`  | Returns `["Alt", "Shift"]` if both Alt and Shift keys are pressed, otherwise `undefined`. |
| `isAltKey`             | `event: KeyEvent`  | Returns `["Alt"]` if Alt key is pressed, otherwise `undefined`. |
| `isAltOrShift`         | `event: KeyEvent`  | Returns `["Alt", "Shift"]` if either Alt or Shift key is pressed, otherwise `undefined`. |
| `isControlAndShift`    | `event: KeyEvent`  | Returns `["Control", "Shift"]` if both Control and Shift keys are pressed, otherwise `undefined`. |
| `isControlOrShift`     | `event: KeyEvent`  | Returns `["Control", "Shift"]` if either Control or Shift key is pressed, otherwise `undefined`. |
| `isDelete`             | `event: KeyEvent`  | Returns `[event.key]` if the Delete key is pressed (key code 46), otherwise `undefined`. |
| `isDigit`              | `event: KeyEvent`  | Returns `[event.key]` if a digit (0-9) is pressed, otherwise `undefined`. |
| `isFunctionKey`        | `event: KeyEvent`  | Returns `[event.key]` if a function key (F1-F12) is pressed, otherwise `undefined`. |
| `isEnglishLetter`      | `event: KeyEvent`  | Returns `[event.key]` if a letter (A-Z, a-z) is pressed, otherwise `undefined`. |
| `isLowercaseLetter`    | `event: KeyEvent`  | Returns `[event.key]` if a lowercase letter (a-z) is pressed, otherwise `undefined`. |
| `isMediaControl`       | `event: KeyEvent`  | Returns `[event.key]` if a media control key is pressed, otherwise `undefined`. |
| `isMetaAndControl`     | `event: KeyEvent`  | Returns `["Meta", "Control"]` if both Meta and Control keys are pressed, otherwise `undefined`. |
| `isMetaAndShift`       | `event: KeyEvent`  | Returns `["Meta", "Shift"]` if both Meta and Shift keys are pressed, otherwise `undefined`. |
| `isMetaOrControl`      | `event: KeyEvent`  | Returns `["Meta", "Control"]` if either Meta or Control key is pressed, otherwise `undefined`. |
| `isMetaOrShift`        | `event: KeyEvent`  | Returns `["Meta", "Shift"]` if either Meta or Shift key is pressed, otherwise `undefined`. |
| `isModifier`           | `event: KeyEvent`  | Returns `[event.key]` if any modifier key (Meta, Shift, Control, Alt) is pressed, otherwise `undefined`. |
| `isNavigationKey`      | `event: KeyEvent`  | Returns `[event.key]` if a navigation key is pressed, otherwise `undefined`. |
| `isNonEnglishLetter`   | `event: KeyEvent`  | Returns `[event.key]` if a non-English letter is pressed, otherwise `undefined`. |
| `isSpecialCharacter`   | `event: KeyEvent`  | Returns `[event.key]` if a special character is pressed, otherwise `undefined`. |
| `isUppercaseLetter`    | `event: KeyEvent`  | Returns `[event.key]` if an uppercase letter (A-Z) is pressed, otherwise `undefined`. |
| `isWhitespace`         | `event: KeyEvent`  | Returns `[event.key]` if a whitespace key (Space, Tab) is pressed, otherwise `undefined`. |


### Types

| Type               | Explanation                                      |
|--------------------|--------------------------------------------------|
| `Number`           | Numbers                                          |
| `Letter`           | Alphabetic characters                            |
| `SpecialCharacter` | Non-alphanumeric characters (e.g., !, @, #, $)   |
| `WhiteSpace`       | Spaces and line control characters (Enter, Space, Tab) |
| `Multimedia`       | Keys for media control (Play, Pause, Volume)     |
| `Lock`             | Toggle keys (CapsLock, NumLock, ScrollLock)      |
| `Function`         | Function keys (F1, F2, ..., F12)                 |
| `Navigation`       | Arrow keys, Page Up/Down, Home, End              |
| `Editing`          | Insert, Delete, Backspace, etc.                  |
| `Modifier`         | Shift, Ctrl, Alt, Windows/Command keys           |
| `SpecialKeysGroup` | Combination of all above keys except Number and Letter |
| `AllKeys`          | Includes all key types above                           |

## Issues

Feel free to create an [issue](https://github.com/anderslatif/KeysKey/issues). 




[npm-version-image]: https://img.shields.io/npm/v/keyskey.svg
[npm-url]: https://www.npmjs.com/package/keyskey
[npm-install-size-image]: https://packagephobia.com/badge?p=keyskey
[npm-install-size-url]: https://packagephobia.com/result?p=keyskey