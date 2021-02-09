//assert recurso nativo do node
const assert = require('assert');
const counter = require('../src/counter');


describe('Testando contador', function() {
    
    // before(function () {
    //     console.log('before');
    // });

    // after(function () {
    //     console.log('after');
    // })

    beforeEach(function () {
        //console.log('beforeeach');
        counter.count = 0;
    });

    // afterEach(function () {
    //     console.log('aftereach');
    // })
    
    
    it('contador deve iniciar com valor zero', function () {
        const counterResult = counter.count;

        assert.equal(counterResult, 0)
    })

    it('teste de incremento de um', function () {
        
        counter.increment();
        const counterResult = counter.count;

        assert.equal(counterResult, 1) 
    })

    it('teste de decremento de um', function () {
        // counter.count = 0;
        counter.decrement(); 
        const counterResult = counter.count;

        assert.equal(counterResult, -1) 
    })

    it('teste de incremento de 10', function () {
        // counter.count = 0;
        counter.increment(10);
        const counterResult = counter.count;

        assert.equal(counterResult, 10) 
    })
} )