type KeyEvent = {
    key: string;
    metaKey: boolean;
    shiftKey: boolean;
    ctrlKey: boolean;
};
type KeyGroup = {
    type: "AND" | "OR";
    keys: (string | KeyGroup)[];
};
declare class KeysKey {
    static Number: {
        Zero: string;
        One: string;
        Two: string;
        Three: string;
        Four: string;
        Five: string;
        Six: string;
        Seven: string;
        Eight: string;
        Nine: string;
    };
    static Letter: {
        A: string;
        B: string;
        C: string;
        D: string;
        E: string;
        F: string;
        G: string;
        H: string;
        I: string;
        J: string;
        K: string;
        L: string;
        M: string;
        N: string;
        O: string;
        P: string;
        Q: string;
        R: string;
        S: string;
        T: string;
        U: string;
        V: string;
        W: string;
        X: string;
        Y: string;
        Z: string;
    };
    static SpecialKeys: {
        Meta: string;
        Shift: string;
    };
    static SpecialGroups: {
        MetaAndShift: (event: KeyEvent) => boolean;
        MetaOrControl: (event: KeyEvent) => boolean;
    };
    static is(event: KeyEvent, keys: Array<string | KeyGroup>): string | string[];
    static And(...keys: Array<string | KeyGroup>): KeyGroup;
    static Or(...keys: Array<string | KeyGroup>): KeyGroup;
}
//# sourceMappingURL=main.d.ts.map