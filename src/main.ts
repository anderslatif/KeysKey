type KeyEvent = {
  key: string;
  metaKey: boolean;
  shiftKey: boolean;
  ctrlKey: boolean;
};

type KeyGroup = {
  type: "AND" | "OR",
  keys: (string | KeyGroup)[]
}

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
    // ... more special keys if required
  };

  static SpecialGroups = {
    MetaAndShift: (event: KeyEvent) => event.metaKey && event.shiftKey,
    MetaOrControl: (event: KeyEvent) => event.metaKey || event.ctrlKey,
    // ... more special groups if required
  };

  static is(event: KeyEvent, keys: Array<string | KeyGroup>): string | string[] {
    let results: string[] = [];
    
    const checkKey = (key: string | KeyGroup): string | string[] | null => {
      if (typeof key === 'string') {
          if (key === 'Meta' && event.metaKey) return key;
          if (key === 'Shift' && event.shiftKey) return key;
          if (key === 'Control' && event.ctrlKey) return key;
          if (event.key === key) return key;
          return null;
      } else if (key.type === 'AND') {
          const andKeys = key.keys.map(checkKey).filter(k => k !== null);
          return andKeys.length === key.keys.length ? andKeys.flat() : null;
      } else if (key.type === 'OR') {
          for (const k of key.keys) {
              const orKey = checkKey(k);
              if (orKey !== null) return orKey;
          }
      }
      return null;
    };
    
    for (let key of keys) {
        if (checkKey(key)) {
            if (typeof key === 'string') {
                results.push(key);
            } else {
                results.push(...key.keys.filter(k => typeof k === 'string') as string[]);
            }
        }
    }
    
    if (results.length === 1) {
        return results[0];
    } else if (results.length > 1) {
        return results;
    }
    return '';
  }

  static And(...keys: Array<string | KeyGroup>): KeyGroup {
      return { type: "AND", keys };
  }

  static Or(...keys: Array<string | KeyGroup>): KeyGroup {
      return { type: "OR", keys };
  }
}

