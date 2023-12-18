import { NumberEnum, LetterEnum, SpecialKeysEnum } from "./enums.js";
import { unpackNestedArrays, getUniqueValues } from "./util.js";
/**
 * This is the main class of the library. It contains all the methods to check if a key event matches a key or a combination of keys.
 * */
class KeysKey {
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
     * @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
     * @returns {Array<string> | undefined} - Returns an array of keys that matched the event. If no key matched, returns undefined.
     */
    static is(event, ...keys) {
        if (!Array.isArray(keys))
            throw new Error(`The second argument (keys) must be an array of strings or KeysKey constants.`);
        let matchingKeys = [];
        for (const keyGroup of keys) {
            if (Array.isArray(keyGroup)) {
                matchingKeys = this.And(event, ...keyGroup);
            }
            return getUniqueValues(matchingKeys)?.length === keys.length ? matchingKeys : undefined;
        }
    }
    /**
     * Checks if all the keys match the provided event.
     * @param {KeyEvent} event - The DOM event that was triggered.
     * @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
     * @returns {Array<string> | undefined} - Returns an array of keys that matched the event. If no key matched, returns undefined.
     */
    static And(event, ...keys) {
        const matchedKeys = this.matchEventWithKeys(event, keys);
        const same = getUniqueValues(matchedKeys).length === keys.length;
        return same ? matchedKeys : undefined;
    }
    /**
   * Checks if keys match the provided event. If one key doesn't match it immediately terminates and does nto provide a full list of matches. This is faster than the And method.
   * @param {KeyEvent} event - The DOM event that was triggered.
   * @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
   * @returns {Array<string> | undefined} - Returns an array of keys that matched the event. Returns undefined immediately if one key doesn't match.
   */
    static OptimizedAnd(event, ...keys) {
        this.optimizedAndMode = true;
        const matchedKeys = this.matchEventWithKeys(event, ...keys);
        const same = getUniqueValues(matchedKeys).length === keys.length;
        return same ? matchedKeys : undefined;
    }
    /**
   * Checks if one of the keys matches the provided event.
   * @param {KeyEvent} event - The DOM event that was triggered.
   * @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
   * @returns {Array<string> | undefined} - Returns an array of keys that matched the event. If no key matched, returns undefined.
   */
    static Or(event, ...keys) {
        const matchedKeys = this.matchEventWithKeys(event, ...keys);
        const isSame = getUniqueValues(matchedKeys).length === keys.length;
        const isIncludedIn = keys.map(key => matchedKeys.includes(key)).includes(true);
        return isSame || isIncludedIn ? matchedKeys : undefined;
    }
    /**
     * For internal use by the exposed methods. Checks if a list of keys match the provided event.
     * */
    static matchEventWithKeys(event, ...keys) {
        const matchedKeys = [];
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
            if (Object.values(KeysKey.Number).includes(key)
                || Object.values(KeysKey.Letter).includes(key)) {
                if (event.key === key) {
                    matchedKeys.push(key);
                }
                else if (this.optimizedAndMode) {
                    return undefined;
                }
            }
            else if (Object.values(KeysKey.SpecialKeys).includes(key)) {
                // todo finish
                if (key === "Meta" && event.metaKey)
                    matchedKeys.push(key);
                if (key === "Shift" && event.shiftKey)
                    matchedKeys.push(key);
                if (key === "Control" && event.ctrlKey)
                    matchedKeys.push(key);
            }
        }
        return matchedKeys;
    }
}
KeysKey.Number = NumberEnum;
KeysKey.Letter = LetterEnum;
KeysKey.SpecialKeys = SpecialKeysEnum;
KeysKey.debugMode = false;
KeysKey.optimizedAndMode = false;
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
KeysKey.SpecialGroups = {
    isAltAndControl: (event) => event.altKey && event.ctrlKey ? ["Alt", "Control"] : undefined,
    isAltAndShift: (event) => event.altKey && event.shiftKey ? ["Alt", "Shift"] : undefined,
    isAltKey: (event) => event.altKey ? ["Alt"] : undefined,
    isAltOrShift: (event) => event.altKey || event.shiftKey ? ["Alt", "Shift"] : undefined,
    isControlAndShift: (event) => event.ctrlKey && event.shiftKey ? ["Control", "Shift"] : undefined,
    isControlOrShift: (event) => event.ctrlKey || event.shiftKey ? ["Control", "Shift"] : undefined,
    isDelete: (event) => event.keyCode === 46 ? [event.key] : undefined,
    isDigit: (event) => {
        const keyString = "" + event.key;
        const keyCode = keyString.charCodeAt(0);
        if (keyCode >= 48 && keyCode <= 57) { // ASCII values for '0' to '9'
            return [event.key];
        }
    },
    isEnter: (event) => event.keyCode === 13 ? [event.key] : undefined,
    isEscape: (event) => event.keyCode === 27 ? [event.key] : undefined,
    isFunctionKey: (event) => event.keyCode >= 112 && event.keyCode <= 123 ? [event.key] : undefined,
    isInsert: (event) => event.keyCode === 45 ? [event.key] : undefined,
    isLetter: (event) => {
        const keyString = "" + event.key;
        const keyCode = keyString.charCodeAt(0);
        if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
            return [event.key];
        }
    },
    isLowercaseLetter: (event) => {
        const keyString = "" + event.key;
        const keyCode = keyString.charCodeAt(0);
        if (keyCode >= 97 && keyCode <= 122) {
            return [event.key];
        }
    },
    isMediaControl: (event) => event.keyCode >= 166 && event.keyCode <= 183 ? [event.key] : undefined,
    isMetaAndControl: (event) => event.metaKey && event.ctrlKey ? ["Meta", "Control"] : undefined,
    isMetaAndShift: (event) => event.metaKey && event.shiftKey ? ["Meta", "Shift"] : undefined,
    isMetaOrControl: (event) => event.metaKey || event.ctrlKey ? ["Meta", "Control"] : undefined,
    isMetaOrShift: (event) => event.metaKey || event.shiftKey ? ["Meta", "Shift"] : undefined,
    isModifier: (event) => event.metaKey || event.shiftKey || event.ctrlKey || event.altKey ? [event.key] : undefined,
    isNavigationKey: (event) => event.keyCode >= 33 && event.keyCode <= 40 ? [event.key] : undefined,
    isNonEnglishLetter: (event) => {
        const keyString = "" + event.key;
        if (/[^\x00-\x7F]/.test(keyString)) {
            return [event.key];
        }
        return undefined;
    },
    isSpecialCharacter: (event) => {
        const keyString = "" + event.key;
        const keyCode = keyString.charCodeAt(0);
        if ((keyCode >= 33 && keyCode <= 47) || (keyCode >= 58 && keyCode <= 64) ||
            (keyCode >= 91 && keyCode <= 96) || (keyCode >= 123 && keyCode <= 126)) {
            return [event.key];
        }
        return undefined;
    },
    isUppercaseLetter: (event) => {
        const keyString = "" + event.key;
        const keyCode = keyString.charCodeAt(0);
        if (keyCode >= 65 && keyCode <= 90) {
            return [event.key];
        }
    },
    isWhitespace: (event) => event.keyCode === 32 || event.keyCode === 9 ? [event.key] : undefined,
};
export default KeysKey;
//# sourceMappingURL=index.js.map