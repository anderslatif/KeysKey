import { 
  KeyEventEnum as KeyEvent, 
  NumberKeysEnum, 
  LetterKeysEnum,   
  SpecialCharacterKeysEnum,
  WhiteSpaceKeysEnum,
  MultimediaKeysEnum,
  LockKeysEnum,
  FunctionKeysEnum,
  NavigationKeysEnum,
  EditingKeysEnum,
  ModifierKeysEnum,
  SpecialKeysGroup,
  AllKeysGroup } from "./types.js";
import { unpackNestedArrays, getUniqueValues, countElementsInNestedArray } from "./util.js";


/**
 * This is the main class of the library. It contains all the methods to check if a key event matches a key or a combination of keys. 
 * */
class KeysKey {

  public static Number: typeof NumberKeysEnum = NumberKeysEnum;
  public static Letter: typeof LetterKeysEnum = LetterKeysEnum;
  public static SpecialCharacter: typeof SpecialCharacterKeysEnum = SpecialCharacterKeysEnum;
  public static WhiteSpace: typeof WhiteSpaceKeysEnum = WhiteSpaceKeysEnum;
  public static Multimedia: typeof MultimediaKeysEnum = MultimediaKeysEnum;
  public static Lock: typeof LockKeysEnum = LockKeysEnum;
  public static Function: typeof FunctionKeysEnum = FunctionKeysEnum;
  public static Navigation: typeof NavigationKeysEnum = NavigationKeysEnum;
  public static Editing: typeof EditingKeysEnum = EditingKeysEnum;
  public static ModifierKeys: typeof ModifierKeysEnum = ModifierKeysEnum;
  public static SpecialKeysGroups: typeof SpecialKeysGroup = SpecialKeysGroup;
  public static AllKeys: typeof AllKeysGroup = AllKeysGroup;
  

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
   * Basically just a wrapper for the .And method but it's a more intuitive name when checking for a single key.
   * @param {KeyEvent} event - The DOM event that was triggered.
   * @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
   * @returns {Array<string> | undefined} - Returns an array of keys that matched the event. If no key matched, returns undefined.
   */
  static Is(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] | undefined {
    return this.And(event, keys);
  }

  /**
   * Checks if all the keys match the provided event.
   * @param {KeyEvent} event - The DOM event that was triggered.
   * @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
   * @returns {Array<string> | undefined} - Returns an array of keys that matched the event. If no key matched, returns undefined.
   */
  public static And(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] | undefined {
    if (!event) throw new Error("No event provided as the first parameter.");

    const matchedKeys = getUniqueValues(this.matchEventWithKeys(event, keys));

    const same = matchedKeys.length === countElementsInNestedArray(keys);
    return same ? matchedKeys : undefined;
  }

    /**
   * Checks if keys match the provided event. If one key doesn't match it immediately terminates and does nto provide a full list of matches. This is faster than the And method.
   * @param {KeyEvent} event - The DOM event that was triggered.
   * @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
   * @returns {Array<string> | undefined} - Returns an array of keys that matched the event. Returns undefined immediately if one key doesn't match.
   */
  public static OptimizedAnd(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] | undefined {
    this.optimizedAndMode = true;
    const matchedKeys = getUniqueValues(this.matchEventWithKeys(event, ...keys));

    const same = matchedKeys.length === countElementsInNestedArray(keys);
    
    return same ? matchedKeys : undefined;
  }
  
