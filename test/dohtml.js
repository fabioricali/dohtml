const be = require('bejs');
const dom = require('../');

describe('dom', function () {

    this.timeout(5000);

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

    describe('render', function () {
        it('should not be null', function () {
            let result = dom.create('<div id="test"></div>');
            dom.render(result, dom.create('<b></b>'));
            be.err.not.null(result.querySelector('b'));
        });
    });
});