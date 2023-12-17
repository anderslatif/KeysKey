import KeysKey from "./lib/index.js";

window.onkeydown = (event) => {

    const result = KeysKey.is(event, KeysKey.SpecialGroups.MetaAndShift);
    console.log(result);

};
