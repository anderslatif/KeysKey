import { KeyEventEnum as KeyEvent, NumberEnum, UppercaseLetterEnum, LowercaseLetterEnum, SpecialKeysEnum } from "./enums.js";
import { unpackNestedArrays } from "./util.js";



/**
 * This is the main class of the library. It contains all the methods to check if a key event matches a key or a combination of keys. 
 * */
class KeysKey {

  public static Number: typeof NumberEnum = NumberEnum;
  public static UppercaseLetter: typeof UppercaseLetterEnum = UppercaseLetterEnum;
  public static LowercaseLetter: typeof LowercaseLetterEnum = LowercaseLetterEnum;
  public static SpecialKeys: typeof SpecialKeysEnum = SpecialKeysEnum;

  public static debugMode = false;
  public static optimizedAndMode = false;

  /**
   * Creates a new instance of the KeysKey class.
   *
   * @param {boolean} [enableDebugMode=false] - Whether to enable debug mode. When debug mode is enabled,
   * additional console logs will be displayed. This may result in some performance issues.
   * It's recommended to disable debug mode in a production environment.
   */
  constructor(enableDebugMode = false) {
    if (enableDebugMode) {
      KeysKey.debugMode = enableDebugMode;
      console.info("Debug mode is enabled. This will cause some performance issues. Disable debug mode in production.");
    }
  }

  /**
   * Checks if keys match the provided event.
   * @param {KeyEvent} event - The DOM event that was triggered.
   *  @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
   * @returns {Array<string> | null} - Returns an array of keys that matched the event. If no key matched, returns null.
   */
  static is(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] | null {
    if (!Array.isArray(keys)) throw new Error(`The second argument (keys) must be an array of strings or KeysKey constants.`);

    let matchingKeys: KeysKey[] = [];

    for (const keyGroup of keys) {
      if (Array.isArray(keyGroup)) { 
        matchingKeys = this.And(event, ...keyGroup);
      } 

      return matchingKeys?.length === keys.length ? matchingKeys : null;
    }
  }

  /**
   * Checks if all the keys match the provided event.
   * @param {KeyEvent} event - The DOM event that was triggered.
   *  @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
   * @returns {Array<string> | null} - Returns an array of keys that matched the event. If no key matched, returns null.
   */
  public static And(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] | null {
    const matchedKeys = this.matchEventWithKeys(event, keys);
    
    const same = matchedKeys?.length === keys.length;
    return same ? matchedKeys : null;
  }

    /**
   * Checks if keys match the provided event. If one key doesn't match it immediately terminates and does nto provide a full list of matches. This is faster than the And method.
   * @param {KeyEvent} event - The DOM event that was triggered.
   *  @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
   * @returns {Array<string> | null} - Returns an array of keys that matched the event. Returns null immediately if one key doesn't match.
   */
  public static OptimizedAnd(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] | null {
    this.optimizedAndMode = true;
    const matchedKeys = this.matchEventWithKeys(event, ...keys);

    const same = matchedKeys?.length === keys.length;
    
    return same ? matchedKeys : null;
  }
  
    /**
   * Checks if one of the keys matches the provided event.
   * @param {KeyEvent} event - The DOM event that was triggered.
   *  @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
   * @returns {Array<string> | null} - Returns an array of keys that matched the event. If no key matched, returns null.
   */
  public static Or(event: KeyEvent, ...keys:  KeysKey[]): KeysKey[] | null {

    const matchedKeys = this.matchEventWithKeys(event, ...keys);
    
    const isSame = matchedKeys?.length === keys.length;
    const isIncludedIn = keys.map(key => matchedKeys.includes(key)).includes(true);
    
    return isSame || isIncludedIn ? matchedKeys : null;
  }

