// Remember that this is the path to lib embedded in the GH-page folder
// and not the lib that is compiled by the build script.
import KeysKey from "./lib/index.js";

window.onkeydown = (event) => {
    let result = false;

    result = KeysKey.And(event, KeysKey.Letter.A);
    if (result) {
        result = false;
        document.getElementById("A").classList.add("grid-item-active");
    }

    result = KeysKey.And(event, KeysKey.Letter.B);
    if (result) {
        result = false;
        document.getElementById("B").classList.add("grid-item-active");
    }

    result = KeysKey.And(event, KeysKey.Letter.C);
    if (result) {
        result = false;
        document.getElementById("C").classList.add("grid-item-active");
    }

    result = KeysKey.And(event, KeysKey.Letter.a);
    if (result) {
        result = false;
        document.getElementById("a").classList.add("grid-item-active");
    }

    result = KeysKey.And(event, KeysKey.Letter.b);
    if (result) {
        result = false;
        document.getElementById("b").classList.add("grid-item-active");
    }

    result = KeysKey.And(event, KeysKey.Letter.c);
    if (result) {
        result = false;
        document.getElementById("c").classList.add("grid-item-active");
    }

};

window.onkeyup = () => {
    document.querySelectorAll('.grid-item-active').forEach(element => {
        element.classList.remove("grid-item-active");
    });
};