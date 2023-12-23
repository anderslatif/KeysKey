// This is the event that the browser dispatches when a key is pressed.
/**
 * @typedef {Object} KeyEventEnum
 * @property {string} key - The value of the key that was pressed. For example, 'Enter' or 'a'.
 * @property {boolean} metaKey - Indicates if the meta key (like Cmd or Windows) was pressed during the key event.
 * @property {boolean} shiftKey - Indicates if the Shift key was pressed during the key event.
 * @property {boolean} ctrlKey - Indicates if the Ctrl key was pressed during the key event.
 * @property {boolean} altKey - Indicates if the Alt key was pressed during the key event.
 * @property {number} keyCode - The numeric keyCode of the key pressed, for compatibility purposes.
 * @property {Function} getModifierState - A function that returns the state of a specified modifier key.
 *                                    Takes a string argument representing the key and returns a boolean.
 * @description This type represents the structure of the event object that is dispatched by the browser
 *              when a key is pressed. It contains information about the key event, including which keys
 *              were pressed and the state of modifier keys. This is used internally to handle keyboard
 *              interactions.
 */
export type KeyEventEnum = {
  key: string;
  metaKey: boolean;
  shiftKey: boolean;
  ctrlKey: boolean;
  altKey: boolean;
  keyCode: number;
  getModifierState: (key: string) => boolean;
};

export enum Number {
  Zero = '0',
  One = '1',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
};

export enum Letter {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  H = 'H',
  I = 'I',
  J = 'J',
  K = 'K',
  L = 'L',
  M = 'M',
  N = 'N',
  O = 'O',
  P = 'P',
  Q = 'Q',
  R = 'R',
  S = 'S',
  T = 'T',
  U = 'U',
  V = 'V',
  W = 'W',
  X = 'X',
  Y = 'Y',
  Z = 'Z',
  a = 'a',
  b = 'b',
  c = 'c',
  d = 'd',
  e = 'e',
  f = 'f',
  g = 'g',
  h = 'h',
  i = 'i',
  j = 'j',
  k = 'k',
  l = 'l',
  m = 'm',
  n = 'n',
  o = 'o',
  p = 'p',
  q = 'q',
  r = 'r',
  s = 's',
  t = 't',
  u = 'u',
  v = 'v',
  w = 'w',
  x = 'x',
  y = 'y',
  z = 'z',
};

export enum SpecialCharacter {
  Ampersand = '&',
  Asterisk = '*',
  At = '@',
  Backquote = '`',
  Backslash = '\\',
  BracketLeft = '[',
  BracketRight = ']',
  Caret = '^',
  Colon = ':',
  Comma = ',',
  CurlyLeft = '{',
  CurlyRight = '}',
  Dollar = '$',
  Equal = '=',
  Exclamation = '!',
  GreaterThan = '>',
  Hash = '#',
  LessThan = '<',
  ParenLeft = '(',
  ParenRight = ')',
  Percent = '%',
  Pipe = '|',
  Period = '.',
  Plus = '+',
  QuestionMark = '?',
  Quote = '\'',
  Semicolon = ';',
  Slash = '/',
  Subtract = '-',
  Tilde = '~',
  Underscore = '_',
};

export enum WhiteSpace {
  Enter = 'Enter',
  Space = ' ',
  Tab = 'Tab',
};

export enum Multimedia {
  AudioVolumeDown = 'AudioVolumeDown',
  AudioVolumeMute = 'AudioVolumeMute',
  AudioVolumeUp = 'AudioVolumeUp',
  MediaPlayPause = 'MediaPlayPause',
  MediaStop = 'MediaStop',
  MediaTrackNext = 'MediaTrackNext',
  MediaTrackPrevious = 'MediaTrackPrevious',
};

export enum Lock {
  CapsLock = 'CapsLock',
  NumLock = 'NumLock',
  ScrollLock = 'ScrollLock',
};

export enum Navigation {
  ArrowDown = 'ArrowDown',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  ArrowUp = 'ArrowUp',
  End = 'End',
  Home = 'Home',
  PageDown = 'PageDown',
  PageUp = 'PageUp',
};

export enum Editing {
  Backspace = 'Backspace',
  Delete = 'Delete',
  Enter = 'Enter',
  Escape = 'Escape',
  Insert = 'Insert',
  Tab = 'Tab',
};

export enum Modifier {
  Alt = 'Alt',
  Control = 'Control',
  /** Represents the 'Meta' key, which is the Command key on Mac and Windows key on Windows systems. */
  Meta = 'Meta',
  /** Represents the 'Option' key on Mac keyboards, often used as a modifier key. */
  Option = 'Option',
  Shift = 'Shift',
};

export enum FunctionKeys {
  F1 = 'F1',
  F2 = 'F2',
  F3 = 'F3',
  F4 = 'F4',
  F5 = 'F5',
  F6 = 'F6',
  F7 = 'F7',
  F8 = 'F8',
  F9 = 'F9',
  F10 = 'F10',
  F11 = 'F11',
  F12 = 'F12',
};

export const SpecialKeysGroup = {
  ...SpecialCharacter,
  ...WhiteSpace,
  ...Multimedia,
  ...Lock,
  ...Function,
  ...Navigation,
  ...Editing,
  ...Modifier,
} as const;

export const AllKeysGroup = {
  ...Number,
  ...Letter,
  ...SpecialKeysGroup,
} as const;

