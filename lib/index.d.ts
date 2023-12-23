import { KeyEventEnum as KeyEvent, Number, Letter, SpecialCharacter, WhiteSpace, Multimedia, Lock, Navigation, Editing, Modifier, FunctionKeys, SpecialKeysGroup, AllKeysGroup } from "./types.js";
/**
 * This is the main class of the library. It contains all the methods to check if a key event matches a key or a combination of keys.
 * */
declare class KeysKey {
    static Number: typeof Number;
    static Letter: typeof Letter;
    static SpecialCharacter: typeof SpecialCharacter;
    static WhiteSpace: typeof WhiteSpace;
    static Multimedia: typeof Multimedia;
    static Lock: typeof Lock;
    static FunctionKeys: typeof FunctionKeys;
    static Navigation: typeof Navigation;
    static Editing: typeof Editing;
    static Modifier: typeof Modifier;
    static SpecialKeysGroup: typeof SpecialKeysGroup;
    static AllKeys: typeof AllKeysGroup;
    static debugMode: boolean;
    static optimizedAndMode: boolean;
    /**
     * Creates a new instance of the KeysKey class.
     *
     * @param {boolean} [enableDebugMode=false] - Whether to enable debug mode. When debug mode is enabled,
     * additional console logs will be displayed. This may result in some performance issues.
     * It's recommended to disable debug mode in a production environment.
     */
    constructor(enableDebugMode?: boolean);
    /**
     * Checks if keys match the provided event.
     * Basically just a wrapper for the .And method but it's a more intuitive name when checking for a single key.
     * @param {KeyEvent} event - The DOM event that was triggered.
     * @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
     * @returns {Array<string> | undefined} - Returns an array of keys that matched the event. If no key matched, returns undefined.
     */
    static Is(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] | undefined;
    /**
     * Checks if all the keys match the provided event.
     * @param {KeyEvent} event - The DOM event that was triggered.
     * @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
     * @returns {Array<string> | undefined} - Returns an array of keys that matched the event. If no key matched, returns undefined.
     */
    static And(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] | undefined;
    /**
   * Checks if keys match the provided event. If one key doesn't match it immediately terminates and does nto provide a full list of matches. This is faster than the And method.
   * @param {KeyEvent} event - The DOM event that was triggered.
   * @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
   * @returns {Array<string> | undefined} - Returns an array of keys that matched the event. Returns undefined immediately if one key doesn't match.
   */
    static OptimizedAnd(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] | undefined;
    /**
   * Checks if one of the keys matches the provided event.
   * @param {KeyEvent} event - The DOM event that was triggered.
   * @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
   * @returns {Array<string> | undefined} - Returns an array of keys that matched the event. If no key matched, returns undefined.
   */
    static Or(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] | undefined;
    static SpecialCombos: {
        isDigit: (event: KeyEvent) => KeysKey[];
        isFunctionKey: (event: KeyEvent) => string[];
        isLetter: (event: KeyEvent) => string[];
        isLowercaseLetter: (event: KeyEvent) => string[];
        isUppercaseLetter: (event: KeyEvent) => string[];
        isSpecialCharacter: (event: KeyEvent) => string[];
        isWhitespace: (event: KeyEvent) => string[];
        isMediaControl: (event: KeyEvent) => string[];
        isModifier: (event: KeyEvent) => any[];
        isNavigationKey: (event: KeyEvent) => string[];
        isNonEnglishLetter: (event: KeyEvent) => string[];
        isAltAndControl: (event: KeyboardEvent) => ("Alt" | "Control")[];
        isAltOrControl: (event: KeyboardEvent) => ("Alt" | "Control")[];
        isAltAndShift: (event: KeyboardEvent) => ("Alt" | "Shift")[];
        isAltOrShift: (event: KeyboardEvent) => ("Alt" | "Shift")[];
        isControlAndShift: (event: KeyboardEvent) => ("Control" | "Shift")[];
        isControlOrShift: (event: KeyboardEvent) => ("Control" | "Shift")[];
        isMetaAndControl: (event: KeyboardEvent) => ("Control" | "Meta")[];
        isMetaOrControl: (event: KeyboardEvent) => ("Control" | "Meta")[];
        isMetaAndShift: (event: KeyboardEvent) => ("Shift" | "Meta")[];
        isMetaOrShift: (event: KeyboardEvent) => ("Shift" | "Meta")[];
    };
    /**
     * For internal use by the exposed methods. Checks if a list of keys match the provided event.
     * */
    private static matchEventWithKeys;
}
export default KeysKey;
//# sourceMappingURL=index.d.ts.map