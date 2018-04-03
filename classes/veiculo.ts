import {IVeiculo} from './interfaces/veiculo'
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

export {Veiculo}