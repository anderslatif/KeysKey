import KeysKey from "./index.js";
import { KeyEventEnum as KeyEvent } from "./types.js";
/**
   * A collection of functions within the `KeysKey` object that assess special key group combinations in key events.
   *
   * The `SpecialCombos` object contains various methods to check for specific combinations of keys being pressed
   * during a `KeyEvent`. Each method takes a `KeyEvent` as an argument and returns a boolean indicating whether
   * the specific key combination is active.
   *
   * Usage Example:
   * `KeysKey.SpecialCombos.isMetaAndShift(event)`
   *
   * Methods:
    * - `isAltAndControl(event: KeyEvent): KeysKey[] | undefined`
    *   Returns ['Alt', 'Control'] if both Alt and Control keys are pressed, undefined otherwise.
    *
    * - `isAltAndShift(event: KeyEvent): KeysKey[] | undefined`
    *   Returns ['Alt', 'Shift'] if both Alt and Shift keys are pressed, undefined otherwise.
    *
    * - `isAltKey(event: KeyEvent): KeysKey[] | undefined`
    *   Returns ['Alt'] if the Alt key is pressed, undefined otherwise.
    *
    * - `isAltOrShift(event: KeyEvent): KeysKey[] | undefined`
    *   Returns ['Alt', 'Shift'] if either Alt or Shift key is pressed, undefined otherwise.
    *
    * - `isControlAndShift(event: KeyEvent): KeysKey[] | undefined`
    *   Returns ['Control', 'Shift'] if both Control and Shift keys are pressed, undefined otherwise.
    *
    * - `isControlOrShift(event: KeyEvent): KeysKey[] | undefined`
    *   Returns ['Control', 'Shift'] if either Control or Shift key is pressed, undefined otherwise.
    *
    * - `isDelete(event: KeyEvent): KeysKey[] | undefined`
    *   Returns the key name if the Delete key is pressed, undefined otherwise.
    *
    * - `isDigit(event: KeyEvent): KeysKey[] | undefined`
    *   Returns the key name if a digit (0-9) is pressed, undefined otherwise.
    *
    * - `isFunctionKey(event: KeyEvent): KeysKey[] | undefined`
    *   Returns the key name if a function key (F1-F12) is pressed, undefined otherwise.
    *
    * - `isEnglishLetter(event: KeyEvent): KeysKey[] | undefined`
    *   Returns the key name if a letter (A-Z, a-z) is pressed, undefined otherwise.
    *
    * - `isLowercaseLetter(event: KeyEvent): KeysKey[] | undefined`
    *   Returns the key name if a lowercase letter (a-z) is pressed, undefined otherwise.
    *
    * - `isMediaControl(event: KeyEvent): KeysKey[] | undefined`
    *   Returns the key name if a media control key is pressed, undefined otherwise.
    *
    * - `isMetaAndControl(event: KeyEvent): KeysKey[] | undefined`
    *   Returns ['Meta', 'Control'] if both Meta and Control keys are pressed, undefined otherwise.
    *
    * - `isMetaAndShift(event: KeyEvent): KeysKey[] | undefined`
    *   Returns ['Meta', 'Shift'] if both Meta and Shift keys are pressed, undefined otherwise.
    *
    * - `isMetaOrControl(event: KeyEvent): KeysKey[] | undefined`
    *   Returns ['Meta', 'Control'] if either Meta or Control key is pressed, undefined otherwise.
    *
    * - `isMetaOrShift(event: KeyEvent): KeysKey[] | undefined`
    *   Returns ['Meta', 'Shift'] if either Meta or Shift key is pressed, undefined otherwise.
    *
    * - `isModifier(event: KeyEvent): KeysKey[] | undefined`
    *   Returns the key name if a modifier key (Meta, Shift, Control, Alt) is pressed, undefined otherwise.
    *
    * - `isNavigationKey(event: KeyEvent): KeysKey[] | undefined`
    *   Returns the key name if a navigation key is pressed, undefined otherwise.
    *
    * - `isNonEnglishLetter(event: KeyEvent): KeysKey[] | undefined`
    *   Returns the key name if a non-English letter is pressed, undefined otherwise.
    *
    * - `isSpecialCharacter(event: KeyEvent): KeysKey[] | undefined`
    *   Returns the key name if a special character is pressed, undefined otherwise.
    *
    * - `isUppercaseLetter(event: KeyEvent): KeysKey[] | undefined`
    *   Returns the key name if an uppercase letter (A-Z) is pressed, undefined otherwise.
    *
    * - `isWhitespace(event: KeyEvent): KeysKey[] | undefined`
    *   Returns the key name if a whitespace key (space or tab) is pressed, undefined otherwise.
  */
export declare const SpecialCombos: {
    isDigit: (event: KeyEvent) => KeysKey[] | undefined;
    isFunctionKey: (event: KeyEvent) => string[];
    isEnglishLetter: (event: KeyEvent) => string[];
    isLowercaseLetter: (event: KeyEvent) => string[];
    isUppercaseLetter: (event: KeyEvent) => string[];
    isSpecialCharacter: (event: KeyEvent) => string[];
    isWhitespace: (event: KeyEvent) => string[];
    isMediaControl: (event: KeyEvent) => string[];
    isModifier: (event: KeyEvent) => any[];
    isNavigationKey: (event: KeyEvent) => string[] | undefined;
    isNonEnglishLetter: (event: KeyEvent) => string[];
    isAltAndControl: (event: KeyboardEvent) => ("Alt" | "Control")[] | undefined;
    isAltOrControl: (event: KeyboardEvent) => ("Alt" | "Control")[] | undefined;
    isAltAndShift: (event: KeyboardEvent) => ("Alt" | "Shift")[] | undefined;
    isAltOrShift: (event: KeyboardEvent) => ("Alt" | "Shift")[] | undefined;
    isControlAndShift: (event: KeyboardEvent) => ("Control" | "Shift")[] | undefined;
    isControlOrShift: (event: KeyboardEvent) => ("Control" | "Shift")[] | undefined;
    isMetaAndControl: (event: KeyboardEvent) => ("Meta" | "Control")[] | undefined;
    isMetaOrControl: (event: KeyboardEvent) => ("Meta" | "Control")[] | undefined;
    isMetaAndShift: (event: KeyboardEvent) => ("Meta" | "Shift")[] | undefined;
    isMetaOrShift: (event: KeyboardEvent) => ("Meta" | "Shift")[] | undefined;
};
//# sourceMappingURL=specialCombos.d.ts.map