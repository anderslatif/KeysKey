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

export enum LetterEnum {
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

export const SpecialGroupsEnum = {
    MetaAndShift: (event: KeyEventEnum) => event.metaKey && event.shiftKey ? [SpecialCombosEnum.MetaAndShiftCombo, "Meta", "Shift"] : null,
    MetaOrShift: (event: KeyEventEnum) => event.metaKey || event.shiftKey ? [SpecialCombosEnum.MetaOrShiftCombo, "Meta", "Shift"] : null,
    MetaAndControl: (event: KeyEventEnum) => event.metaKey && event.ctrlKey ? [SpecialCombosEnum.MetaAndControlCombo, "Meta", "Control"] : null,
    MetaOrControl: (event: KeyEventEnum) => event.metaKey || event.ctrlKey ? [SpecialCombosEnum.MetaOrControlCombo, "Meta", "Control"] : null,
    ControlAndShift: (event: KeyEventEnum) => event.ctrlKey && event.shiftKey ? [SpecialCombosEnum.ControlAndShiftCombo, "Control", "Shift"] : null,
    ControlOrShift: (event: KeyEventEnum) => event.ctrlKey || event.shiftKey ? [SpecialCombosEnum.ControlOrShiftCombo, "Control", "Shift"] : null,
}



