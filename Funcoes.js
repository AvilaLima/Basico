//Fortemente tipado
var linguagem = 'Typescript';
var texto = "Ol\u00E1 " + linguagem;
var idade = 33;
console.log(texto);
//Functions
var getPerfil = function (nome, idade, email) {
    console.log(nome, idade, email);
};
function getIdade(idade) {
    return idade + " anos";
}
var idadeAnos = parseInt(getIdade(45));
getPerfil("Alexandre", 54, "teste@gmail.com");
//Arrow Functions
var getPerfilArrow = function (nome, idade, email) { return console.log(nome, idade, email); };
var getPerfilArrow2 = function (nome, idade, email) {
    nome = nome.toUpperCase();
    console.log(nome, idade, email);
};
getPerfilArrow("Alexandre", 54, "teste@gmail.com");
getPerfilArrow2("Alexandre", 54, "teste@gmail.com");
