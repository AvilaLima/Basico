
//Fortemente tipado
let linguagem:string = 'Typescript';
let texto:string = `Olá ${linguagem}`;
let idade:number = 33;


console.log(texto);

//Functions
let getPerfil = function(nome:string,idade:number,email:string):void{
    console.log(nome,idade,email);
};

function getIdade(idade):string{
    return idade + " anos";
}

let idadeAnos:number = parseInt(getIdade(45));


getPerfil("Alexandre",54,"teste@gmail.com")

//Arrow Functions
let getPerfilArrow = (nome:string,idade:number,email:string):void => console.log(nome,idade,email);


let getPerfilArrow2 = (nome:string,idade:number,email:string):void => {
    nome = nome.toUpperCase();
    console.log(nome,idade,email);
} 




getPerfilArrow("Alexandre",54,"teste@gmail.com")
getPerfilArrow2("Alexandre",54,"teste@gmail.com")