// Librerías para testeo
const { assert } = require('chai');

// Carga del programa principal
const math = require('../par');

// Tests
describe('Módulo par', function () {
    describe('Función es par', function () {
        it('Numeros pares del 1 al 10', function () {
            assert.equal(math.esPar(1), "impar");
            assert.equal(math.esPar(2), "par");
            assert.equal(math.esPar(3), "impar");
            assert.equal(math.esPar(8), "par");
        });
        it('Numeros pares del 10 al 100', function () {
            assert.equal(math.esPar(21), "impar");
            assert.equal(math.esPar(36), "par");
            assert.equal(math.esPar(80), "par");
            assert.equal(math.esPar(95), "impar");
        });
        it('Numeros pares negativos', function () {
            assert.equal(math.esPar(-16), "par");
            assert.equal(math.esPar(-61), "impar");
            assert.equal(math.esPar(-77), "impar");
            assert.equal(math.esPar(-86), "par");

        });
    });
});
