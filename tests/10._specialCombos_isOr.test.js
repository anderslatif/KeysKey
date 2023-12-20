import { expect } from 'chai';
import KeysKey from "../lib/index.js";


describe('Testing Modifier keys', () => {

  // // isAltAndControl
  // it('should return Alt and Control when Alt pressed and Control held', () => {
  //   const event = { key: 'Alt', metaKey: false, shiftKey: false, ctrlKey: true };
  //   const result = KeysKey.SpecialCombos.isAltAndControl(event);
  //   expect(result).to.deep.equal(['Alt', 'Control']);
  // });

  // it('should return Alt and Control when Alt held and Control pressed', () => {
  //   const event = { key: 'Control', metaKey: false, shiftKey: false, ctrlKey: true };
  //   const result = KeysKey.SpecialCombos.isAltAndControl(event);
  //   expect(result).to.deep.equal(['Alt', 'Control']);
  // });

  // it('should return undefined when only Alt pressed', () => {
  //   const event = { key: 'Alt', metaKey: false, shiftKey: false, ctrlKey: false };
  //   const result = KeysKey.SpecialCombos.isAltAndControl(event);
  //   expect(result).to.be.undefined;
  // });

  // it('should return undefined when only Control pressed', () => {
  //   const event = { key: 'Control', metaKey: false, shiftKey: false, ctrlKey: false };
  //   const result = KeysKey.SpecialCombos.isAltAndControl(event);
  //   expect(result).to.be.undefined;
  // });

  // it('should return undefined when neither Alt nor Control pressed', () => {
  //   const event = { key: 'A', metaKey: false, shiftKey: false, ctrlKey: false };
  //   const result = KeysKey.SpecialCombos.isAltAndControl(event);
  //   expect(result).to.be.undefined;
  // });


});

