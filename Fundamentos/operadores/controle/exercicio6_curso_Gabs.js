const prompt = require('prompt-sync')();

function InverterNumero(){
    var numero = prompt("Digite um número: ");
    var numeroInvertido = numero.split('').reverse().join('');
   console.log("Número invertido: " + numeroInvertido); 
  
}
InverterNumero();
  