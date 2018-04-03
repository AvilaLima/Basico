"use strict";
/*
interface IVeiculo{
    rodas:number;
    getPreco();
    getRodas();
}
class Veiculo implements IVeiculo{

    //public nome:string;

    constructor(public nome:string, private preco:number, public rodas:number=2){
        this.nome=nome;
        this.preco=preco;
        this.rodas=rodas
    }

    getPreco():number{
        return this.preco;
    }
    getRodas():number{
        return this.rodas;
    }
}


class Moto extends Veiculo{

}
*/
exports.__esModule = true;
var veiculo_1 = require("./classes/veiculo");
var camaro = new veiculo_1.Veiculo('Camaro', 200000);
console.log(camaro.getPreco());
var moto_1 = require("./classes/moto");
var honda = new moto_1.Moto("bis", 10000);
console.log(honda.getPreco());
document.body.innerHTML = honda.getNome();
