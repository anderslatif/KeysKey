import { KeyEventEnum as KeyEvent, NumberEnum, UppercaseLetterEnum, LowercaseLetterEnum, SpecialKeysEnum, SpecialGroupsEnum, SpecialCombosList } from "./enums.js";
import { unpackNestedArrays } from "./util.js";



/**
 * This is the main class of the library. It contains all the methods to check if a key event matches a key or a combination of keys. 
 * */
class KeysKey {

  public static Number: typeof NumberEnum = NumberEnum;
  public static UppercaseLetter: typeof UppercaseLetterEnum = UppercaseLetterEnum;
  public static LowercaseLetter: typeof LowercaseLetterEnum = LowercaseLetterEnum;
  public static SpecialKeys: typeof SpecialKeysEnum = SpecialKeysEnum;
  public static SpecialGroups: typeof SpecialGroupsEnum = SpecialGroupsEnum;

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

      if (SpecialCombosList.includes(key as string)) {
        return [key];
        // todo: Consider how to best handle special combos.
        // if (Object.values(KeysKey.SpecialGroups).includes(key as any)) {
        //   const specialGroup = key as keyof typeof KeysKey.SpecialGroups;
        //   const specialGroupResult = KeysKey.SpecialGroups[specialGroup](event);
        //   console.log(specialGroup);
        //   if (specialGroupResult !== null) {
        //     matchedKeys.push(...specialGroupResult);
        //   }
        // }   
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
        

        if (key === "Meta" && event.metaKey) matchedKeys.push(key);
        if (key === "Shift" && event.shiftKey) matchedKeys.push(key);
        if (key === "Control" && event.ctrlKey) matchedKeys.push(key);
      } 
    }
    return matchedKeys;
  }
}

export default KeysKey;
