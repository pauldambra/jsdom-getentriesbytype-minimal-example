import {describe} from 'mocha'
import {expect} from 'chai'
import {JSDOM} from 'jsdom'

describe('window performance', () => {
    interface('can use window.console', ()=> {
        const {window} = new JSDOM('<html><body></body</html>')
        expect(window.console).to.be.defined()
    })
})