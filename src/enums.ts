// This is the event that the browser dispatches when a key is pressed.
export type KeyEventEnum = {
  key: string;
  metaKey: boolean;
  shiftKey: boolean;
  ctrlKey: boolean;
  altKey: boolean;
  keyCode: number;
  getModifierState: (key: string) => boolean;
};

export enum NumberKeysEnum {
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

export enum LetterKeysEnum {
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

export enum SpecialCharacterKeysEnum {
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

export enum WhiteSpaceKeysEnum {
  Enter = 'Enter',
  Space = ' ',
  Tab = 'Tab',
};

export enum MultimediaKeysEnum {
  AudioVolumeDown = 'AudioVolumeDown',
  AudioVolumeMute = 'AudioVolumeMute',
  AudioVolumeUp = 'AudioVolumeUp',
  MediaPlayPause = 'MediaPlayPause',
  MediaStop = 'MediaStop',
  MediaTrackNext = 'MediaTrackNext',
  MediaTrackPrevious = 'MediaTrackPrevious',
};

export enum LockKeysEnum {
  CapsLock = 'CapsLock',
  NumLock = 'NumLock',
  ScrollLock = 'ScrollLock',
};

export enum FunctionKeysEnum {
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

export enum NavigationKeysEnum {
  ArrowDown = 'ArrowDown',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  ArrowUp = 'ArrowUp',
  End = 'End',
  Home = 'Home',
  PageDown = 'PageDown',
  PageUp = 'PageUp',
};

export enum EditingKeysEnum {
  Backspace = 'Backspace',
  Delete = 'Delete',
  Enter = 'Enter',
  Escape = 'Escape',
  Insert = 'Insert',
  Tab = 'Tab',
};

export enum ModifierKeysEnum {
  Alt = 'Alt',
  Control = 'Ctrl',
  Meta = 'Meta',
  Option = 'Option',
  Shift = 'Shift',
};

export const SpecialKeysGroup = {
  ...SpecialCharacterKeysEnum,
  ...WhiteSpaceKeysEnum,
  ...MultimediaKeysEnum,
  ...LockKeysEnum,
  ...FunctionKeysEnum,
  ...NavigationKeysEnum,
  ...EditingKeysEnum,
  ...ModifierKeysEnum,
} as const;

export const AllKeysGroup = {
  ...NumberKeysEnum,
  ...LetterKeysEnum,
  ...SpecialKeysGroup,
} as const;

