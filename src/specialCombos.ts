import KeysKey from "./index.js";
import { KeyEventEnum as KeyEvent } from "./types.js";

const eitherOr = {
  isAltAndControl: (event: KeyboardEvent): ("Alt" | "Control")[] | undefined => 
  (event.altKey || event.key === 'Alt') && (event.ctrlKey || event.key === 'Control') ? ["Alt", "Control"] : undefined,
  isAltOrControl: (event: KeyboardEvent): ("Alt" | "Control")[] | undefined => 
      (event.altKey || event.key === 'Alt') && (event.ctrlKey || event.key === 'Control') ? ["Alt", "Control"] :
      (event.altKey || event.key === 'Alt') ? ["Alt"] :
      (event.ctrlKey || event.key === 'Control') ? ["Control"] : 
      undefined,

  isAltAndShift: (event: KeyboardEvent): ("Alt" | "Shift")[] | undefined => 
      (event.altKey || event.key === 'Alt') && (event.shiftKey || event.key === 'Shift') ? ["Alt", "Shift"] : undefined,
  isAltOrShift: (event: KeyboardEvent): ("Alt" | "Shift")[] | undefined => 
      (event.altKey || event.key === 'Alt') && (event.shiftKey || event.key === 'Shift') ? ["Alt", "Shift"] :
      (event.altKey || event.key === 'Alt') ? ["Alt"] :
      (event.shiftKey || event.key === 'Shift') ? ["Shift"] : 
      undefined,

  isControlAndShift: (event: KeyboardEvent): ("Control" | "Shift")[] | undefined => 
      (event.ctrlKey || event.key === 'Control') && (event.shiftKey || event.key === 'Shift') ? ["Control", "Shift"] : undefined,
  isControlOrShift: (event: KeyboardEvent): ("Control" | "Shift")[] | undefined => 
      (event.ctrlKey || event.key === 'Control') && (event.shiftKey || event.key === 'Shift') ? ["Control", "Shift"] :
      (event.ctrlKey || event.key === 'Control') ? ["Control"] :
      (event.shiftKey || event.key === 'Shift') ? ["Shift"] : 
      undefined,

  isMetaAndControl: (event: KeyboardEvent): ("Meta" | "Control")[] | undefined => 
      (event.metaKey || event.key === 'Meta') && (event.ctrlKey || event.key === 'Control') ? ["Meta", "Control"] : undefined,
  isMetaOrControl: (event: KeyboardEvent): ("Meta" | "Control")[] | undefined => 
      (event.metaKey || event.key === 'Meta') && (event.ctrlKey || event.key === 'Control') ? ["Meta", "Control"] :
      (event.metaKey || event.key === 'Meta') ? ["Meta"] :
      (event.ctrlKey || event.key === 'Control') ? ["Control"] : 
      undefined,
  
  isMetaAndShift: (event: KeyboardEvent): ("Meta" | "Shift")[] | undefined => 
      (event.metaKey || event.key === 'Meta') && (event.shiftKey || event.key === 'Shift') ? ["Meta", "Shift"] : undefined,
  isMetaOrShift: (event: KeyboardEvent): ("Meta" | "Shift")[] | undefined => 
      (event.metaKey || event.key === 'Meta') && (event.shiftKey || event.key === 'Shift') ? ["Meta", "Shift"] :
      (event.metaKey || event.key === 'Meta') ? ["Meta"] :
      (event.shiftKey || event.key === 'Shift') ? ["Shift"] : 
      undefined,
  
};

const groups = {
  isDigit: (event: KeyEvent): KeysKey[] | undefined => {
    const keyString: string = "" + event.key;
    const keyCode = keyString.charCodeAt(0);
    if (keyCode >= 48 && keyCode <= 57) { // ASCII values for '0' to '9'
        return [event.key];
    }
  },
  isFunctionKey: (event: KeyEvent) => event.keyCode >= 112 && event.keyCode <= 123 ? [event.key] : undefined,
  isLetter: (event: KeyEvent) => {
    const keyString: string = "" + event.key;
    const keyCode = keyString.charCodeAt(0);
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
        return [event.key];
    }
  },
  isLowercaseLetter: (event: KeyEvent) => {
    const keyString: string = "" + event.key;
    const keyCode = keyString.charCodeAt(0);
    if (keyCode >= 97 && keyCode <= 122) { 
        return [event.key];
    }
  },
  isUppercaseLetter: (event: KeyEvent) => {
    const keyString: string = "" + event.key;
    const keyCode = keyString.charCodeAt(0);
    if (keyCode >= 65 && keyCode <= 90) { 
        return [event.key];
    }
  },
  isSpecialCharacter: (event: KeyEvent) => {
    const keyString: string = "" + event.key;
    const keyCode = keyString.charCodeAt(0);
    if ((keyCode >= 33 && keyCode <= 47) || (keyCode >= 58 && keyCode <= 64) || 
      (keyCode >= 91 && keyCode <= 96) || (keyCode >= 123 && keyCode <= 126)) { 
        return [event.key];
    }
    return undefined;
  },
  isWhitespace: (event: KeyEvent) => event.keyCode === 32 || event.keyCode === 9 ? [event.key] : undefined,
  isMediaControl: (event: KeyEvent) => event.keyCode >= 166 && event.keyCode <= 183 ? [event.key] : undefined,
  isModifier: (event: KeyEvent) => {
    const modifiers = [];
    if (event.shiftKey) modifiers.push('Shift');
    if (event.ctrlKey) modifiers.push('Control');
    if (event.altKey) modifiers.push('Alt');
    if (event.metaKey) modifiers.push('Meta');
    return modifiers.length > 0 ? modifiers : undefined;
  },
  isNavigationKey: (event: KeyEvent): string[] | undefined => event.keyCode >= 33 && event.keyCode <= 40 ? [event.key] : undefined,
  isNonEnglishLetter: (event: KeyEvent) => {
    const keyString: string = "" + event.key;
    if (/[^\x00-\x7F]/.test(keyString)) {
      return [event.key];
    }
    return undefined;
  }
};

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
    * - `isLetter(event: KeyEvent): KeysKey[] | undefined`
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
export const SpecialCombos = {
  ...eitherOr,
  ...groups,
};