  /**
   * A collection of functions within the `KeysKey` object that assess special key group combinations in key events.
   *
   * The `SpecialGroups` object contains various methods to check for specific combinations of keys being pressed 
   * during a `KeyEvent`. Each method takes a `KeyEvent` as an argument and returns a boolean indicating whether 
   * the specific key combination is active.
   *
   * Usage Example:
   * `KeysKey.SpecialGroups.isMetaAndShift(event)`
   *
   * Methods:
  * - `isDigit(event: KeyEvent): KeysKey[] | null`
  *   Returns an array of `KeysKey` if the key event corresponds to a digit, or null otherwise.
  *
  * - `isLetter(event: KeyEvent): KeysKey[] | null`
  *   Returns an array of `KeysKey` if the key event corresponds to a letter, or null otherwise.
  *
  * - `isLowerCase(event: KeyEvent): KeysKey[] | null`
  *   Returns an array of `KeysKey` if the key event corresponds to a lowercase letter, or null otherwise.
  *
  * - `isUppercaseLetter(event: KeyEvent): KeysKey[] | null`
  *   Returns an array of `KeysKey` if the key event corresponds to an uppercase letter, or null otherwise.
  *
  * - `isNonEnglishLetter(event: KeyEvent): KeysKey[] | null`
  *   Returns an array of `KeysKey` if the key event corresponds to a non-English letter, or null otherwise.
  *
  * - `isMetaAndShift(event: KeyEvent): KeysKey
   * 
   * Additional methods follow a similar pattern, analyzing different key combinations.
   */
  public static SpecialGroups = {
    isAltAndControl: (event: KeyEvent) => event.altKey && event.ctrlKey ? ["Alt", "Control"] : null,
    isAltAndShift: (event: KeyEvent) => event.altKey && event.shiftKey ? ["Alt", "Shift"] : null,
    isAltKey: (event: KeyEvent) => event.altKey ? ["Alt"] : null,
    isAltOrShift: (event: KeyEvent) => event.altKey || event.shiftKey ? ["Alt", "Shift"] : null,
    isControlAndShift: (event: KeyEvent) => event.ctrlKey && event.shiftKey ? ["Control", "Shift"] : null,
    isControlOrShift: (event: KeyEvent) => event.ctrlKey || event.shiftKey ? ["Control", "Shift"] : null,
    isDelete: (event: KeyEvent) => event.keyCode === 46 ? [event.key] : null,
    isDigit: (event: KeyEvent) => {
      const keyString: string = "" + event.key;
      const keyCode = keyString.charCodeAt(0);
      if (keyCode >= 48 && keyCode <= 57) { // ASCII values for '0' to '9'
          return [event.key];
      }
    },
    isEnter: (event: KeyEvent) => event.keyCode === 13 ? [event.key] : null,
    isEscape: (event: KeyEvent) => event.keyCode === 27 ? [event.key] : null,
    isFunctionKey: (event: KeyEvent) => event.keyCode >= 112 && event.keyCode <= 123 ? [event.key] : null,
    isInsert: (event: KeyEvent) => event.keyCode === 45 ? [event.key] : null,
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
    isMediaControl: (event: KeyEvent) => event.keyCode >= 166 && event.keyCode <= 183 ? [event.key] : null,
    isMetaAndControl: (event: KeyEvent) => event.metaKey && event.ctrlKey ? ["Meta", "Control"] : null,
    isMetaAndShift: (event: KeyEvent) => event.metaKey && event.shiftKey ? ["Meta", "Shift"] : null,
    isMetaOrControl: (event: KeyEvent) => event.metaKey || event.ctrlKey ? ["Meta", "Control"] : null,
    isMetaOrShift: (event: KeyEvent) => event.metaKey || event.shiftKey ? ["Meta", "Shift"] : null,
    isModifier: (event: KeyEvent) => event.metaKey || event.shiftKey || event.ctrlKey || event.altKey ? [event.key] : null,
    isNavigationKey: (event: KeyEvent): string[] | null => event.keyCode >= 33 && event.keyCode <= 40 ? [event.key] : null,
    isNonEnglishLetter: (event: KeyEvent) => {
      const keyString: string = "" + event.key;
      if (/[^\x00-\x7F]/.test(keyString)) {
        return [event.key];
      }
      return null;
    },
    isSpecialCharacter: (event: KeyEvent) => {
      const keyString: string = "" + event.key;
      const keyCode = keyString.charCodeAt(0);
      if ((keyCode >= 33 && keyCode <= 47) || (keyCode >= 58 && keyCode <= 64) || 
        (keyCode >= 91 && keyCode <= 96) || (keyCode >= 123 && keyCode <= 126)) { 
          return [event.key];
      }
      return null;
    },
    isUppercaseLetter: (event: KeyEvent) => {
      const keyString: string = "" + event.key;
      const keyCode = keyString.charCodeAt(0);
      if (keyCode >= 65 && keyCode <= 90) { 
          return [event.key];
      }
    },
    isWhitespace: (event: KeyEvent) => event.keyCode === 32 || event.keyCode === 9 ? [event.key] : null,
  };

  /**
   * For internal use by the exposed methods. Checks if a list of keys match the provided event.
   * */
  private static matchEventWithKeys(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] {
    const matchedKeys: KeysKey[] = [];

     if (this.debugMode) {
      const unpackedKeys = unpackNestedArrays(keys);
      if (unpackedKeys.length !== keys.length) {
        console.log("Warning, keys contains nested arrays. Unpacking only works in debug mode.");
        keys = unpackedKeys;
      }
    }

 
    for (const key of keys) {

      if (this.debugMode && typeof key === "function") {
        throw new Error("A function was provided. The key must be a string");
      }
      
      if (Array.isArray(key)) {
        const unpackedKeys = unpackNestedArrays(keys);
        return this.matchEventWithKeys(event, ...unpackedKeys);
      }

      if (Object.values(KeysKey.Number).includes(key as NumberEnum) 
      || Object.values(KeysKey.UppercaseLetter).includes(key as UppercaseLetterEnum)
      || Object.values(KeysKey.LowercaseLetter).includes(key as LowercaseLetterEnum)) {
        if (event.key === key) {
          matchedKeys.push(key);
        } else if (this.optimizedAndMode) {
          return null;
        }

      } else if (Object.values(KeysKey.SpecialKeys).includes(key as SpecialKeysEnum)) {
        

        if (key === "Meta" && event.metaKey && !matchedKeys.includes("Meta")) matchedKeys.push(key);
        if (key === "Shift" && event.shiftKey && !matchedKeys.includes("Shift")) matchedKeys.push(key);
        if (key === "Control" && event.ctrlKey && !matchedKeys.includes("Control")) matchedKeys.push(key);
      } 
    }
    
    return matchedKeys;
  }
}

export default KeysKey;
