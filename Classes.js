var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Veiculo = (function () {
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
    return Veiculo;
}());
var camaro = new Veiculo('Camaro', 200000);
console.log(camaro.getPreco());
var Moto = (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Moto;
}(Veiculo));
var honda = new Moto("bis", 10000);
console.log(honda.getPreco());
