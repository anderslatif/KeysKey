import { expect } from 'chai';
import KeysKey from "../lib/index.js";


describe('Testing Numbers', () => {
  it('should return undefined for the numbers not matching', () => {
    // notice that all the keys in the event are shifted from the expected keys
    const event0 = { key: '1', metaKey: false, shiftKey: false, ctrlKey: false };
    const result0 = KeysKey.Is(event0, [KeysKey.Number.Zero]);
    expect(result0).to.be.undefined;

    const event1 = { key: '2', metaKey: false, shiftKey: false, ctrlKey: false };
    const result1 = KeysKey.Is(event1, [KeysKey.Number.One]);
    expect(result1).to.be.undefined;

    const event2 = { key: '3', metaKey: false, shiftKey: false, ctrlKey: false };
    const result2 = KeysKey.Is(event2, [KeysKey.Number.Two]);
    expect(result2).to.be.undefined;

    const event3 = { key: '4', metaKey: false, shiftKey: false, ctrlKey: false };
    const result3 = KeysKey.Is(event3, [KeysKey.Number.Three]);
    expect(result3).to.be.undefined;

    const event4 = { key: '5', metaKey: false, shiftKey: false, ctrlKey: false };
    const result4 = KeysKey.Is(event4, [KeysKey.Number.Four]);
    expect(result4).to.be.undefined;

    const event5 = { key: '6', metaKey: false, shiftKey: false, ctrlKey: false };
    const result5 = KeysKey.Is(event5, [KeysKey.Number.Five]);
    expect(result5).to.be.undefined;

    const event6 = { key: '7', metaKey: false, shiftKey: false, ctrlKey: false };
    const result6 = KeysKey.Is(event6, [KeysKey.Number.Six]);
    expect(result6).to.be.undefined;

    const event7 = { key: '8', metaKey: false, shiftKey: false, ctrlKey: false };
    const result7 = KeysKey.Is(event7, [KeysKey.Number.Seven]);
    expect(result7).to.be.undefined;

    const event8 = { key: '9', metaKey: false, shiftKey: false, ctrlKey: false };
    const result8 = KeysKey.Is(event8, [KeysKey.Number.Eight]);
    expect(result8).to.be.undefined;

    const event9 = { key: '0', metaKey: false, shiftKey: false, ctrlKey: false };
    const result9 = KeysKey.Is(event9, [KeysKey.Number.Nine]);
    expect(result9).to.be.undefined;
  });


  it('should return the number in an array', () => {
    const event0 = { key: '0', metaKey: false, shiftKey: false, ctrlKey: false };
    const result0 = KeysKey.Is(event0, [KeysKey.Number.Zero]);
    expect(result0).to.deep.equal(['0']);

    const event1 = { key: '1', metaKey: false, shiftKey: false, ctrlKey: false };
    const result1 = KeysKey.Is(event1, [KeysKey.Number.One]);
    expect(result1).to.deep.equal(['1']);

    const event2 = { key: '2', metaKey: false, shiftKey: false, ctrlKey: false };
    const result2 = KeysKey.Is(event2, [KeysKey.Number.Two]);
    expect(result2).to.deep.equal(['2']);

    const event3 = { key: '3', metaKey: false, shiftKey: false, ctrlKey: false };
    const result3 = KeysKey.Is(event3, [KeysKey.Number.Three]);
    expect(result3).to.deep.equal(['3']);

    const event4 = { key: '4', metaKey: false, shiftKey: false, ctrlKey: false };
    const result4 = KeysKey.Is(event4, [KeysKey.Number.Four]);
    expect(result4).to.deep.equal(['4']);

    const event5 = { key: '5', metaKey: false, shiftKey: false, ctrlKey: false };
    const result5 = KeysKey.Is(event5, [KeysKey.Number.Five]);
    expect(result5).to.deep.equal(['5']);

    const event6 = { key: '6', metaKey: false, shiftKey: false, ctrlKey: false };
    const result6 = KeysKey.Is(event6, [KeysKey.Number.Six]);
    expect(result6).to.deep.equal(['6']);

    const event7 = { key: '7', metaKey: false, shiftKey: false, ctrlKey: false };
    const result7 = KeysKey.Is(event7, [KeysKey.Number.Seven]);
    expect(result7).to.deep.equal(['7']);

    const event8 = { key: '8', metaKey: false, shiftKey: false, ctrlKey: false };
    const result8 = KeysKey.Is(event8, [KeysKey.Number.Eight]);
    expect(result8).to.deep.equal(['8']);

    const event9 = { key: '9', metaKey: false, shiftKey: false, ctrlKey: false };
    const result9 = KeysKey.Is(event9, [KeysKey.Number.Nine]);
    expect(result9).to.deep.equal(['9']); 
  });

});

