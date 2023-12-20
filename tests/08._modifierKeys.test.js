import { expect } from 'chai';
import KeysKey from "../lib/index.js";


describe('Testing Modifier keys', () => {

  // Ctrl
  it('should return Ctrl when Ctrl pressed', () => {
    const event = { key: 'Control', metaKey: false, shiftKey: false, ctrlKey: false };
    const result = KeysKey.Is(event, KeysKey.ModifierKeys.Control);
    expect(result).to.deep.equal(['Control']);
  });

  it('should return Ctrl when Ctrl held', () => {
    const event = { key: 'A', metaKey: false, shiftKey: false, ctrlKey: true };
    const result = KeysKey.Is(event, KeysKey.ModifierKeys.Control);
    expect(result).to.deep.equal(['Control']);
  });

  it('should return Ctrl and other in Or when Ctrl pressed', () => {
    const event = { key: 'Control', metaKey: false, shiftKey: true, ctrlKey: false };
    const result = KeysKey.Or(event, KeysKey.ModifierKeys.Control, KeysKey.ModifierKeys.Shift);
    expect(result).to.deep.equal(['Control', 'Shift']);

  });

  it('should not return Ctrl in Or when other key not held', () => {
    const event = { key: 'Control', metaKey: false, shiftKey: false, ctrlKey: false };
    const result = KeysKey.Or(event, KeysKey.ModifierKeys.Control, KeysKey.ModifierKeys.Shift);
    expect(result).to.deep.equal(['Control']);
  });

  it('should return Alt when Alt pressed', () => {
    const event = { key: 'Alt', metaKey: false, shiftKey: false, ctrlKey: false };
    const result = KeysKey.Is(event, KeysKey.ModifierKeys.Alt);
    expect(result).to.deep.equal(['Alt']);
  });
  
  // Alt
  it('should return Alt when Alt held', () => {
    const event = { key: 'A', metaKey: false, shiftKey: false, ctrlKey: false, altKey: true };
    const result = KeysKey.Is(event, KeysKey.ModifierKeys.Alt);
    expect(result).to.deep.equal(['Alt']);
  });
 
  it('should return Alt when Alt pressed', () => {
    const event = { key: 'Alt', metaKey: false, shiftKey: false, ctrlKey: false, altKey: false };
    const result = KeysKey.Is(event, KeysKey.ModifierKeys.Alt);
    expect(result).to.deep.equal(['Alt']);
  });

  // Meta
  it('should return Meta when Meta pressed', () => {
    const event = { key: 'Meta', metaKey: true, shiftKey: false, ctrlKey: false };
    const result = KeysKey.Is(event, KeysKey.ModifierKeys.Meta);
    expect(result).to.deep.equal(['Meta']);
  });
  
  it('should return Meta when Meta held', () => {
    const event = { key: 'A', metaKey: true, shiftKey: false, ctrlKey: false };
    const result = KeysKey.Is(event, KeysKey.ModifierKeys.Meta);
    expect(result).to.deep.equal(['Meta']);
  });

  it('should return Meta and other in Or when Meta pressed', () => {
    const event = { key: 'Meta', metaKey: true, shiftKey: false, ctrlKey: true };
    const result = KeysKey.Or(event, KeysKey.ModifierKeys.Meta, KeysKey.ModifierKeys.Control);
    expect(result).to.have.members(['Meta', 'Control']);
  });
  
  it('should not return Meta in Or when other key not held', () => {
    const event = { key: 'Meta', metaKey: true, shiftKey: false, ctrlKey: false };
    const result = KeysKey.Or(event, KeysKey.ModifierKeys.Meta, KeysKey.ModifierKeys.Control);
    expect(result).to.deep.equal(['Meta']);
  });
  
  // Shift
  it('should return Alt when Alt held', () => {
    const event = { key: 'A', metaKey: false, shiftKey: false, ctrlKey: false, altKey: true };
    const result = KeysKey.Is(event, KeysKey.ModifierKeys.Alt);
    expect(result).to.deep.equal(['Alt']);
  });
  
  // Shift
  it('should return Shift when Shift pressed', () => {
    const event = { key: 'Shift', metaKey: false, shiftKey: true, ctrlKey: false };
    const result = KeysKey.Is(event, KeysKey.ModifierKeys.Shift);
    expect(result).to.deep.equal(['Shift']);
  });
  
  it('should return Shift when Shift held', () => {
    const event = { key: 'A', metaKey: false, shiftKey: true, ctrlKey: false };
    const result = KeysKey.Is(event, KeysKey.ModifierKeys.Shift);
    expect(result).to.deep.equal(['Shift']);
  });
  
  it('should return Shift and other in Or when Shift pressed', () => {
    const event = { key: 'Shift', metaKey: false, shiftKey: true, ctrlKey: true };
    const result = KeysKey.Or(event, KeysKey.ModifierKeys.Shift, KeysKey.ModifierKeys.Control);
    expect(result).to.have.members(['Shift', 'Control']);
  });
  
  it('should not return Shift in Or when other key not held', () => {
    const event = { key: 'Shift', metaKey: false, shiftKey: false, ctrlKey: false };
    const result = KeysKey.Or(event, KeysKey.ModifierKeys.Shift, KeysKey.ModifierKeys.Control);
    expect(result).to.deep.equal(['Shift']);
  });

});

