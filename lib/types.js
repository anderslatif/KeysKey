export var Number;
(function (Number) {
    Number["Zero"] = "0";
    Number["One"] = "1";
    Number["Two"] = "2";
    Number["Three"] = "3";
    Number["Four"] = "4";
    Number["Five"] = "5";
    Number["Six"] = "6";
    Number["Seven"] = "7";
    Number["Eight"] = "8";
    Number["Nine"] = "9";
})(Number || (Number = {}));
;
export var Letter;
(function (Letter) {
    Letter["A"] = "A";
    Letter["B"] = "B";
    Letter["C"] = "C";
    Letter["D"] = "D";
    Letter["E"] = "E";
    Letter["F"] = "F";
    Letter["G"] = "G";
    Letter["H"] = "H";
    Letter["I"] = "I";
    Letter["J"] = "J";
    Letter["K"] = "K";
    Letter["L"] = "L";
    Letter["M"] = "M";
    Letter["N"] = "N";
    Letter["O"] = "O";
    Letter["P"] = "P";
    Letter["Q"] = "Q";
    Letter["R"] = "R";
    Letter["S"] = "S";
    Letter["T"] = "T";
    Letter["U"] = "U";
    Letter["V"] = "V";
    Letter["W"] = "W";
    Letter["X"] = "X";
    Letter["Y"] = "Y";
    Letter["Z"] = "Z";
    Letter["a"] = "a";
    Letter["b"] = "b";
    Letter["c"] = "c";
    Letter["d"] = "d";
    Letter["e"] = "e";
    Letter["f"] = "f";
    Letter["g"] = "g";
    Letter["h"] = "h";
    Letter["i"] = "i";
    Letter["j"] = "j";
    Letter["k"] = "k";
    Letter["l"] = "l";
    Letter["m"] = "m";
    Letter["n"] = "n";
    Letter["o"] = "o";
    Letter["p"] = "p";
    Letter["q"] = "q";
    Letter["r"] = "r";
    Letter["s"] = "s";
    Letter["t"] = "t";
    Letter["u"] = "u";
    Letter["v"] = "v";
    Letter["w"] = "w";
    Letter["x"] = "x";
    Letter["y"] = "y";
    Letter["z"] = "z";
})(Letter || (Letter = {}));
;
export var SpecialCharacter;
(function (SpecialCharacter) {
    SpecialCharacter["Ampersand"] = "&";
    SpecialCharacter["Asterisk"] = "*";
    SpecialCharacter["At"] = "@";
    SpecialCharacter["Backquote"] = "`";
    SpecialCharacter["Backslash"] = "\\";
    SpecialCharacter["BracketLeft"] = "[";
    SpecialCharacter["BracketRight"] = "]";
    SpecialCharacter["Caret"] = "^";
    SpecialCharacter["Colon"] = ":";
    SpecialCharacter["Comma"] = ",";
    SpecialCharacter["CurlyLeft"] = "{";
    SpecialCharacter["CurlyRight"] = "}";
    SpecialCharacter["Dollar"] = "$";
    SpecialCharacter["Equal"] = "=";
    SpecialCharacter["Exclamation"] = "!";
    SpecialCharacter["GreaterThan"] = ">";
    SpecialCharacter["Hash"] = "#";
    SpecialCharacter["LessThan"] = "<";
    SpecialCharacter["ParenLeft"] = "(";
    SpecialCharacter["ParenRight"] = ")";
    SpecialCharacter["Percent"] = "%";
    SpecialCharacter["Pipe"] = "|";
    SpecialCharacter["Period"] = ".";
    SpecialCharacter["Plus"] = "+";
    SpecialCharacter["QuestionMark"] = "?";
    SpecialCharacter["Quote"] = "'";
    SpecialCharacter["Semicolon"] = ";";
    SpecialCharacter["Slash"] = "/";
    SpecialCharacter["Subtract"] = "-";
    SpecialCharacter["Tilde"] = "~";
    SpecialCharacter["Underscore"] = "_";
})(SpecialCharacter || (SpecialCharacter = {}));
;
export var WhiteSpace;
(function (WhiteSpace) {
    WhiteSpace["Enter"] = "Enter";
    WhiteSpace["Space"] = " ";
    WhiteSpace["Tab"] = "Tab";
})(WhiteSpace || (WhiteSpace = {}));
;
export var Multimedia;
(function (Multimedia) {
    Multimedia["AudioVolumeDown"] = "AudioVolumeDown";
    Multimedia["AudioVolumeMute"] = "AudioVolumeMute";
    Multimedia["AudioVolumeUp"] = "AudioVolumeUp";
    Multimedia["MediaPlayPause"] = "MediaPlayPause";
    Multimedia["MediaStop"] = "MediaStop";
    Multimedia["MediaTrackNext"] = "MediaTrackNext";
    Multimedia["MediaTrackPrevious"] = "MediaTrackPrevious";
})(Multimedia || (Multimedia = {}));
;
export var Lock;
(function (Lock) {
    Lock["CapsLock"] = "CapsLock";
    Lock["NumLock"] = "NumLock";
    Lock["ScrollLock"] = "ScrollLock";
})(Lock || (Lock = {}));
;
export var Navigation;
(function (Navigation) {
    Navigation["ArrowDown"] = "ArrowDown";
    Navigation["ArrowLeft"] = "ArrowLeft";
    Navigation["ArrowRight"] = "ArrowRight";
    Navigation["ArrowUp"] = "ArrowUp";
    Navigation["End"] = "End";
    Navigation["Home"] = "Home";
    Navigation["PageDown"] = "PageDown";
    Navigation["PageUp"] = "PageUp";
})(Navigation || (Navigation = {}));
;
export var Editing;
(function (Editing) {
    Editing["Backspace"] = "Backspace";
    Editing["Delete"] = "Delete";
    Editing["Enter"] = "Enter";
    Editing["Escape"] = "Escape";
    Editing["Insert"] = "Insert";
    Editing["Tab"] = "Tab";
})(Editing || (Editing = {}));
;
export var Modifier;
(function (Modifier) {
    Modifier["Alt"] = "Alt";
    Modifier["Control"] = "Control";
    /** Represents the 'Meta' key, which is the Command key on Mac and Windows key on Windows systems. */
    Modifier["Meta"] = "Meta";
    /** Represents the 'Option' key on Mac keyboards, often used as a modifier key. */
    Modifier["Option"] = "Option";
    Modifier["Shift"] = "Shift";
})(Modifier || (Modifier = {}));
;
export var FunctionKeys;
(function (FunctionKeys) {
    FunctionKeys["F1"] = "F1";
    FunctionKeys["F2"] = "F2";
    FunctionKeys["F3"] = "F3";
    FunctionKeys["F4"] = "F4";
    FunctionKeys["F5"] = "F5";
    FunctionKeys["F6"] = "F6";
    FunctionKeys["F7"] = "F7";
    FunctionKeys["F8"] = "F8";
    FunctionKeys["F9"] = "F9";
    FunctionKeys["F10"] = "F10";
    FunctionKeys["F11"] = "F11";
    FunctionKeys["F12"] = "F12";
})(FunctionKeys || (FunctionKeys = {}));
;
export const SpecialKeysGroup = {
    ...SpecialCharacter,
    ...WhiteSpace,
    ...Multimedia,
    ...Lock,
    ...Function,
    ...Navigation,
    ...Editing,
    ...Modifier,
};
export const AllKeysGroup = {
    ...Number,
    ...Letter,
    ...SpecialKeysGroup,
};
//# sourceMappingURL=types.js.map