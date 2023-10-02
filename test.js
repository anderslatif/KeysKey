import KeysKey from "./lib/index.js";

// const event = { key: 'A', metaKey: true, shiftKey: false, ctrlKey: false };
// const result = KeysKey.is(event, [
//     KeysKey.And(KeysKey.SpecialGroups.MetaAndShift, KeysKey.Letter.A),
//     // KeysKey.Or(KeysKey.SpecialGroups.MetaAndShift, KeysKey.Letter.A, KeysKey.Letter.B)
// ]);

// console.log(result);

// const event1 = { key: '1', metaKey: true, shiftKey: false, ctrlKey: false };
// const result1 = KeysKey.is(event1, KeysKey.And(event1,KeysKey.Number.One, KeysKey.Number.Two, KeysKey.Number.Three));
// const result1 = KeysKey.And(event1,KeysKey.Number.One, KeysKey.SpecialKeys.Meta);
// console.log(result1);

// const result2 = KeysKey.is(event, [KeysKey.And(KeysKey.SpecialGroups.MetaAndShift, KeysKey.Letter.A)]);

// const result3 = KeysKey.is(event, KeysKey.Or(KeysKey.SpecialGroups.MetaAndShift, KeysKey.Letter.A, KeysKey.Letter.B));

// const event1 = { key: 'B', metaKey: true, shiftKey: false, ctrlKey: false };
// const result1 = KeysKey.And(event1, KeysKey.Letter.B, KeysKey.Letter.A);
// console.log(result1);
// const event3 = { key: 'A', metaKey: true, shiftKey: true, ctrlKey: false };
// const result3 = KeysKey.And(event3, ...KeysKey.SpecialGroups.MetaAndShift(event3));
// console.log(result3);

// const event3 = { key: 'B', metaKey: true, shiftKey: true, ctrlKey: false };
// const temp = KeysKey.SpecialGroups.MetaAndShift(event3);
// const temp2 = KeysKey.And(event3, KeysKey.SpecialGroups.MetaAndShift(event3));
// const result3 = KeysKey.is(event3, KeysKey.And(event3, ...KeysKey.SpecialGroups.MetaAndShift(event3)));

const event4 = { key: 'B', metaKey: true, shiftKey: true, ctrlKey: false };
// const result4 = KeysKey.is(event4, KeysKey.Or(event3, ...KeysKey.SpecialGroups.MetaAndShift(event3), KeysKey.Letter.A));
// console.log(result4);
// console.log(...KeysKey.SpecialGroups.MetaAndShift(event3), KeysKey.Letter.A);

// const temp1 = KeysKey.is(event3, KeysKey.And(event3, KeysKey.Letter.A, KeysKey.Letter.B));
// const temp2 = KeysKey.is(event3, KeysKey.Or(event3, KeysKey.Letter.A, KeysKey.Letter.B));
// console.log(temp1, temp2);



const event3 = { key: 'A', metaKey: true, shiftKey: true, ctrlKey: false };
const result3 = KeysKey.And(event3, KeysKey.SpecialGroups.MetaAndShift(event3));
console.log("**********", result3);
// console.log(KeysKey.SpecialGroups.MetaAndShift(event3));