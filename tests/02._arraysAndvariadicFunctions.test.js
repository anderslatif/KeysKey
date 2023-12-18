import { expect } from 'chai';
import KeysKey from "../lib/index.js";


describe('Testing variadic functions', () => {

    it('all functions can take variadic number of key arguments', () => {
        const event = { key: '0', metaKey: true, shiftKey: true, ctrlKey: true };
        const result = KeysKey.Is(event, KeysKey.Number.Zero, KeysKey.ModifierKeys.Meta, KeysKey.ModifierKeys.Shift, KeysKey.ModifierKeys.Ctrl);
        console.log("============", result)
        expect(result).to.have.members(['0', 'Meta', 'Shift', 'Ctrl']);
    });

    it('all functions can take variadic number of key arguments with an array at the beginning', () => {
        const event = { key: '0', metaKey: true, shiftKey: true, ctrlKey: true };
        const result = KeysKey.Is(event, [KeysKey.Number.Zero, KeysKey.ModifierKeys.Meta], KeysKey.ModifierKeys.Shift, KeysKey.ModifierKeys.Ctrl);
        expect(result).to.have.members(['0', 'Meta', 'Shift', 'Ctrl']);
    });

    it('all functions can take variadic number of key arguments with an array in the middle', () => {
        const event = { key: '0', metaKey: true, shiftKey: true, ctrlKey: true };
        const result = KeysKey.Is(event, KeysKey.Number.Zero, [KeysKey.ModifierKeys.Meta, KeysKey.ModifierKeys.Shift], KeysKey.ModifierKeys.Ctrl);
        expect(result).to.have.members(['0', 'Meta', 'Shift', 'Ctrl']);
    });

    it('all functions can take variadic number of key arguments with an array at the end', () => {
        const event = { key: '0', metaKey: true, shiftKey: true, ctrlKey: true };
        const result = KeysKey.Is(event, KeysKey.Number.Zero, KeysKey.ModifierKeys.Meta, [KeysKey.ModifierKeys.Shift, KeysKey.ModifierKeys.Ctrl]);
        expect(result).to.have.members(['0', 'Meta', 'Shift', 'Ctrl']);
    });
    
});
