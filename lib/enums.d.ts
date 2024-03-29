export type KeyEventEnum = {
    key: string;
    metaKey: boolean;
    shiftKey: boolean;
    ctrlKey: boolean;
    altKey: boolean;
    keyCode: number;
    getModifierState: (key: string) => boolean;
};
export declare enum NumberKeysEnum {
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
export declare enum LetterKeysEnum {
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
export declare enum SpecialCharacterKeysEnum {
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
export declare enum WhiteSpaceKeysEnum {
    Enter = "Enter",
    Space = " ",
    Tab = "Tab"
}
export declare enum MultimediaKeysEnum {
    AudioVolumeDown = "AudioVolumeDown",
    AudioVolumeMute = "AudioVolumeMute",
    AudioVolumeUp = "AudioVolumeUp",
    MediaPlayPause = "MediaPlayPause",
    MediaStop = "MediaStop",
    MediaTrackNext = "MediaTrackNext",
    MediaTrackPrevious = "MediaTrackPrevious"
}
export declare enum LockKeysEnum {
    CapsLock = "CapsLock",
    NumLock = "NumLock",
    ScrollLock = "ScrollLock"
}
export declare enum FunctionKeysEnum {
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
export declare enum NavigationKeysEnum {
    ArrowDown = "ArrowDown",
    ArrowLeft = "ArrowLeft",
    ArrowRight = "ArrowRight",
    ArrowUp = "ArrowUp",
    End = "End",
    Home = "Home",
    PageDown = "PageDown",
    PageUp = "PageUp"
}
export declare enum EditingKeysEnum {
    Backspace = "Backspace",
    Delete = "Delete",
    Enter = "Enter",
    Escape = "Escape",
    Insert = "Insert",
    Tab = "Tab"
}
export declare enum ModifierKeysEnum {
    Alt = "Alt",
    Ctrl = "Ctrl",
    Meta = "Meta",
    Option = "Option",
    Shift = "Shift"
}
export declare const SpecialKeysGroup: {
    readonly Alt: ModifierKeysEnum.Alt;
    readonly Ctrl: ModifierKeysEnum.Ctrl;
    readonly Meta: ModifierKeysEnum.Meta;
    readonly Option: ModifierKeysEnum.Option;
    readonly Shift: ModifierKeysEnum.Shift;
    readonly Backspace: EditingKeysEnum.Backspace;
    readonly Delete: EditingKeysEnum.Delete;
    readonly Enter: EditingKeysEnum.Enter;
    readonly Escape: EditingKeysEnum.Escape;
    readonly Insert: EditingKeysEnum.Insert;
    readonly Tab: EditingKeysEnum.Tab;
    readonly ArrowDown: NavigationKeysEnum.ArrowDown;
    readonly ArrowLeft: NavigationKeysEnum.ArrowLeft;
    readonly ArrowRight: NavigationKeysEnum.ArrowRight;
    readonly ArrowUp: NavigationKeysEnum.ArrowUp;
    readonly End: NavigationKeysEnum.End;
    readonly Home: NavigationKeysEnum.Home;
    readonly PageDown: NavigationKeysEnum.PageDown;
    readonly PageUp: NavigationKeysEnum.PageUp;
    readonly F1: FunctionKeysEnum.F1;
    readonly F2: FunctionKeysEnum.F2;
    readonly F3: FunctionKeysEnum.F3;
    readonly F4: FunctionKeysEnum.F4;
    readonly F5: FunctionKeysEnum.F5;
    readonly F6: FunctionKeysEnum.F6;
    readonly F7: FunctionKeysEnum.F7;
    readonly F8: FunctionKeysEnum.F8;
    readonly F9: FunctionKeysEnum.F9;
    readonly F10: FunctionKeysEnum.F10;
    readonly F11: FunctionKeysEnum.F11;
    readonly F12: FunctionKeysEnum.F12;
    readonly CapsLock: LockKeysEnum.CapsLock;
    readonly NumLock: LockKeysEnum.NumLock;
    readonly ScrollLock: LockKeysEnum.ScrollLock;
    readonly AudioVolumeDown: MultimediaKeysEnum.AudioVolumeDown;
    readonly AudioVolumeMute: MultimediaKeysEnum.AudioVolumeMute;
    readonly AudioVolumeUp: MultimediaKeysEnum.AudioVolumeUp;
    readonly MediaPlayPause: MultimediaKeysEnum.MediaPlayPause;
    readonly MediaStop: MultimediaKeysEnum.MediaStop;
    readonly MediaTrackNext: MultimediaKeysEnum.MediaTrackNext;
    readonly MediaTrackPrevious: MultimediaKeysEnum.MediaTrackPrevious;
    readonly Space: WhiteSpaceKeysEnum.Space;
    readonly Ampersand: SpecialCharacterKeysEnum.Ampersand;
    readonly Asterisk: SpecialCharacterKeysEnum.Asterisk;
    readonly At: SpecialCharacterKeysEnum.At;
    readonly Backquote: SpecialCharacterKeysEnum.Backquote;
    readonly Backslash: SpecialCharacterKeysEnum.Backslash;
    readonly BracketLeft: SpecialCharacterKeysEnum.BracketLeft;
    readonly BracketRight: SpecialCharacterKeysEnum.BracketRight;
    readonly Caret: SpecialCharacterKeysEnum.Caret;
    readonly Colon: SpecialCharacterKeysEnum.Colon;
    readonly Comma: SpecialCharacterKeysEnum.Comma;
    readonly CurlyLeft: SpecialCharacterKeysEnum.CurlyLeft;
    readonly CurlyRight: SpecialCharacterKeysEnum.CurlyRight;
    readonly Dollar: SpecialCharacterKeysEnum.Dollar;
    readonly Equal: SpecialCharacterKeysEnum.Equal;
    readonly Exclamation: SpecialCharacterKeysEnum.Exclamation;
    readonly GreaterThan: SpecialCharacterKeysEnum.GreaterThan;
    readonly Hash: SpecialCharacterKeysEnum.Hash;
    readonly LessThan: SpecialCharacterKeysEnum.LessThan;
    readonly ParenLeft: SpecialCharacterKeysEnum.ParenLeft;
    readonly ParenRight: SpecialCharacterKeysEnum.ParenRight;
    readonly Percent: SpecialCharacterKeysEnum.Percent;
    readonly Pipe: SpecialCharacterKeysEnum.Pipe;
    readonly Period: SpecialCharacterKeysEnum.Period;
    readonly Plus: SpecialCharacterKeysEnum.Plus;
    readonly QuestionMark: SpecialCharacterKeysEnum.QuestionMark;
    readonly Quote: SpecialCharacterKeysEnum.Quote;
    readonly Semicolon: SpecialCharacterKeysEnum.Semicolon;
    readonly Slash: SpecialCharacterKeysEnum.Slash;
    readonly Subtract: SpecialCharacterKeysEnum.Subtract;
    readonly Tilde: SpecialCharacterKeysEnum.Tilde;
    readonly Underscore: SpecialCharacterKeysEnum.Underscore;
};
export declare const AllKeysGroup: {
    readonly Alt: ModifierKeysEnum.Alt;
    readonly Ctrl: ModifierKeysEnum.Ctrl;
    readonly Meta: ModifierKeysEnum.Meta;
    readonly Option: ModifierKeysEnum.Option;
    readonly Shift: ModifierKeysEnum.Shift;
    readonly Backspace: EditingKeysEnum.Backspace;
    readonly Delete: EditingKeysEnum.Delete;
    readonly Enter: EditingKeysEnum.Enter;
    readonly Escape: EditingKeysEnum.Escape;
    readonly Insert: EditingKeysEnum.Insert;
    readonly Tab: EditingKeysEnum.Tab;
    readonly ArrowDown: NavigationKeysEnum.ArrowDown;
    readonly ArrowLeft: NavigationKeysEnum.ArrowLeft;
    readonly ArrowRight: NavigationKeysEnum.ArrowRight;
    readonly ArrowUp: NavigationKeysEnum.ArrowUp;
    readonly End: NavigationKeysEnum.End;
    readonly Home: NavigationKeysEnum.Home;
    readonly PageDown: NavigationKeysEnum.PageDown;
    readonly PageUp: NavigationKeysEnum.PageUp;
    readonly F1: FunctionKeysEnum.F1;
    readonly F2: FunctionKeysEnum.F2;
    readonly F3: FunctionKeysEnum.F3;
    readonly F4: FunctionKeysEnum.F4;
    readonly F5: FunctionKeysEnum.F5;
    readonly F6: FunctionKeysEnum.F6;
    readonly F7: FunctionKeysEnum.F7;
    readonly F8: FunctionKeysEnum.F8;
    readonly F9: FunctionKeysEnum.F9;
    readonly F10: FunctionKeysEnum.F10;
    readonly F11: FunctionKeysEnum.F11;
    readonly F12: FunctionKeysEnum.F12;
    readonly CapsLock: LockKeysEnum.CapsLock;
    readonly NumLock: LockKeysEnum.NumLock;
    readonly ScrollLock: LockKeysEnum.ScrollLock;
    readonly AudioVolumeDown: MultimediaKeysEnum.AudioVolumeDown;
    readonly AudioVolumeMute: MultimediaKeysEnum.AudioVolumeMute;
    readonly AudioVolumeUp: MultimediaKeysEnum.AudioVolumeUp;
    readonly MediaPlayPause: MultimediaKeysEnum.MediaPlayPause;
    readonly MediaStop: MultimediaKeysEnum.MediaStop;
    readonly MediaTrackNext: MultimediaKeysEnum.MediaTrackNext;
    readonly MediaTrackPrevious: MultimediaKeysEnum.MediaTrackPrevious;
    readonly Space: WhiteSpaceKeysEnum.Space;
    readonly Ampersand: SpecialCharacterKeysEnum.Ampersand;
    readonly Asterisk: SpecialCharacterKeysEnum.Asterisk;
    readonly At: SpecialCharacterKeysEnum.At;
    readonly Backquote: SpecialCharacterKeysEnum.Backquote;
    readonly Backslash: SpecialCharacterKeysEnum.Backslash;
    readonly BracketLeft: SpecialCharacterKeysEnum.BracketLeft;
    readonly BracketRight: SpecialCharacterKeysEnum.BracketRight;
    readonly Caret: SpecialCharacterKeysEnum.Caret;
    readonly Colon: SpecialCharacterKeysEnum.Colon;
    readonly Comma: SpecialCharacterKeysEnum.Comma;
    readonly CurlyLeft: SpecialCharacterKeysEnum.CurlyLeft;
    readonly CurlyRight: SpecialCharacterKeysEnum.CurlyRight;
    readonly Dollar: SpecialCharacterKeysEnum.Dollar;
    readonly Equal: SpecialCharacterKeysEnum.Equal;
    readonly Exclamation: SpecialCharacterKeysEnum.Exclamation;
    readonly GreaterThan: SpecialCharacterKeysEnum.GreaterThan;
    readonly Hash: SpecialCharacterKeysEnum.Hash;
    readonly LessThan: SpecialCharacterKeysEnum.LessThan;
    readonly ParenLeft: SpecialCharacterKeysEnum.ParenLeft;
    readonly ParenRight: SpecialCharacterKeysEnum.ParenRight;
    readonly Percent: SpecialCharacterKeysEnum.Percent;
    readonly Pipe: SpecialCharacterKeysEnum.Pipe;
    readonly Period: SpecialCharacterKeysEnum.Period;
    readonly Plus: SpecialCharacterKeysEnum.Plus;
    readonly QuestionMark: SpecialCharacterKeysEnum.QuestionMark;
    readonly Quote: SpecialCharacterKeysEnum.Quote;
    readonly Semicolon: SpecialCharacterKeysEnum.Semicolon;
    readonly Slash: SpecialCharacterKeysEnum.Slash;
    readonly Subtract: SpecialCharacterKeysEnum.Subtract;
    readonly Tilde: SpecialCharacterKeysEnum.Tilde;
    readonly Underscore: SpecialCharacterKeysEnum.Underscore;
    readonly A: LetterKeysEnum.A;
    readonly B: LetterKeysEnum.B;
    readonly C: LetterKeysEnum.C;
    readonly D: LetterKeysEnum.D;
    readonly E: LetterKeysEnum.E;
    readonly F: LetterKeysEnum.F;
    readonly G: LetterKeysEnum.G;
    readonly H: LetterKeysEnum.H;
    readonly I: LetterKeysEnum.I;
    readonly J: LetterKeysEnum.J;
    readonly K: LetterKeysEnum.K;
    readonly L: LetterKeysEnum.L;
    readonly M: LetterKeysEnum.M;
    readonly N: LetterKeysEnum.N;
    readonly O: LetterKeysEnum.O;
    readonly P: LetterKeysEnum.P;
    readonly Q: LetterKeysEnum.Q;
    readonly R: LetterKeysEnum.R;
    readonly S: LetterKeysEnum.S;
    readonly T: LetterKeysEnum.T;
    readonly U: LetterKeysEnum.U;
    readonly V: LetterKeysEnum.V;
    readonly W: LetterKeysEnum.W;
    readonly X: LetterKeysEnum.X;
    readonly Y: LetterKeysEnum.Y;
    readonly Z: LetterKeysEnum.Z;
    readonly a: LetterKeysEnum.a;
    readonly b: LetterKeysEnum.b;
    readonly c: LetterKeysEnum.c;
    readonly d: LetterKeysEnum.d;
    readonly e: LetterKeysEnum.e;
    readonly f: LetterKeysEnum.f;
    readonly g: LetterKeysEnum.g;
    readonly h: LetterKeysEnum.h;
    readonly i: LetterKeysEnum.i;
    readonly j: LetterKeysEnum.j;
    readonly k: LetterKeysEnum.k;
    readonly l: LetterKeysEnum.l;
    readonly m: LetterKeysEnum.m;
    readonly n: LetterKeysEnum.n;
    readonly o: LetterKeysEnum.o;
    readonly p: LetterKeysEnum.p;
    readonly q: LetterKeysEnum.q;
    readonly r: LetterKeysEnum.r;
    readonly s: LetterKeysEnum.s;
    readonly t: LetterKeysEnum.t;
    readonly u: LetterKeysEnum.u;
    readonly v: LetterKeysEnum.v;
    readonly w: LetterKeysEnum.w;
    readonly x: LetterKeysEnum.x;
    readonly y: LetterKeysEnum.y;
    readonly z: LetterKeysEnum.z;
    readonly Zero: NumberKeysEnum.Zero;
    readonly One: NumberKeysEnum.One;
    readonly Two: NumberKeysEnum.Two;
    readonly Three: NumberKeysEnum.Three;
    readonly Four: NumberKeysEnum.Four;
    readonly Five: NumberKeysEnum.Five;
    readonly Six: NumberKeysEnum.Six;
    readonly Seven: NumberKeysEnum.Seven;
    readonly Eight: NumberKeysEnum.Eight;
    readonly Nine: NumberKeysEnum.Nine;
};
//# sourceMappingURL=enums.d.ts.map