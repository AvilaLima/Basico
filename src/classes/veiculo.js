"use strict";
exports.__esModule = true;
var Veiculo = /** @class */ (function () {
    //public nome:string;
    function Veiculo(nome, preco, rodas) {
        if (rodas === void 0) { rodas = 2; }
        this.nome = nome;
        this.preco = preco;
        this.rodas = rodas;
        this.nome = nome;
        this.preco = preco;
        this.rodas = rodas;
    }
    Veiculo.prototype.getPreco = function () {
        return this.preco;
    };
    Veiculo.prototype.getRodas = function () {
        return this.rodas;
    };
    Veiculo.prototype.getNome = function () {
        return this.nome;
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
