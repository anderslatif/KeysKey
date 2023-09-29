import keyEnums from "./keyEnums.js";
const { SpecialKeys, NumberKeys } = keyEnums;

const verboseMode = true;

type KeyEvent = {
  key: string;
  metaKey: boolean;
  shiftKey: boolean;
  ctrlKey: boolean;
};

const checkSpecialKey = (key: string, event: KeyEvent) => {
  if (key === "Meta" && event.metaKey) return "Meta";
  if (key === "Shift" && event.shiftKey) return "Shift";
  if (key === "Control" && event.ctrlKey) return "Control";
  return null;
};

const checkCharKey = (key: string, event: KeyEvent) => {
  if (event.key === key) return key;
  return null;
};


class KeysKey {

  static Number = {
    Zero: '0',
    One: '1',
    Two: '2',
    Three: '3',
    Four: '4',
    Five: '5',
    Six: '6',
    Seven: '7',
    Eight: '8',
    Nine: '9',
  };

  static Letter = {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D',
    E: 'E',
    F: 'F',
    G: 'G',
    H: 'H',
    I: 'I',
    J: 'J',
    K: 'K',
    L: 'L',
    M: 'M',
    N: 'N',
    O: 'O',
    P: 'P',
    Q: 'Q',
    R: 'R',
    S: 'S',
    T: 'T',
    U: 'U',
    V: 'V',
    W: 'W',
    X: 'X',
    Y: 'Y',
    Z: 'Z',
 };

  static SpecialKeys = {
    Meta: 'Meta',
    Shift: 'Shift',
    Control: 'Ctrl',
  };

  static SpecialGroups = {
    MetaAndShift: (event: KeyEvent) => event.metaKey && event.shiftKey ? ["Meta", "Shift"] : null,
    MetaOrShift: (event: KeyEvent) => event.metaKey || event.shiftKey ? ["Meta", "Shift"] : null,
    MetaAndControl: (event: KeyEvent) => event.metaKey && event.ctrlKey ? ["Meta", "Control"] : null,
    MetaOrControl: (event: KeyEvent) => event.metaKey || event.ctrlKey ? ["Meta", "Control"] : null,
    ControlAndShift: (event: KeyEvent) => event.ctrlKey && event.shiftKey ? ["Control", "Shift"] : null,
    ControlOrShift: (event: KeyEvent) => event.ctrlKey || event.shiftKey ? ["Control", "Shift"] : null,
  };

  static is(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] | null {
    if (!Array.isArray(keys)) throw new Error(`The second argument (keys) must be an array of strings or KeysKey constants.`);

    let matchingKeys: KeysKey[] = [];

    for (const keyGroup of keys) {

      if (Array.isArray(keyGroup)) { 
        matchingKeys = this.And(event, ...keyGroup);
      } 

      return matchingKeys.length === keys.length ? matchingKeys : null;
    }
  }


  static And(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] | null {
    const matchedKeys = this.matchEventWithKeys(event, ...keys);
    
    const same = matchedKeys.length === keys.length;
    
    return same ? matchedKeys : null;
  }
  
  static Or(event: KeyEvent, ...keys:  KeysKey[]): KeysKey[] | null {

    const matchedKeys = this.matchEventWithKeys(event, ...keys);
    
    const same = matchedKeys.length === keys.length;
    const includesIn = keys.map(key => matchedKeys.includes(key)).includes(true);
    
    return same || includesIn ? matchedKeys : null;
  }

  static matchEventWithKeys(event: KeyEvent, ...keys: KeysKey[]): KeysKey[] {
    const matchedKeys: KeysKey[] = [];

    for (const key of keys) {
      if (verboseMode && typeof key === "function") {
        throw new Error("A function was provided. The key must be a string");
      }
      if (verboseMode) {
        const unpackedKeys = unpackNestedArrays(keys);
        if (unpackedKeys.length !== keys.length) {
          console.log("Warning, keys contains nested arrays. Unpacking only works in verbose mode.");
          keys = unpackedKeys;
        }
      }
         

      if (Object.values(KeysKey.Number).includes(key as string) 
      || Object.values(KeysKey.Letter).includes(key as string)) {
        if (event.key === key) {
          matchedKeys.push(key);
        }
      } else if (Object.values(KeysKey.SpecialKeys).includes(key as string)) {
        if (key === "Meta" && event.metaKey) matchedKeys.push(key);
        if (key === "Shift" && event.shiftKey) matchedKeys.push(key);
        if (key === "Control" && event.ctrlKey) matchedKeys.push(key);
      } else if (Object.values(KeysKey.SpecialGroups).includes(key as any)) { 
        const specialGroup = key as keyof typeof KeysKey.SpecialGroups;
        const specialGroupResult = KeysKey.SpecialGroups[specialGroup](event);
        if (specialGroupResult !== null) {
          matchedKeys.push(...specialGroupResult);
        }
      }
    }
    return matchedKeys;
  }
}

function unpackNestedArrays(list: KeysKey[]) {
  return list.reduce((acc, element) => {
    if (Array.isArray(element)) {
      acc.push(...element);
    } else {
      acc.push(element);
    }
    return acc;
  }, [] as any);
}

export default KeysKey;
