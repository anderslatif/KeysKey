import { expect } from 'chai';
import KeysKey from "../lib/index.js";


describe('Testing the library', () => {
    it('Can instantiate the library', () => {
        // todo 
        // console.log(typeof KeysKey, "=========");
        // expect(typeof KeysKey).to.be.an('function');

        
    });

    it("Can set debug mode to true", () => {
        // set the flag globally
        KeysKey.debugMode = true;
        expect(KeysKey.debugMode).to.be.true;
        
        // todo
        
        // alternatively, set the flag in the constructor
        // const enableDebug = true;
        // KeysKey(enableDebug);
        // expect(KeysKey.debugMode).to.be.true;
    });
    
    it("Debug mode is false by default", () => {
        // should default to false
        // expect(KeysKey.debugMode).to.be.false;
        
        // todo
        
        // alternatively, set the flag in the constructor
        const enableDebug = false;
        const libraryInstance = new KeysKey(enableDebug);
        // expect(libraryInstance.debugMode).to.be.false;
    });
 
});
