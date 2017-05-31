import {expect} from 'chai';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
import fs from 'fs';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    })
});

describe('index.html', () => {
    it('should say hello', () => {
        const index = new JSDOM(fs.readFileSync('./src/index.html', "utf-8"));
        var h1 = index.window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal("Hello World!");
        index.window.close();
    })
});