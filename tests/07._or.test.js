import { expect } from 'chai';
import KeysKey from "../lib/index.js";


describe('Testing undefined values', () => {
    
    it('works with one', () => {
        const event = { key: 'A', metaKey: false, shiftKey: false, ctrlKey: false };
        expect(KeysKey.Or(event, KeysKey.Letter.A)).to.be.deep.equal(['A']);
    });

    it('works with multiple', () => {
        const event = { key: 'A', metaKey: false, shiftKey: true, ctrlKey: false };
        expect(KeysKey.Or(event, KeysKey.Letter.A, KeysKey.ModifierKeys.Shift)).to.be.deep.equal(['A', 'Shift']);
    });

    it('works with multiple - arrays too', () => {
        const event = { key: 'A', metaKey: false, shiftKey: true, ctrlKey: false };
        expect(KeysKey.Or(event, [KeysKey.Letter.A, KeysKey.ModifierKeys.Shift])).to.be.deep.equal(['A', 'Shift']);
    });

    it('returns nothing if neither match', () => {
        const event = { key: 'B', metaKey: false, shiftKey: false, ctrlKey: false };
        expect(KeysKey.Or(event, KeysKey.Letter.A, KeysKey.ModifierKeys.Shift)).to.be.undefined;
    });

});
