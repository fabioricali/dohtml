const be = require('bejs');
const dom = require('../');

describe('dom', function () {

    before(function () {
        this.jsdom = require('jsdom-global')()
    });

    after(function () {
        this.jsdom()
    });

    beforeEach(function () {
        document.body.innerHTML = '';
    });

    describe('create', function () {
        it('should not be null', function () {
            let result = dom.create('<div id="test"></div>');
            be.err.not.null(result);
        });
        it('should be error', function (done) {
            try {
                dom.create('');
            } catch (e) {
                done();
            }
        });
    });
});