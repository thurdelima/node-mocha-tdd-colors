const assert = require('assert');
const colorConverter = require('../src/color-converter');

describe('testando conversor de cores', function () {
    describe('conversao de hex para rgb', function() {
        it('conversao com #', function() {
            const colorRgb = colorConverter.toRgb('#ff0000');
            assert.deepEqual(colorRgb, [255, 0, 0]);
        })

        it('conversao sem #', function() {
            const colorRgb = colorConverter.toRgb('#ff0000');
            assert.deepEqual(colorRgb, [255, 0, 0]);
        })
    })
    
    
    
    describe('conversao de rgb para hex', function () {
        it('converte vermelho', function () {

            //criando a cor vermelho
            const colorRgb = [255, 0, 0];
            const colorHex = colorConverter.toHex(colorRgb);
            
            //cor seja igual a vermelho
            assert.equal(colorHex, '#ff0000');


        })

        it('converte verde', function () {

            //criando a cor verde
            const colorRgb = [0, 255, 0];
            const colorHex = colorConverter.toHex(colorRgb);
            
            //cor seja igual a verde
            assert.equal(colorHex, '#00ff00');


        })

        it('converte azul', function () {

            //criando a cor azul
            const colorRgb = [0, 0, 255];
            const colorHex = colorConverter.toHex(colorRgb);
            
            //cor seja igual a azul
            assert.equal(colorHex, '#0000ff');


        })
    })

   
});

