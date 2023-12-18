import { expect } from 'chai';
import KeysKey from "../lib/index.js";


describe('And test', () => {
  it('Should return the matching key for single key matching key passed as argument', () => {
    const event1 = { key: 'A', metaKey: true, shiftKey: false, ctrlKey: false };
    const result1 = KeysKey.And(event1, KeysKey.ModifierKeys.Meta);
    // expect(result1).to.deep.equal(['Meta']);

    const event2 = { key: 'A', metaKey: true, shiftKey: false, ctrlKey: false };
    const result2 = KeysKey.And(event2, KeysKey.Letter.A);
    // expect(result2).to.deep.equal(['A']);

    const event3 = { key: 'A', metaKey: true, shiftKey: false, ctrlKey: false };
    

  });

  it("Should return matching keys for variadic arguments", () => {

  });

  it("Should return matching keys for array passed as argument", () => {

  });

  it("Should return null if no keys match", () => {

  });
});
