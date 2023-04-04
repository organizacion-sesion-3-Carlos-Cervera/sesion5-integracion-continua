// Librerías para testeo
const { assert } = require('chai');

// Carga del programa principal
const math = require('../math');

// Tests
describe('Módulo math', function () {
    describe('Función suma', function () {
        it('Suma de números positivos', function () {
            assert.equal(math.sumar(4, 6), 10);
        });
        it('Suma de números positivos y negativos', function () {
            assert.equal(math.sumar(-2, 6), 4);
        });
        it('Suma de números negativos', function () {
            assert.equal(math.sumar(-2, -3), -5);
        });
    });
    describe('Función resta', function () {
        it('Resta de números positivos', function () {
            assert.equal(math.restar(4, 6), -2);
            assert.equal(math.restar(6, 4), 2);
            assert.equal(math.restar(6, 6), 0);
        });
        it('Resta de números positivos y negativos', function () {
            assert.equal(math.restar(-2, 6), -8);
        });
        it('Resta de números negativos', function () {
            assert.equal(math.restar(-2, -3), 1);
        });
    });
});
