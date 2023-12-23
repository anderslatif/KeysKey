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
export declare enum Number {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9"
}
export declare enum Letter {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F",
    G = "G",
    H = "H",
    I = "I",
    J = "J",
    K = "K",
    L = "L",
    M = "M",
    N = "N",
    O = "O",
    P = "P",
    Q = "Q",
    R = "R",
    S = "S",
    T = "T",
    U = "U",
    V = "V",
    W = "W",
    X = "X",
    Y = "Y",
    Z = "Z",
    a = "a",
    b = "b",
    c = "c",
    d = "d",
    e = "e",
    f = "f",
    g = "g",
    h = "h",
    i = "i",
    j = "j",
    k = "k",
    l = "l",
    m = "m",
    n = "n",
    o = "o",
    p = "p",
    q = "q",
    r = "r",
    s = "s",
    t = "t",
    u = "u",
    v = "v",
    w = "w",
    x = "x",
    y = "y",
    z = "z"
}
export declare enum SpecialCharacter {
    Ampersand = "&",
    Asterisk = "*",
    At = "@",
    Backquote = "`",
    Backslash = "\\",
    BracketLeft = "[",
    BracketRight = "]",
    Caret = "^",
    Colon = ":",
    Comma = ",",
    CurlyLeft = "{",
    CurlyRight = "}",
    Dollar = "$",
    Equal = "=",
    Exclamation = "!",
    GreaterThan = ">",
    Hash = "#",
    LessThan = "<",
    ParenLeft = "(",
    ParenRight = ")",
    Percent = "%",
    Pipe = "|",
    Period = ".",
    Plus = "+",
    QuestionMark = "?",
    Quote = "'",
    Semicolon = ";",
    Slash = "/",
    Subtract = "-",
    Tilde = "~",
    Underscore = "_"
}
export declare enum WhiteSpace {
    Enter = "Enter",
    Space = " ",
    Tab = "Tab"
}
export declare enum Multimedia {
    AudioVolumeDown = "AudioVolumeDown",
    AudioVolumeMute = "AudioVolumeMute",
    AudioVolumeUp = "AudioVolumeUp",
    MediaPlayPause = "MediaPlayPause",
    MediaStop = "MediaStop",
    MediaTrackNext = "MediaTrackNext",
    MediaTrackPrevious = "MediaTrackPrevious"
}
export declare enum Lock {
    CapsLock = "CapsLock",
    NumLock = "NumLock",
    ScrollLock = "ScrollLock"
}
export declare enum Navigation {
    ArrowDown = "ArrowDown",
    ArrowLeft = "ArrowLeft",
    ArrowRight = "ArrowRight",
    ArrowUp = "ArrowUp",
    End = "End",
    Home = "Home",
    PageDown = "PageDown",
    PageUp = "PageUp"
}
export declare enum Editing {
    Backspace = "Backspace",
    Delete = "Delete",
    Enter = "Enter",
    Escape = "Escape",
    Insert = "Insert",
    Tab = "Tab"
}
export declare enum Modifier {
    Alt = "Alt",
    Control = "Control",
    Meta = "Meta",
    Option = "Option",
    Shift = "Shift"
}
export declare enum FunctionKeys {
    F1 = "F1",
    F2 = "F2",
    F3 = "F3",
    F4 = "F4",
    F5 = "F5",
    F6 = "F6",
    F7 = "F7",
    F8 = "F8",
    F9 = "F9",
    F10 = "F10",
    F11 = "F11",
    F12 = "F12"
}
export declare const SpecialKeysGroup: {
    readonly Alt: Modifier.Alt;
    readonly Control: Modifier.Control;
    readonly Meta: Modifier.Meta;
    readonly Option: Modifier.Option;
    readonly Shift: Modifier.Shift;
    readonly Backspace: Editing.Backspace;
    readonly Delete: Editing.Delete;
    readonly Enter: Editing.Enter;
    readonly Escape: Editing.Escape;
    readonly Insert: Editing.Insert;
    readonly Tab: Editing.Tab;
    readonly ArrowDown: Navigation.ArrowDown;
    readonly ArrowLeft: Navigation.ArrowLeft;
    readonly ArrowRight: Navigation.ArrowRight;
    readonly ArrowUp: Navigation.ArrowUp;
    readonly End: Navigation.End;
    readonly Home: Navigation.Home;
    readonly PageDown: Navigation.PageDown;
    readonly PageUp: Navigation.PageUp;
    readonly prototype: Function;
    readonly CapsLock: Lock.CapsLock;
    readonly NumLock: Lock.NumLock;
    readonly ScrollLock: Lock.ScrollLock;
    readonly AudioVolumeDown: Multimedia.AudioVolumeDown;
    readonly AudioVolumeMute: Multimedia.AudioVolumeMute;
    readonly AudioVolumeUp: Multimedia.AudioVolumeUp;
    readonly MediaPlayPause: Multimedia.MediaPlayPause;
    readonly MediaStop: Multimedia.MediaStop;
    readonly MediaTrackNext: Multimedia.MediaTrackNext;
    readonly MediaTrackPrevious: Multimedia.MediaTrackPrevious;
    readonly Space: WhiteSpace.Space;
    readonly Ampersand: SpecialCharacter.Ampersand;
    readonly Asterisk: SpecialCharacter.Asterisk;
    readonly At: SpecialCharacter.At;
    readonly Backquote: SpecialCharacter.Backquote;
    readonly Backslash: SpecialCharacter.Backslash;
    readonly BracketLeft: SpecialCharacter.BracketLeft;
    readonly BracketRight: SpecialCharacter.BracketRight;
    readonly Caret: SpecialCharacter.Caret;
    readonly Colon: SpecialCharacter.Colon;
    readonly Comma: SpecialCharacter.Comma;
    readonly CurlyLeft: SpecialCharacter.CurlyLeft;
    readonly CurlyRight: SpecialCharacter.CurlyRight;
    readonly Dollar: SpecialCharacter.Dollar;
    readonly Equal: SpecialCharacter.Equal;
    readonly Exclamation: SpecialCharacter.Exclamation;
    readonly GreaterThan: SpecialCharacter.GreaterThan;
    readonly Hash: SpecialCharacter.Hash;
    readonly LessThan: SpecialCharacter.LessThan;
    readonly ParenLeft: SpecialCharacter.ParenLeft;
    readonly ParenRight: SpecialCharacter.ParenRight;
    readonly Percent: SpecialCharacter.Percent;
    readonly Pipe: SpecialCharacter.Pipe;
    readonly Period: SpecialCharacter.Period;
    readonly Plus: SpecialCharacter.Plus;
    readonly QuestionMark: SpecialCharacter.QuestionMark;
    readonly Quote: SpecialCharacter.Quote;
    readonly Semicolon: SpecialCharacter.Semicolon;
    readonly Slash: SpecialCharacter.Slash;
    readonly Subtract: SpecialCharacter.Subtract;
    readonly Tilde: SpecialCharacter.Tilde;
    readonly Underscore: SpecialCharacter.Underscore;
};
export declare const AllKeysGroup: {
    readonly Alt: Modifier.Alt;
    readonly Control: Modifier.Control;
    readonly Meta: Modifier.Meta;
    readonly Option: Modifier.Option;
    readonly Shift: Modifier.Shift;
    readonly Backspace: Editing.Backspace;
    readonly Delete: Editing.Delete;
    readonly Enter: Editing.Enter;
    readonly Escape: Editing.Escape;
    readonly Insert: Editing.Insert;
    readonly Tab: Editing.Tab;
    readonly ArrowDown: Navigation.ArrowDown;
    readonly ArrowLeft: Navigation.ArrowLeft;
    readonly ArrowRight: Navigation.ArrowRight;
    readonly ArrowUp: Navigation.ArrowUp;
    readonly End: Navigation.End;
    readonly Home: Navigation.Home;
    readonly PageDown: Navigation.PageDown;
    readonly PageUp: Navigation.PageUp;
    readonly prototype: Function;
    readonly CapsLock: Lock.CapsLock;
    readonly NumLock: Lock.NumLock;
    readonly ScrollLock: Lock.ScrollLock;
    readonly AudioVolumeDown: Multimedia.AudioVolumeDown;
    readonly AudioVolumeMute: Multimedia.AudioVolumeMute;
    readonly AudioVolumeUp: Multimedia.AudioVolumeUp;
    readonly MediaPlayPause: Multimedia.MediaPlayPause;
    readonly MediaStop: Multimedia.MediaStop;
    readonly MediaTrackNext: Multimedia.MediaTrackNext;
    readonly MediaTrackPrevious: Multimedia.MediaTrackPrevious;
    readonly Space: WhiteSpace.Space;
    readonly Ampersand: SpecialCharacter.Ampersand;
    readonly Asterisk: SpecialCharacter.Asterisk;
    readonly At: SpecialCharacter.At;
    readonly Backquote: SpecialCharacter.Backquote;
    readonly Backslash: SpecialCharacter.Backslash;
    readonly BracketLeft: SpecialCharacter.BracketLeft;
    readonly BracketRight: SpecialCharacter.BracketRight;
    readonly Caret: SpecialCharacter.Caret;
    readonly Colon: SpecialCharacter.Colon;
    readonly Comma: SpecialCharacter.Comma;
    readonly CurlyLeft: SpecialCharacter.CurlyLeft;
    readonly CurlyRight: SpecialCharacter.CurlyRight;
    readonly Dollar: SpecialCharacter.Dollar;
    readonly Equal: SpecialCharacter.Equal;
    readonly Exclamation: SpecialCharacter.Exclamation;
    readonly GreaterThan: SpecialCharacter.GreaterThan;
    readonly Hash: SpecialCharacter.Hash;
    readonly LessThan: SpecialCharacter.LessThan;
    readonly ParenLeft: SpecialCharacter.ParenLeft;
    readonly ParenRight: SpecialCharacter.ParenRight;
    readonly Percent: SpecialCharacter.Percent;
    readonly Pipe: SpecialCharacter.Pipe;
    readonly Period: SpecialCharacter.Period;
    readonly Plus: SpecialCharacter.Plus;
    readonly QuestionMark: SpecialCharacter.QuestionMark;
    readonly Quote: SpecialCharacter.Quote;
    readonly Semicolon: SpecialCharacter.Semicolon;
    readonly Slash: SpecialCharacter.Slash;
    readonly Subtract: SpecialCharacter.Subtract;
    readonly Tilde: SpecialCharacter.Tilde;
    readonly Underscore: SpecialCharacter.Underscore;
    readonly A: Letter.A;
    readonly B: Letter.B;
    readonly C: Letter.C;
    readonly D: Letter.D;
    readonly E: Letter.E;
    readonly F: Letter.F;
    readonly G: Letter.G;
    readonly H: Letter.H;
    readonly I: Letter.I;
    readonly J: Letter.J;
    readonly K: Letter.K;
    readonly L: Letter.L;
    readonly M: Letter.M;
    readonly N: Letter.N;
    readonly O: Letter.O;
    readonly P: Letter.P;
    readonly Q: Letter.Q;
    readonly R: Letter.R;
    readonly S: Letter.S;
    readonly T: Letter.T;
    readonly U: Letter.U;
    readonly V: Letter.V;
    readonly W: Letter.W;
    readonly X: Letter.X;
    readonly Y: Letter.Y;
    readonly Z: Letter.Z;
    readonly a: Letter.a;
    readonly b: Letter.b;
    readonly c: Letter.c;
    readonly d: Letter.d;
    readonly e: Letter.e;
    readonly f: Letter.f;
    readonly g: Letter.g;
    readonly h: Letter.h;
    readonly i: Letter.i;
    readonly j: Letter.j;
    readonly k: Letter.k;
    readonly l: Letter.l;
    readonly m: Letter.m;
    readonly n: Letter.n;
    readonly o: Letter.o;
    readonly p: Letter.p;
    readonly q: Letter.q;
    readonly r: Letter.r;
    readonly s: Letter.s;
    readonly t: Letter.t;
    readonly u: Letter.u;
    readonly v: Letter.v;
    readonly w: Letter.w;
    readonly x: Letter.x;
    readonly y: Letter.y;
    readonly z: Letter.z;
    readonly Zero: Number.Zero;
    readonly One: Number.One;
    readonly Two: Number.Two;
    readonly Three: Number.Three;
    readonly Four: Number.Four;
    readonly Five: Number.Five;
    readonly Six: Number.Six;
    readonly Seven: Number.Seven;
    readonly Eight: Number.Eight;
    readonly Nine: Number.Nine;
};
//# sourceMappingURL=types.d.ts.map