import { expect } from 'chai';
import KeysKey from "../lib/index.js";


describe('Special Combos eitherOr', () => {

  // Tests for isAltAndControl method
  it('should return Alt and Control when Alt pressed and Control held', () => {
    const event = { key: 'Alt', metaKey: false, shiftKey: false, ctrlKey: true, altKey: false };
    const result = KeysKey.SpecialCombos.isAltAndControl(event);
    expect(result).to.deep.equal(['Alt', 'Control']);
  });

  it('should return Alt and Control when Alt held and Control pressed', () => {
    const event = { key: 'Control', metaKey: false, shiftKey: false, ctrlKey: true, altKey: true };
    const result = KeysKey.SpecialCombos.isAltAndControl(event);
    expect(result).to.deep.equal(['Alt', 'Control']);
  });

  it('should return undefined when only Alt pressed', () => {
    const event = { key: 'Alt', metaKey: false, shiftKey: false, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isAltAndControl(event);
    expect(result).to.be.undefined;
  });

  it('should return undefined when only Control pressed', () => {
    const event = { key: 'Control', metaKey: false, shiftKey: false, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isAltAndControl(event);
    expect(result).to.be.undefined;
  });

  it('should return undefined when neither Alt nor Control pressed', () => {
    const event = { key: 'A', metaKey: false, shiftKey: false, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isAltAndControl(event);
    expect(result).to.be.undefined;
  });

  // Tests for isAltAndShift method
  it('should return Alt and Shift when both Alt and Shift are pressed', () => {
    const event = { key: 'Shift', metaKey: false, shiftKey: true, ctrlKey: false, altKey: true };
    const result = KeysKey.SpecialCombos.isAltAndShift(event);
    expect(result).to.deep.equal(['Alt', 'Shift']);
  });

  it('should return undefined when only Alt is pressed', () => {
    const event = { key: 'Alt', metaKey: false, shiftKey: false, ctrlKey: false, altKey: true };
    const result = KeysKey.SpecialCombos.isAltAndShift(event);
    expect(result).to.be.undefined;
  });

  it('should return undefined when only Shift is pressed', () => {
    const event = { key: 'Shift', metaKey: false, shiftKey: true, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isAltAndShift(event);
    expect(result).to.be.undefined;
  });

  it('should return undefined when neither Alt nor Shift is pressed', () => {
    const event = { key: 'A', metaKey: false, shiftKey: false, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isAltAndShift(event);
    expect(result).to.be.undefined;
  });

  // Tests for isAltOrShift method
  it('should return Alt and Shift when both Alt and Shift are pressed', () => {
    const event = { key: 'Shift', metaKey: false, shiftKey: true, ctrlKey: false, altKey: true };
    const result = KeysKey.SpecialCombos.isAltOrShift(event);
    expect(result).to.deep.equal(['Alt', 'Shift']);
  });

  it('should return Alt when only Alt is pressed', () => {
    const event = { key: 'Alt', metaKey: false, shiftKey: false, ctrlKey: false, altKey: true };
    const result = KeysKey.SpecialCombos.isAltOrShift(event);
    expect(result).to.deep.equal(['Alt']);
  });

  it('should return Shift when only Shift is pressed', () => {
    const event = { key: 'Shift', metaKey: false, shiftKey: true, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isAltOrShift(event);
    expect(result).to.deep.equal(['Shift']);
  });

  it('should return undefined when neither Alt nor Shift is pressed', () => {
    const event = { key: 'A', metaKey: false, shiftKey: false, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isAltOrShift(event);
    expect(result).to.be.undefined;
  });

  // Tests for isControlAndShift method
  it('should return Control and Shift when both Control and Shift are pressed', () => {
    const event = { key: 'Shift', metaKey: false, shiftKey: true, ctrlKey: true, altKey: false };
    const result = KeysKey.SpecialCombos.isControlAndShift(event);
    expect(result).to.deep.equal(['Control', 'Shift']);
  });

  it('should return undefined when only Control is pressed', () => {
    const event = { key: 'Control', metaKey: false, shiftKey: false, ctrlKey: true, altKey: false };
    const result = KeysKey.SpecialCombos.isControlAndShift(event);
    expect(result).to.be.undefined;
  });

  it('should return undefined when only Shift is pressed', () => {
    const event = { key: 'Shift', metaKey: false, shiftKey: true, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isControlAndShift(event);
    expect(result).to.be.undefined;
  });

  it('should return undefined when neither Control nor Shift is pressed', () => {
    const event = { key: 'A', metaKey: false, shiftKey: false, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isControlAndShift(event);
    expect(result).to.be.undefined;
  });

  // Tests for isControlOrShift method
  it('should return Control and Shift when both Control and Shift are pressed', () => {
    const event = { key: 'Shift', metaKey: false, shiftKey: true, ctrlKey: true, altKey: false };
    const result = KeysKey.SpecialCombos.isControlOrShift(event);
    expect(result).to.deep.equal(['Control', 'Shift']);
  });

  it('should return Control when only Control is pressed', () => {
    const event = { key: 'Control', metaKey: false, shiftKey: false, ctrlKey: true, altKey: false };
    const result = KeysKey.SpecialCombos.isControlOrShift(event);
    expect(result).to.deep.equal(['Control']);
  });

  it('should return Shift when only Shift is pressed', () => {
    const event = { key: 'Shift', metaKey: false, shiftKey: true, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isControlOrShift(event);
    expect(result).to.deep.equal(['Shift']);
  });

  it('should return undefined when neither Control nor Shift is pressed', () => {
    const event = { key: 'A', metaKey: false, shiftKey: false, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isControlOrShift(event);
    expect(result).to.be.undefined;
  });

  // Tests for isMetaAndControl method
  it('should return Meta and Control when both Meta and Control are pressed', () => {
    const event = { key: 'Control', metaKey: true, shiftKey: false, ctrlKey: true, altKey: false };
    const result = KeysKey.SpecialCombos.isMetaAndControl(event);
    expect(result).to.deep.equal(['Meta', 'Control']);
  });

  it('should return undefined when only Meta is pressed', () => {
    const event = { key: 'Meta', metaKey: true, shiftKey: false, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isMetaAndControl(event);
    expect(result).to.be.undefined;
  });

  it('should return undefined when only Control is pressed', () => {
    const event = { key: 'Control', metaKey: false, shiftKey: false, ctrlKey: true, altKey: false };
    const result = KeysKey.SpecialCombos.isMetaAndControl(event);
    expect(result).to.be.undefined;
  });

  it('should return undefined when neither Meta nor Control is pressed', () => {
    const event = { key: 'A', metaKey: false, shiftKey: false, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isMetaAndControl(event);
    expect(result).to.be.undefined;
  });

  // Tests for isMetaOrControl method
  it('should return Meta and Control when both Meta and Control are pressed', () => {
    const event = { key: 'Control', metaKey: true, shiftKey: false, ctrlKey: true, altKey: false };
    const result = KeysKey.SpecialCombos.isMetaOrControl(event);
    expect(result).to.deep.equal(['Meta', 'Control']);
  });

  it('should return Meta when only Meta is pressed', () => {
    const event = { key: 'Meta', metaKey: true, shiftKey: false, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isMetaOrControl(event);
    expect(result).to.deep.equal(['Meta']);
  });
  
  it('should return Control when only Control is pressed', () => {
    const event = { key: 'Control', metaKey: false, shiftKey: false, ctrlKey: true, altKey: false };
    const result = KeysKey.SpecialCombos.isMetaOrControl(event);
    expect(result).to.deep.equal(['Control']);
  });
  
  it('should return undefined when neither Meta nor Control is pressed', () => {
    const event = { key: 'A', metaKey: false, shiftKey: false, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isMetaOrControl(event);
    expect(result).to.be.undefined;
  });
  
  // Tests for isMetaAndShift method
  it('should return Meta and Shift when both Meta and Shift are pressed', () => {
    const event = { key: 'Shift', metaKey: true, shiftKey: true, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isMetaAndShift(event);
    expect(result).to.deep.equal(['Meta', 'Shift']);
  });

  it('should return undefined when only Meta is pressed', () => {
    const event = { key: 'Meta', metaKey: true, shiftKey: false, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isMetaAndShift(event);
    expect(result).to.be.undefined;
  });

  it('should return undefined when only Shift is pressed', () => {
    const event = { key: 'Shift', metaKey: false, shiftKey: true, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isMetaAndShift(event);
    expect(result).to.be.undefined;
  });

  it('should return undefined when neither Meta nor Shift is pressed', () => {
    const event = { key: 'A', metaKey: false, shiftKey: false, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isMetaAndShift(event);
    expect(result).to.be.undefined;
  });

  // Tests for isMetaOrShift method
  it('should return Meta and Shift when both Meta and Shift are pressed', () => {
    const event = { key: 'Shift', metaKey: true, shiftKey: true, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isMetaOrShift(event);
    expect(result).to.deep.equal(['Meta', 'Shift']);
  });

  it('should return Meta when only Meta is pressed', () => {
    const event = { key: 'Meta', metaKey: true, shiftKey: false, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isMetaOrShift(event);
    expect(result).to.deep.equal(['Meta']);
  });

  it('should return Shift when only Shift is pressed', () => {
    const event = { key: 'Shift', metaKey: false, shiftKey: true, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isMetaOrShift(event);
    expect(result).to.deep.equal(['Shift']);
  });

  it('should return undefined when neither Meta nor Shift is pressed', () => {
    const event = { key: 'A', metaKey: false, shiftKey: false, ctrlKey: false, altKey: false };
    const result = KeysKey.SpecialCombos.isMetaOrShift(event);
    expect(result).to.be.undefined;
  });

});

