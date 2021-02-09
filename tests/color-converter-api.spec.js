const request = require('request');
const assert = require('assert');

describe('teste api para conversao de cores', function() {
    it('converte para hex', function(done) {
        request('http://localhost:9000/rgb-to-hex/255/0/0', function (error, response, body) {
            assert.equal(response.statusCode, 200);
            assert.equal(body, '#ff0000');
            done();

        });
    }); 
    it('converte para rgb', function (done) {
        request('http://localhost:9000/hex-to-rgb/ff0000', function (error, response, body) {

            assert.equal(response.statusCode, 200);
            assert.equal(body, '255,0,0');
            done();
        })

    });
})