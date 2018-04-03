var nome = "Ana";
var idade = 21;
var eMaior;
if (idade > 17) {
    eMaior = true;
}
else {
    eMaior = false;
}
var lista = ["verde", "amarelo", "azul"];
var numeros = [76, 47, 34];
var Cor;
(function (Cor) {
    Cor[Cor["vermelho"] = 2] = "vermelho";
    Cor[Cor["azul"] = 3] = "azul";
    Cor[Cor["laranja"] = 4] = "laranja";
})(Cor || (Cor = {}));
;
var c = Cor[azul];
//Saída 1
console.log(c[0]);
//Saída vermelho
console.log(Cor[2]);
var aux; //Tipo any caso n tenha nenhum tipo declarado
aux = "teste";
aux = 43;
aux = [50, 1];
console.log(aux);
var arrayAny = [44, "teste", {}];
function listaNomes(lista) {
    console.log(lista);
}
