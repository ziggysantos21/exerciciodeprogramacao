const prompt = require('prompt-sync')();

function mediaAritmetica(numero1, numero2, numero3) {
  var soma = parseInt(numero1) + parseInt(numero2) + parseInt(numero3);
  var media = soma / 3;
  console.log("qual é a soma dos números= " +soma);
  return media;
}

var numero1 = prompt("Digite o primeiro número: ");
var numero2 = prompt("Digite o segundo número: ");
var numero3 = prompt("Digite o terceiro número: ");

var media = mediaAritmetica(numero1, numero2, numero3);

console.log("A média aritmética é: " + media);

  