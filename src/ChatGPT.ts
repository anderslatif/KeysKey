class KeysKey {
    static SpecialKeys = {
      Meta: 'Meta',
      Shift: 'Shift',
      Control: 'Control'
    };
  
    static SpecialGroups = {
      MetaAndShift: [KeysKey.SpecialKeys.Meta, KeysKey.SpecialKeys.Shift],
      MetaOrControl: [KeysKey.SpecialKeys.Meta, KeysKey.SpecialKeys.Control]
    };
  
    static Letter = {
      A: 'KeyA',
      B: 'KeyB'
    };
  
    static Number = {
      One: 'Digit1',
      Two: 'Digit2',
      Three: 'Digit3'
    };
  
    static Group(specialKeys: Array<string>, letter: string) {
      return [...specialKeys, letter];
    }
  
    static is(event: any, keys: Array<string | Array<string>>) {
      return keys.some(key => {
        if (Array.isArray(key)) {
          return key.every(subKey => event.code === subKey);
        } else {
          return event.code === key;
        }
      });
    }
  }
  
  export default KeysKey;