    /**
   * Checks if one of the keys matches the provided event.
   * @param {KeyEvent} event - The DOM event that was triggered.
   * @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
   * @returns {Array<string> | undefined} - Returns an array of keys that matched the event. If no key matched, returns undefined.
   */
  public static Or(event: KeyEvent, ...keys:  KeysKey[]): KeysKey[] | undefined {
    if (!event) throw new Error("No event provided as the first parameter.");

    const matchedKeys = getUniqueValues(this.matchEventWithKeys(event, ...keys));
    
    const isSame = matchedKeys.length === countElementsInNestedArray(keys);
    const isIncludedIn = keys.map(key => matchedKeys.includes(key)).includes(true);
    
    return isSame || isIncludedIn ? matchedKeys : undefined;
  }

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
  * - `isDigit(event: KeyEvent): KeysKey[] | undefined`
  *   Returns an array of `KeysKey` if the key event corresponds to a digit, or undefined otherwise.
  *
  * - `isLetter(event: KeyEvent): KeysKey[] | undefined`
  *   Returns an array of `KeysKey` if the key event corresponds to a letter, or undefined otherwise.
  *
  * - `isLowerCase(event: KeyEvent): KeysKey[] | undefined`
  *   Returns an array of `KeysKey` if the key event corresponds to a lowercase letter, or undefined otherwise.
  *
  * - `isUppercaseLetter(event: KeyEvent): KeysKey[] | undefined`
  *   Returns an array of `KeysKey` if the key event corresponds to an uppercase letter, or undefined otherwise.
  *
  * - `isNonEnglishLetter(event: KeyEvent): KeysKey[] | undefined`
  *   Returns an array of `KeysKey` if the key event corresponds to a non-English letter, or undefined otherwise.
  *
  * - `isMetaAndShift(event: KeyEvent): KeysKey
   * 
   * Additional methods follow a similar pattern, analyzing different key combinations.
   */
  public static SpecialCombos = {
    isAltAndControl: (event: KeyEvent) => event.altKey && event.ctrlKey ? ["Alt", "Control"] : undefined,
    isAltAndShift: (event: KeyEvent) => event.altKey && event.shiftKey ? ["Alt", "Shift"] : undefined,
    isAltKey: (event: KeyEvent) => event.altKey ? ["Alt"] : undefined,
    isAltOrShift: (event: KeyEvent) => event.altKey || event.shiftKey ? ["Alt", "Shift"] : undefined,
    isControlAndShift: (event: KeyEvent) => event.ctrlKey && event.shiftKey ? ["Control", "Shift"] : undefined,
    isControlOrShift: (event: KeyEvent) => event.ctrlKey || event.shiftKey ? ["Control", "Shift"] : undefined,
    isDelete: (event: KeyEvent) => event.keyCode === 46 ? [event.key] : undefined,
    isDigit: (event: KeyEvent) => {
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
    isMediaControl: (event: KeyEvent) => event.keyCode >= 166 && event.keyCode <= 183 ? [event.key] : undefined,
    isMetaAndControl: (event: KeyEvent) => event.metaKey && event.ctrlKey ? ["Meta", "Control"] : undefined,
    isMetaAndShift: (event: KeyEvent) => event.metaKey && event.shiftKey ? ["Meta", "Shift"] : undefined,
    isMetaOrControl: (event: KeyEvent) => event.metaKey || event.ctrlKey ? ["Meta", "Control"] : undefined,
    isMetaOrShift: (event: KeyEvent) => event.metaKey || event.shiftKey ? ["Meta", "Shift"] : undefined,
    isModifier: (event: KeyEvent) => event.metaKey || event.shiftKey || event.ctrlKey || event.altKey ? [event.key] : undefined,
    isNavigationKey: (event: KeyEvent): string[] | undefined => event.keyCode >= 33 && event.keyCode <= 40 ? [event.key] : undefined,
    isNonEnglishLetter: (event: KeyEvent) => {
      const keyString: string = "" + event.key;
      if (/[^\x00-\x7F]/.test(keyString)) {
        return [event.key];
      }
      return undefined;
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
    isUppercaseLetter: (event: KeyEvent) => {
      const keyString: string = "" + event.key;
      const keyCode = keyString.charCodeAt(0);
      if (keyCode >= 65 && keyCode <= 90) { 
          return [event.key];
      }
    },
    isWhitespace: (event: KeyEvent) => event.keyCode === 32 || event.keyCode === 9 ? [event.key] : undefined,
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

      if (Object.values(KeysKey.Number).includes(key as NumberKeysEnum) 
      || Object.values(KeysKey.Letter).includes(key as LetterKeysEnum)) {
        if (event.key === key) {
          matchedKeys.push(key);
        } else if (this.optimizedAndMode) {
          return undefined;
        }
      } else if (Object.values(KeysKey.ModifierKeys).includes(key as ModifierKeysEnum)) {
        console.log("Modifier key", key)
        // 1. First make sure to iterate over the modifier keys to check if any of them were pressed
        if (key === "Ctrl" && event.ctrlKey) {
          matchedKeys.push("Ctrl");
        } else if (key === "Alt" && event.altKey) {
          matchedKeys.push("Alt");
        } else if (key === "Meta" && event.metaKey) {
          matchedKeys.push("Meta");
        } else if (key === "Shift" && event.shiftKey) {
          matchedKeys.push("Shift");
        }
        // 2. Before considering that the modifier keys is held down
        if (event.key === "Ctrl" || event.ctrlKey) {
          matchedKeys.push("Ctrl");
        } else if (event.key === "Alt" || event.altKey) {
          matchedKeys.push("Alt");
        } else if (event.key === "Meta" || event.metaKey) {
          matchedKeys.push("Meta");
        } else if (event.key === "Shift" || event.shiftKey) {
          console.log(key)
          matchedKeys.push("Shift");
        }

      } else if (Object.values(KeysKey.SpecialKeysGroups).includes(key as any)) {
        matchedKeys.push(key);
      } else if (Object.values(KeysKey.AllKeys).includes(key as any)) {
        matchedKeys.push(key);
      }
    }
    
    return matchedKeys;
  }
}

export default KeysKey;
