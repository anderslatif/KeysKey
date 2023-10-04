export type KeyEventEnum = {
  key: string;
  metaKey: boolean;
  shiftKey: boolean;
  ctrlKey: boolean;
};

export enum NumberEnum {
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

export enum LowercaseLetterEnum {
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
}

export enum UppercaseLetterEnum {
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
}


export enum SpecialKeysEnum {
  Meta = 'Meta',
  Shift = 'Shift',
  Control = 'Ctrl',
}

export enum SpecialCombosEnum {
  MetaAndShiftCombo = "Meta+Shift",
  MetaOrShiftCombo = "Meta/Shift",
  MetaAndControlCombo = "Meta+Control",
  MetaOrControlCombo = "Meta/Control",
  ControlAndShiftCombo = "Control+Shift",
  ControlOrShiftCombo = "Control/Shift",
}

export const SpecialCombosList: Array<string> = [...Object.values(SpecialCombosEnum)];

// todo special groups a-Z A-Z a-z 0-9 

export const SpecialGroupsEnum = {
    MetaAndShift: (event: KeyEventEnum) => event.metaKey && event.shiftKey ? [SpecialCombosEnum.MetaAndShiftCombo, "Meta", "Shift"] : null,
    MetaOrShift: (event: KeyEventEnum) => event.metaKey || event.shiftKey ? [SpecialCombosEnum.MetaOrShiftCombo, "Meta", "Shift"] : null,
    MetaAndControl: (event: KeyEventEnum) => event.metaKey && event.ctrlKey ? [SpecialCombosEnum.MetaAndControlCombo, "Meta", "Control"] : null,
    MetaOrControl: (event: KeyEventEnum) => event.metaKey || event.ctrlKey ? [SpecialCombosEnum.MetaOrControlCombo, "Meta", "Control"] : null,
    ControlAndShift: (event: KeyEventEnum) => event.ctrlKey && event.shiftKey ? [SpecialCombosEnum.ControlAndShiftCombo, "Control", "Shift"] : null,
    ControlOrShift: (event: KeyEventEnum) => event.ctrlKey || event.shiftKey ? [SpecialCombosEnum.ControlOrShiftCombo, "Control", "Shift"] : null,
}



