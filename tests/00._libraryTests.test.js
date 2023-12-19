import { expect } from 'chai';
import KeysKey from "../lib/index.js";


describe('Testing the library', () => {
    it('Can instantiate the library and is a function', () => {
        // to.be.a checks the type of the object
        expect(KeysKey).to.be.a('function');        
    });

    it("Debug mode is false by default - static class variable", () => {
        // should default to false
        expect(KeysKey.debugMode).to.be.false;
    });
 
    it("Debug mode is false by default - class instantiation", () => {
        // alternatively, it will be undefined during class instantiation since the constructor won't set it
        const enableDebug = false;
        const libraryInstance = new KeysKey(enableDebug);
        expect(libraryInstance.debugMode).to.be.undefined;
    });

    it("Can set debug mode to true - static class variable", () => {
        // set the flag globally
        KeysKey.debugMode = true;
        expect(KeysKey.debugMode).to.be.true;
    
    });

    it("Can set debug mode to true - class instantiation", () => {       
        // alternatively, set the flag in the constructor
        const enableDebug = true;
        new KeysKey(enableDebug);
        expect(KeysKey.debugMode).to.be.true;
    });

});
