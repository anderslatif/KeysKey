import { KeyEventEnum as KeyEvent, NumberEnum, UppercaseLetterEnum, LowercaseLetterEnum, SpecialKeysEnum } from "../src/enums.js";
/**
 * This is the main class of the library. It contains all the methods to check if a key event matches a key or a combination of keys.
 * */
declare class KeysKey {
    static Number: typeof NumberEnum;
    static UppercaseLetter: typeof UppercaseLetterEnum;
    static LowercaseLetter: typeof LowercaseLetterEnum;
    static SpecialKeys: typeof SpecialKeysEnum;
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
     * @param {KeyEvent} event - The DOM event that was triggered.
     *  @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
     * @returns {Array<string> | null} - Returns an array of keys that matched the event. If no key matched, returns null.
     */
    static is(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] | null;
    /**
     * Checks if all the keys match the provided event.
     * @param {KeyEvent} event - The DOM event that was triggered.
     *  @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
     * @returns {Array<string> | null} - Returns an array of keys that matched the event. If no key matched, returns null.
     */
    static And(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] | null;
    /**
   * Checks if keys match the provided event. If one key doesn't match it immediately terminates and does nto provide a full list of matches. This is faster than the And method.
   * @param {KeyEvent} event - The DOM event that was triggered.
   *  @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
   * @returns {Array<string> | null} - Returns an array of keys that matched the event. Returns null immediately if one key doesn't match.
   */
    static OptimizedAnd(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] | null;
    /**
   * Checks if one of the keys matches the provided event.
   * @param {KeyEvent} event - The DOM event that was triggered.
   *  @param {Array<KeysKey>} keys - A list of keys to check against the event. Can be provided as an array, KeysKeys groups (And / Or) or just lose arguments (will be interpreted as And).
   * @returns {Array<string> | null} - Returns an array of keys that matched the event. If no key matched, returns null.
   */
    static Or(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] | null;
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
    static SpecialGroups: {
        isAltAndControl: (event: KeyEvent) => string[];
        isAltAndShift: (event: KeyEvent) => string[];
        isAltKey: (event: KeyEvent) => string[];
        isAltOrShift: (event: KeyEvent) => string[];
        isControlAndShift: (event: KeyEvent) => string[];
        isControlOrShift: (event: KeyEvent) => string[];
        isDelete: (event: KeyEvent) => string[];
        isDigit: (event: KeyEvent) => string[];
        isEnter: (event: KeyEvent) => string[];
        isEscape: (event: KeyEvent) => string[];
        isFunctionKey: (event: KeyEvent) => string[];
        isInsert: (event: KeyEvent) => string[];
        isLetter: (event: KeyEvent) => string[];
        isLowercaseLetter: (event: KeyEvent) => string[];
        isMediaControl: (event: KeyEvent) => string[];
        isMetaAndControl: (event: KeyEvent) => string[];
        isMetaAndShift: (event: KeyEvent) => string[];
        isMetaOrControl: (event: KeyEvent) => string[];
        isMetaOrShift: (event: KeyEvent) => string[];
        isModifier: (event: KeyEvent) => string[];
        isNavigationKey: (event: KeyEvent) => string[] | null;
        isNonEnglishLetter: (event: KeyEvent) => string[];
        isSpecialCharacter: (event: KeyEvent) => string[];
        isUppercaseLetter: (event: KeyEvent) => string[];
        isWhitespace: (event: KeyEvent) => string[];
    };
    /**
     * For internal use by the exposed methods. Checks if a list of keys match the provided event.
     * */
    private static matchEventWithKeys;
}
export default KeysKey;
//# sourceMappingURL=index.d.ts.map