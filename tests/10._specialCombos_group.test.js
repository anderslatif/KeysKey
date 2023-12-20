import { expect } from 'chai';
import KeysKey from "../lib/index.js";


describe('Testing Modifier keys', () => {

  // Tests for isDigit method
  it('should return the key when a digit key (0-9) is pressed', () => {
    for (let i = 0; i <= 9; i++) {
      const event = { key: `${i}` };
      const result = KeysKey.SpecialCombos.isDigit(event);
      expect(result).to.deep.equal([`${i}`]);
    }
  });

  it('should return undefined when a non-digit key is pressed', () => {
    const nonDigitKeys = ['a', '!', '@', '#', 'A', '[', '/', ' '];
    nonDigitKeys.forEach(key => {
      const event = { key: key };
      const result = KeysKey.SpecialCombos.isDigit(event);
      expect(result).to.be.undefined;
    });
  });

  // Tests for isFunctionKey method
  it('should return the key when a function key (F1-F12) is pressed', () => {
    for (let i = 112; i <= 123; i++) {
      const event = { keyCode: i, key: `F${i - 111}` };
      const result = KeysKey.SpecialCombos.isFunctionKey(event);
      expect(result).to.deep.equal([`F${i - 111}`]);
    }
  });

  it('should return undefined when a non-function key is pressed', () => {
    const nonFunctionKeys = [65, 48, 27]; // Example keyCodes for non-function keys
    nonFunctionKeys.forEach(keyCode => {
      const event = { keyCode: keyCode };
      const result = KeysKey.SpecialCombos.isFunctionKey(event);
      expect(result).to.be.undefined;
    });
  });

  // Tests for isLetter method
  it('should return the key when a letter key (A-Z, a-z) is pressed', () => {
    const letterKeys = [...Array(26).keys()].map(i => String.fromCharCode(i + 65)) // A-Z
                            .concat([...Array(26).keys()].map(i => String.fromCharCode(i + 97))); // a-z
    letterKeys.forEach(key => {
      const event = { key: key };
      const result = KeysKey.SpecialCombos.isLetter(event);
      expect(result).to.deep.equal([key]);
    });
  });

  it('should return undefined when a non-letter key is pressed', () => {
    const nonLetterKeys = ['1', '!', '@', '[', '/'];
    nonLetterKeys.forEach(key => {
      const event = { key: key };
      const result = KeysKey.SpecialCombos.isLetter(event);
      expect(result).to.be.undefined;
    });
  });

  // Tests for isLowercaseLetter method
  it('should return the key when a lowercase letter key (a-z) is pressed', () => {
    const lowercaseLetterKeys = [...Array(26).keys()].map(i => String.fromCharCode(i + 97)); // a-z
    lowercaseLetterKeys.forEach(key => {
      const event = { key: key };
      const result = KeysKey.SpecialCombos.isLowercaseLetter(event);
      expect(result).to.deep.equal([key]);
    });
  });

  it('should return undefined when a non-lowercase letter key is pressed', () => {
    const nonLowercaseLetterKeys = ['A', '1', '!', '[', '/'];
    nonLowercaseLetterKeys.forEach(key => {
      const event = { key: key };
      const result = KeysKey.SpecialCombos.isLowercaseLetter(event);
      expect(result).to.be.undefined;
    });
  });

  // Tests for isUppercaseLetter method
  it('should return the key when an uppercase letter key (A-Z) is pressed', () => {
    const uppercaseLetterKeys = [...Array(26).keys()].map(i => String.fromCharCode(i + 65)); // A-Z
    uppercaseLetterKeys.forEach(key => {
      const event = { key: key };
      const result = KeysKey.SpecialCombos.isUppercaseLetter(event);
      expect(result).to.deep.equal([key]);
    });
  });

  it('should return undefined when a non-uppercase letter key is pressed', () => {
    const nonUppercaseLetterKeys = ['a', '1', '!', '[', '/'];
    nonUppercaseLetterKeys.forEach(key => {
      const event = { key: key };
      const result = KeysKey.SpecialCombos.isUppercaseLetter(event);
      expect(result).to.be.undefined;
    });
  });

  // Tests for isSpecialCharacter method
  it('should return the key when a special character key is pressed', () => {
    const specialCharacterKeys = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', 
                                  ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
    specialCharacterKeys.forEach(key => {
      const event = { key: key };
      const result = KeysKey.SpecialCombos.isSpecialCharacter(event);
      expect(result).to.deep.equal([key]);
    });
  });

  it('should return undefined when a non-special character key is pressed', () => {
    const nonSpecialCharacterKeys = ['a', 'A', '1', '0', ' '];
    nonSpecialCharacterKeys.forEach(key => {
      const event = { key: key };
      const result = KeysKey.SpecialCombos.isSpecialCharacter(event);
      expect(result).to.be.undefined;
    });
  });

  // Tests for isWhitespace method
  it('should return the key when a whitespace key (Space or Tab) is pressed', () => {
    const whitespaceKeys = [{ keyCode: 32, key: ' ' }, { keyCode: 9, key: 'Tab' }];
    whitespaceKeys.forEach(({ keyCode, key }) => {
      const event = { keyCode: keyCode, key: key };
      const result = KeysKey.SpecialCombos.isWhitespace(event);
      expect(result).to.deep.equal([key]);
    });
  });

  it('should return undefined when a non-whitespace key is pressed', () => {
    const nonWhitespaceKeys = [{ keyCode: 65, key: 'A' }, { keyCode: 48, key: '0' }, { keyCode: 13, key: 'Enter' }];
    nonWhitespaceKeys.forEach(({ keyCode, key }) => {
      const event = { keyCode: keyCode, key: key };
      const result = KeysKey.SpecialCombos.isWhitespace(event);
      expect(result).to.be.undefined;
    });
  });

  // Tests for isWhitespace method
  it('should return the key when a whitespace key (Space or Tab) is pressed', () => {
    const whitespaceKeys = [{ keyCode: 32, key: ' ' }, { keyCode: 9, key: 'Tab' }];
    whitespaceKeys.forEach(({ keyCode, key }) => {
      const event = { keyCode: keyCode, key: key };
      const result = KeysKey.SpecialCombos.isWhitespace(event);
      expect(result).to.deep.equal([key]);
    });
  });

  it('should return undefined when a non-whitespace key is pressed', () => {
    const nonWhitespaceKeys = [{ keyCode: 65, key: 'A' }, { keyCode: 48, key: '0' }, { keyCode: 13, key: 'Enter' }];
    nonWhitespaceKeys.forEach(({ keyCode, key }) => {
      const event = { keyCode: keyCode, key: key };
      const result = KeysKey.SpecialCombos.isWhitespace(event);
      expect(result).to.be.undefined;
    });
  });

  // Tests for isMediaControl method
  it('should return the key when a media control key is pressed', () => {
    const mediaControlKeyCodes = Array.from({ length: 18 }, (_, i) => 166 + i); // 166 to 183
    mediaControlKeyCodes.forEach(keyCode => {
      const event = { keyCode: keyCode, key: `Key${keyCode}` };
      const result = KeysKey.SpecialCombos.isMediaControl(event);
      expect(result).to.deep.equal([`Key${keyCode}`]);
    });
  });

  it('should return undefined when a non-media control key is pressed', () => {
    const nonMediaControlKeys = [{ keyCode: 65, key: 'A' }, { keyCode: 32, key: ' ' }, { keyCode: 13, key: 'Enter' }];
    nonMediaControlKeys.forEach(({ keyCode, key }) => {
      const event = { keyCode: keyCode, key: key };
      const result = KeysKey.SpecialCombos.isMediaControl(event);
      expect(result).to.be.undefined;
    });
  });

  // Tests for isModifier method
  it('should return the appropriate modifiers when modifier keys are pressed', () => {
    const modifierCombinations = [
      { event: { shiftKey: true }, expected: ['Shift'] },
      { event: { ctrlKey: true }, expected: ['Control'] },
      { event: { altKey: true }, expected: ['Alt'] },
      { event: { metaKey: true }, expected: ['Meta'] },
      { event: { shiftKey: true, ctrlKey: true }, expected: ['Shift', 'Control'] },
      { event: { shiftKey: true, altKey: true }, expected: ['Shift', 'Alt'] },
      { event: { shiftKey: true, metaKey: true }, expected: ['Shift', 'Meta'] },
      { event: { ctrlKey: true, altKey: true }, expected: ['Control', 'Alt'] },
      { event: { ctrlKey: true, metaKey: true }, expected: ['Control', 'Meta'] },
      { event: { altKey: true, metaKey: true }, expected: ['Alt', 'Meta'] },
      { event: { shiftKey: true, ctrlKey: true, altKey: true }, expected: ['Shift', 'Control', 'Alt'] },
      { event: { shiftKey: true, ctrlKey: true, metaKey: true }, expected: ['Shift', 'Control', 'Meta'] },
      { event: { shiftKey: true, altKey: true, metaKey: true }, expected: ['Shift', 'Alt', 'Meta'] },
      { event: { ctrlKey: true, altKey: true, metaKey: true }, expected: ['Control', 'Alt', 'Meta'] },
      { event: { shiftKey: true, ctrlKey: true, altKey: true, metaKey: true }, expected: ['Shift', 'Control', 'Alt', 'Meta'] }
    ];

    modifierCombinations.forEach(({ event, expected }) => {
      const result = KeysKey.SpecialCombos.isModifier(event);
      expect(result).to.deep.equal(expected);
    });
  });

  it('should return undefined when no modifier keys are pressed', () => {
    const event = { shiftKey: false, ctrlKey: false, altKey: false, metaKey: false };
    const result = KeysKey.SpecialCombos.isModifier(event);
    expect(result).to.be.undefined;
  });

  // Tests for isNavigationKey method
  it('should return the key when a navigation key is pressed', () => {
    const navigationKeyCodes = Array.from({ length: 8 }, (_, i) => 33 + i); // 33 to 40
    const navigationKeys = ['PageUp', 'PageDown', 'End', 'Home', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];
    navigationKeyCodes.forEach((keyCode, index) => {
      const event = { keyCode: keyCode, key: navigationKeys[index] };
      const result = KeysKey.SpecialCombos.isNavigationKey(event);
      expect(result).to.deep.equal([navigationKeys[index]]);
    });
  });

  it('should return undefined when a non-navigation key is pressed', () => {
    const nonNavigationKeys = [{ keyCode: 65, key: 'A' }, { keyCode: 13, key: 'Enter' }, { keyCode: 27, key: 'Escape' }];
    nonNavigationKeys.forEach(({ keyCode, key }) => {
      const event = { keyCode: keyCode, key: key };
      const result = KeysKey.SpecialCombos.isNavigationKey(event);
      expect(result).to.be.undefined;
    });
  });

  // Tests for isNonEnglishLetter method
  it('should return the key when a non-English letter is pressed', () => {
    const nonEnglishLetters = ['ñ', 'é', 'ç', 'ü', 'ø', 'ß', 'ğ'];
    nonEnglishLetters.forEach(key => {
      const event = { key: key };
      const result = KeysKey.SpecialCombos.isNonEnglishLetter(event);
      expect(result).to.deep.equal([key]);
    });
  });

  it('should return undefined when an English letter or non-letter key is pressed', () => {
    const englishLettersAndNonLetters = ['a', 'Z', '1', '@', ' '];
    englishLettersAndNonLetters.forEach(key => {
      const event = { key: key };
      const result = KeysKey.SpecialCombos.isNonEnglishLetter(event);
      expect(result).to.be.undefined;
    });
  });

});
