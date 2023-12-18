import { expect } from 'chai';
import KeysKey from "../lib/index.js";


describe('Testing undefined values', () => {
    it('undefined is provided instead of keys', () => {
        const event = { key: '0', metaKey: false, shiftKey: false, ctrlKey: false };
        expect(KeysKey.Is(event, undefined)).to.be.undefined;
    });

    it('null is provided instead of keys', () => {
        expect(KeysKey.Is(KeysKey.Number.Zero, null)).to.be.undefined;
    });

    it('undefined is provided instead of event', () => {
        expect(() => {
            KeysKey.Is(undefined, [KeysKey.Number.Zero])
        }).to.throw(Error, 'No event provided as the first parameter.');
    });

    it('the list of keys contains null or undefined', () => {
        const event = { key: '0', metaKey: false, shiftKey: false, ctrlKey: false };
        expect(KeysKey.Is(event, [KeysKey.Number.Zero, null, undefined])).to.be.undefined;        
    });
});
