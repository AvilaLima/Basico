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

import {Veiculo} from './classes/veiculo'

let camaro:Veiculo = new Veiculo('Camaro',200000);

console.log(camaro.getPreco())

import {Moto} from './classes/moto'
let honda:Moto = new Moto("bis",10000);

console.log(honda.getPreco())
document.body.innerHTML =  honda.getNome();