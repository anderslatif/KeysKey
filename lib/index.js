import { Number, Letter, SpecialCharacter, WhiteSpace, Multimedia, Lock, Navigation, Editing, Modifier, FunctionKeys, SpecialKeysGroup, AllKeysGroup } from "./types.js";
import { unpackNestedArrays, getUniqueValues, countElementsInNestedArray } from "./util.js";
import { SpecialCombos } from "./specialCombos.js";
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
     * Basically just a wrapper for the .And method but it's a more intuitive name when checking for a single key.
     * @param {KeyEvent} event - The DOM event that was triggered.
     * @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
     * @returns {Array<string> | undefined} - Returns an array of keys that matched the event. If no key matched, returns undefined.
     */
    static Is(event, ...keys) {
        return this.And(event, keys);
    }
    /**
     * Checks if all the keys match the provided event.
     * @param {KeyEvent} event - The DOM event that was triggered.
     * @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
     * @returns {Array<string> | undefined} - Returns an array of keys that matched the event. If no key matched, returns undefined.
     */
    static And(event, ...keys) {
        if (!event)
            throw new Error("No event provided as the first parameter.");
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
    static OptimizedAnd(event, ...keys) {
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
    static Or(event, ...keys) {
        if (!event)
            throw new Error("No event provided as the first parameter.");
        const matchedKeys = getUniqueValues(this.matchEventWithKeys(event, ...keys));
        const isSame = matchedKeys.length === countElementsInNestedArray(keys);
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
            else if (Object.values(KeysKey.Modifier).includes(key)) {
                // 1. First make sure to iterate over the modifier keys to check if any of them were pressed
                if (key === "Control" && event.ctrlKey) {
                    matchedKeys.push("Control");
                }
                else if (key === "Alt" && event.altKey) {
                    matchedKeys.push("Alt");
                }
                else if (key === "Meta" && event.metaKey) {
                    matchedKeys.push("Meta");
                }
                else if (key === "Shift" && event.shiftKey) {
                    matchedKeys.push("Shift");
                }
                // 2. Before considering that the modifier keys is held down
                if (event.key === "Control" || event.ctrlKey) {
                    matchedKeys.push("Control");
                }
                else if (event.key === "Alt" || event.altKey) {
                    matchedKeys.push("Alt");
                }
                else if (event.key === "Meta" || event.metaKey) {
                    matchedKeys.push("Meta");
                }
                else if (event.key === "Shift" || event.shiftKey) {
                    console.log(key);
                    matchedKeys.push("Shift");
                }
            }
            else if (Object.values(KeysKey.SpecialKeysGroup).includes(key) && event.key === key) {
                matchedKeys.push(key);
            }
            else if (Object.values(KeysKey.AllKeys).includes(key) && event.key === key) {
                matchedKeys.push(key);
            }
        }
        return matchedKeys;
    }
}
KeysKey.Number = Number;
KeysKey.Letter = Letter;
KeysKey.SpecialCharacter = SpecialCharacter;
KeysKey.WhiteSpace = WhiteSpace;
KeysKey.Multimedia = Multimedia;
KeysKey.Lock = Lock;
KeysKey.FunctionKeys = FunctionKeys;
KeysKey.Navigation = Navigation;
KeysKey.Editing = Editing;
KeysKey.Modifier = Modifier;
KeysKey.SpecialKeysGroup = SpecialKeysGroup;
KeysKey.AllKeys = AllKeysGroup;
KeysKey.debugMode = false;
KeysKey.optimizedAndMode = false;
KeysKey.SpecialCombos = SpecialCombos;
export default KeysKey;
//# sourceMappingURL=index.js.map