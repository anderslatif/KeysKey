import { KeyEventEnum as KeyEvent, NumberKeysEnum, LetterKeysEnum, SpecialCharacterKeysEnum, WhiteSpaceKeysEnum, MultimediaKeysEnum, LockKeysEnum, FunctionKeysEnum, NavigationKeysEnum, EditingKeysEnum, ModifierKeysEnum, SpecialKeysGroup, AllKeysGroup } from "./enums.js";
/**
 * This is the main class of the library. It contains all the methods to check if a key event matches a key or a combination of keys.
 * */
declare class KeysKey {
    static Number: typeof NumberKeysEnum;
    static Letter: typeof LetterKeysEnum;
    static SpecialCharacter: typeof SpecialCharacterKeysEnum;
    static WhiteSpace: typeof WhiteSpaceKeysEnum;
    static Multimedia: typeof MultimediaKeysEnum;
    static Lock: typeof LockKeysEnum;
    static Function: typeof FunctionKeysEnum;
    static Navigation: typeof NavigationKeysEnum;
    static Editing: typeof EditingKeysEnum;
    static ModifierKeys: typeof ModifierKeysEnum;
    static SpecialKeysGroups: typeof SpecialKeysGroup;
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
    static SpecialCombos: {
        isAltAndControl: (event: KeyEvent) => string[];
        isAltAndShift: (event: KeyEvent) => string[];
        isAltKey: (event: KeyEvent) => string[];
        isAltOrShift: (event: KeyEvent) => string[];
        isControlAndShift: (event: KeyEvent) => string[];
        isControlOrShift: (event: KeyEvent) => string[];
        isDelete: (event: KeyEvent) => string[];
        isDigit: (event: KeyEvent) => string[];
        isFunctionKey: (event: KeyEvent) => string[];
        isLetter: (event: KeyEvent) => string[];
        isLowercaseLetter: (event: KeyEvent) => string[];
        isMediaControl: (event: KeyEvent) => string[];
        isMetaAndControl: (event: KeyEvent) => string[];
        isMetaAndShift: (event: KeyEvent) => string[];
        isMetaOrControl: (event: KeyEvent) => string[];
        isMetaOrShift: (event: KeyEvent) => string[];
        isModifier: (event: KeyEvent) => string[];
        isNavigationKey: (event: KeyEvent) => string[] | undefined;
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