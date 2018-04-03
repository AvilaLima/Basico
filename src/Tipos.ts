let nome:string = "Ana";
let idadeT:number = 21;
let eMaior:boolean;

if(idadeT>17){
    eMaior=true;
}else{
    eMaior=false;
}

let lista:string[] = ["verde","amarelo","azul"];
let numeros:Array<number> = [76,47,34];

enum Cor {vermelho=2,azul,laranja};

let c:Cor= Cor.azul;

//Saída 1
console.log(c[0]);

//Saída vermelho
console.log(Cor[2]);

let aux; //Tipo any caso n tenha nenhum tipo declarado
aux = "teste";
aux = 43;
aux = [50,1];

console.log(aux);

let arrayAny:any[] = [44,"teste",{}];

function listaNomes(lista:string[]):void{
    console.log(lista); 
}