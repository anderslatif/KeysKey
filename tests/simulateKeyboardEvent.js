import { JSDOM } from "jsdom";

const { window } = new JSDOM();
const { document } = window;
global.Event = window.Event;
global.KeyboardEvent = window.KeyboardEvent;

const keyboardEvent = new window.KeyboardEvent("keydown", {
  key: "a",
  code: "KeyA",
  altKey: false,
  ctrlKey: false,
  shiftKey: false,
  metaKey: false
});

// Add an event listener to some element (or even to the document)
document.addEventListener("keydown", function (event) {
  console.log(event.key, event.code, event.altKey, event.ctrlKey, event.shiftKey, event.metaKey);
  // console.log(`Key pressed: ${event.key}`);
});


const propertiesToExtract = ["bubbles", "cancelable", "key", "code", "shiftKey", "ctrlKey", "altKey", "metaKey"];

const eventAsObject = propertiesToExtract.reduce((obj, prop) => {
  obj[prop] = keyboardEvent[prop];
  return obj;
}, {});

console.log(eventAsObject);