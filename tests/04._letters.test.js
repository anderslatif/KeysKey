import { expect } from 'chai';
import KeysKey from "../lib/index.js";


describe('Testing letters', () => {

  it('should return the uppercase letter that was fired', () => {
    const event1 = { key: 'A', metaKey: false, shiftKey: false, ctrlKey: false };
    const result1 = KeysKey.Is(event1, [KeysKey.Letter.A]);
    expect(result1).to.deep.equal(['A']);

    const event2 = { key: 'B', metaKey: false, shiftKey: false, ctrlKey: false };
    const result2 = KeysKey.Is(event2, [KeysKey.Letter.B]);
    expect(result2).to.deep.equal(['B']);

    const event3 = { key: 'C', metaKey: false, shiftKey: false, ctrlKey: false };
    const result3 = KeysKey.Is(event3, [KeysKey.Letter.C]);
    expect(result3).to.deep.equal(['C']);

    const event4 = { key: 'D', metaKey: false, shiftKey: false, ctrlKey: false };
    const result4 = KeysKey.Is(event4, [KeysKey.Letter.D]);
    expect(result4).to.deep.equal(['D']);

    const event5 = { key: 'E', metaKey: false, shiftKey: false, ctrlKey: false };
    const result5 = KeysKey.Is(event5, [KeysKey.Letter.E]);
    expect(result5).to.deep.equal(['E']);

    const event6 = { key: 'F', metaKey: false, shiftKey: false, ctrlKey: false };
    const result6 = KeysKey.Is(event6, [KeysKey.Letter.F]);
    expect(result6).to.deep.equal(['F']);

    const event7 = { key: 'G', metaKey: false, shiftKey: false, ctrlKey: false };
    const result7 = KeysKey.Is(event7, [KeysKey.Letter.G]);
    expect(result7).to.deep.equal(['G']);

    const event8 = { key: 'H', metaKey: false, shiftKey: false, ctrlKey: false };
    const result8 = KeysKey.Is(event8, [KeysKey.Letter.H]);
    expect(result8).to.deep.equal(['H']);

    const event9 = { key: 'I', metaKey: false, shiftKey: false, ctrlKey: false };
    const result9 = KeysKey.Is(event9, [KeysKey.Letter.I]);
    expect(result9).to.deep.equal(['I']);

    const event10 = { key: 'J', metaKey: false, shiftKey: false, ctrlKey: false };
    const result10 = KeysKey.Is(event10, [KeysKey.Letter.J]);
    expect(result10).to.deep.equal(['J']);

    const event11 = { key: 'K', metaKey: false, shiftKey: false, ctrlKey: false };
    const result11 = KeysKey.Is(event11, [KeysKey.Letter.K]);
    expect(result11).to.deep.equal(['K']);

    const event12 = { key: 'L', metaKey: false, shiftKey: false, ctrlKey: false };
    const result12 = KeysKey.Is(event12, [KeysKey.Letter.L]);
    expect(result12).to.deep.equal(['L']);

    const event13 = { key: 'M', metaKey: false, shiftKey: false, ctrlKey: false };
    const result13 = KeysKey.Is(event13, [KeysKey.Letter.M]);
    expect(result13).to.deep.equal(['M']);

    const event14 = { key: 'N', metaKey: false, shiftKey: false, ctrlKey: false };
    const result14 = KeysKey.Is(event14, [KeysKey.Letter.N]);
    expect(result14).to.deep.equal(['N']);

    const event15 = { key: 'O', metaKey: false, shiftKey: false, ctrlKey: false };
    const result15 = KeysKey.Is(event15, [KeysKey.Letter.O]);
    expect(result15).to.deep.equal(['O']);

    const event16 = { key: 'P', metaKey: false, shiftKey: false, ctrlKey: false };
    const result16 = KeysKey.Is(event16, [KeysKey.Letter.P]);
    expect(result16).to.deep.equal(['P']);

    const event17 = { key: 'Q', metaKey: false, shiftKey: false, ctrlKey: false };
    const result17 = KeysKey.Is(event17, [KeysKey.Letter.Q]);
    expect(result17).to.deep.equal(['Q']);

    const event18 = { key: 'R', metaKey: false, shiftKey: false, ctrlKey: false };
    const result18 = KeysKey.Is(event18, [KeysKey.Letter.R]);
    expect(result18).to.deep.equal(['R']);

    const event19 = { key: 'S', metaKey: false, shiftKey: false, ctrlKey: false };
    const result19 = KeysKey.Is(event19, [KeysKey.Letter.S]);
    expect(result19).to.deep.equal(['S']);

    const event20 = { key: 'T', metaKey: false, shiftKey: false, ctrlKey: false };
    const result20 = KeysKey.Is(event20, [KeysKey.Letter.T]);
    expect(result20).to.deep.equal(['T']);

    const event21 = { key: 'U', metaKey: false, shiftKey: false, ctrlKey: false };
    const result21 = KeysKey.Is(event21, [KeysKey.Letter.U]);
    expect(result21).to.deep.equal(['U']);

    const event22 = { key: 'V', metaKey: false, shiftKey: false, ctrlKey: false };
    const result22 = KeysKey.Is(event22, [KeysKey.Letter.V]);
    expect(result22).to.deep.equal(['V']);

    const event23 = { key: 'W', metaKey: false, shiftKey: false, ctrlKey: false };
    const result23 = KeysKey.Is(event23, [KeysKey.Letter.W]);
    expect(result23).to.deep.equal(['W']);

    const event24 = { key: 'X', metaKey: false, shiftKey: false, ctrlKey: false };
    const result24 = KeysKey.Is(event24, [KeysKey.Letter.X]);
    expect(result24).to.deep.equal(['X']);

    const event25 = { key: 'Y', metaKey: false, shiftKey: false, ctrlKey: false };
    const result25 = KeysKey.Is(event25, [KeysKey.Letter.Y]);
    expect(result25).to.deep.equal(['Y']);

    const event26 = { key: 'Z', metaKey: false, shiftKey: false, ctrlKey: false };
    const result26 = KeysKey.Is(event26, [KeysKey.Letter.Z]);
    expect(result26).to.deep.equal(['Z']);
  });

  it('should return the lowercase letter that was fired', () => {
    const event1 = { key: 'a', metaKey: false, shiftKey: false, ctrlKey: false };
    const result1 = KeysKey.Is(event1, [KeysKey.Letter.a]);
    expect(result1).to.deep.equal(['a']);

    const event2 = { key: 'b', metaKey: false, shiftKey: false, ctrlKey: false };
    const result2 = KeysKey.Is(event2, [KeysKey.Letter.b]);
    expect(result2).to.deep.equal(['b']);

    const event3 = { key: 'c', metaKey: false, shiftKey: false, ctrlKey: false };
    const result3 = KeysKey.Is(event3, [KeysKey.Letter.c]);
    expect(result3).to.deep.equal(['c']);

    const event4 = { key: 'd', metaKey: false, shiftKey: false, ctrlKey: false };
    const result4 = KeysKey.Is(event4, [KeysKey.Letter.d]);
    expect(result4).to.deep.equal(['d']);

    const event5 = { key: 'e', metaKey: false, shiftKey: false, ctrlKey: false };
    const result5 = KeysKey.Is(event5, [KeysKey.Letter.e]);
    expect(result5).to.deep.equal(['e']);

    const event6 = { key: 'f', metaKey: false, shiftKey: false, ctrlKey: false };
    const result6 = KeysKey.Is(event6, [KeysKey.Letter.f]);
    expect(result6).to.deep.equal(['f']);

    const event7 = { key: 'g', metaKey: false, shiftKey: false, ctrlKey: false };
    const result7 = KeysKey.Is(event7, [KeysKey.Letter.g]);
    expect(result7).to.deep.equal(['g']);

    const event8 = { key: 'h', metaKey: false, shiftKey: false, ctrlKey: false };
    const result8 = KeysKey.Is(event8, [KeysKey.Letter.h]);
    expect(result8).to.deep.equal(['h']);

    const event9 = { key: 'i', metaKey: false, shiftKey: false, ctrlKey: false };
    const result9 = KeysKey.Is(event9, [KeysKey.Letter.i]);
    expect(result9).to.deep.equal(['i']);

    const event10 = { key: 'j', metaKey: false, shiftKey: false, ctrlKey: false };
    const result10 = KeysKey.Is(event10, [KeysKey.Letter.j]);
    expect(result10).to.deep.equal(['j']);

    const event11 = { key: 'k', metaKey: false, shiftKey: false, ctrlKey: false };
    const result11 = KeysKey.Is(event11, [KeysKey.Letter.k]);
    expect(result11).to.deep.equal(['k']);

    const event12 = { key: 'l', metaKey: false, shiftKey: false, ctrlKey: false };
    const result12 = KeysKey.Is(event12, [KeysKey.Letter.l]);
    expect(result12).to.deep.equal(['l']);

    const event13 = { key: 'm', metaKey: false, shiftKey: false, ctrlKey: false };
    const result13 = KeysKey.Is(event13, [KeysKey.Letter.m]);
    expect(result13).to.deep.equal(['m']);

    const event14 = { key: 'n', metaKey: false, shiftKey: false, ctrlKey: false };
    const result14 = KeysKey.Is(event14, [KeysKey.Letter.n]);
    expect(result14).to.deep.equal(['n']);

    const event15 = { key: 'o', metaKey: false, shiftKey: false, ctrlKey: false };
    const result15 = KeysKey.Is(event15, [KeysKey.Letter.o]);
    expect(result15).to.deep.equal(['o']);

    const event16 = { key: 'p', metaKey: false, shiftKey: false, ctrlKey: false };
    const result16 = KeysKey.Is(event16, [KeysKey.Letter.p]);
    expect(result16).to.deep.equal(['p']);

    const event17 = { key: 'q', metaKey: false, shiftKey: false, ctrlKey: false };
    const result17 = KeysKey.Is(event17, [KeysKey.Letter.q]);
    expect(result17).to.deep.equal(['q']);

    const event18 = { key: 'r', metaKey: false, shiftKey: false, ctrlKey: false };
    const result18 = KeysKey.Is(event18, [KeysKey.Letter.r]);
    expect(result18).to.deep.equal(['r']);

    const event19 = { key: 's', metaKey: false, shiftKey: false, ctrlKey: false };
    const result19 = KeysKey.Is(event19, [KeysKey.Letter.s]);
    expect(result19).to.deep.equal(['s']);

    const event20 = { key: 't', metaKey: false, shiftKey: false, ctrlKey: false };
    const result20 = KeysKey.Is(event20, [KeysKey.Letter.t]);
    expect(result20).to.deep.equal(['t']);

    const event21 = { key: 'u', metaKey: false, shiftKey: false, ctrlKey: false };
    const result21 = KeysKey.Is(event21, [KeysKey.Letter.u]);
    expect(result21).to.deep.equal(['u']);

    const event22 = { key: 'v', metaKey: false, shiftKey: false, ctrlKey: false };
    const result22 = KeysKey.Is(event22, [KeysKey.Letter.v]);
    expect(result22).to.deep.equal(['v']);

    const event23 = { key: 'w', metaKey: false, shiftKey: false, ctrlKey: false };
    const result23 = KeysKey.Is(event23, [KeysKey.Letter.w]);
    expect(result23).to.deep.equal(['w']);

    const event24 = { key: 'x', metaKey: false, shiftKey: false, ctrlKey: false };
    const result24 = KeysKey.Is(event24, [KeysKey.Letter.x]);
    expect(result24).to.deep.equal(['x']);

    const event25 = { key: 'y', metaKey: false, shiftKey: false, ctrlKey: false };
    const result25 = KeysKey.Is(event25, [KeysKey.Letter.y]);
    expect(result25).to.deep.equal(['y']);

    const event26 = { key: 'z', metaKey: false, shiftKey: false, ctrlKey: false };
    const result26 = KeysKey.Is(event26, [KeysKey.Letter.z]);
    expect(result26).to.deep.equal(['z']);
});

});

