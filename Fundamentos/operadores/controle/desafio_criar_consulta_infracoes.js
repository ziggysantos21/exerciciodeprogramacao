const prompt = require('prompt-sync')();

var infracoes = [
  { codigo: "001", texto: "Passou em via com velocidade acima do limite", valor: 130.90 },
  { codigo: "002", texto: "Estacionou em local proibido", valor: 123.40 },
  { codigo: "003", texto: "Parou sobre a faixa de pedestre", valor: 50.90 },
  { codigo: "004", texto: "Transitar sem capacete", valor: 1170.45 }
];

var multas = [];
var valorArrecadado = 0;

while (true) {
  console.log('Menu de infrações;');
  console.log('1 - Consultar infrações;');
  console.log('2 - Inserir Multa;');
  console.log('3 - Mostrar valor arrecadado;');
  console.log('4 - Sair.');


  var opcoes = prompt('Digite a opção desejada: ');

  switch (opcoes) {
    case '1':
      consultarInfracoes();//infracoes
      break;
    case '2':
      inserirMulta(); //Multas
      break;
    case '3':
      mostrarValorArrecadado(); //Valor Arrecadado
      break;
    case '4':
      console.log('Saindo...');
      return; // Termina a execução do programa..
    default:
      console.log('Opção inválida. Tente novamente.');
      break;
  }

}


function consultarInfracoes() { //Função para a consulta das Infrações
  console.log('Infrações:');
  for (var i = 0; i < infracoes.length; i++) {
    console.log(`${infracoes[i].codigo}  -  ${infracoes[i].texto}`);
  }
}

function inserirMulta() { //Função para inserir a Multa
  var placa = prompt("Digite a placa do veículo:");
  var codigoInfracao = prompt("Digite o código da infração:");
  var dataInfracao = prompt("Digite a data da infração:"); //Tenho que fixar essa variável ....


  var infracao = infracoes.find(function (item) {   // Essa variável verifica se o código de infração é válido
    return item.codigo === codigoInfracao;
  });

  if (!infracao) {
    console.log("Código de infração inválido.");
    return;
  }

  var multaExistente = multas.find(function (item) {
    return item.placa == placa && item.codigo == codigoInfracao;
  });

  multas.push({
    placa: placa,
    codigo: codigoInfracao,
    data: dataInfracao,
    quantidade: 1,
    valor: infracao.valor * (multaExistente ? 2 : 1) //Opção "Ternária!" - (Substitui o if);
  });


  valorArrecadado += infracao.valor;
  console.log("Multa cadastrada com sucesso!");
}

function mostrarValorArrecadado() {
  console.log("Data\t\tPlaca\t\tDescrição da infração\t\t\tValor");
  for (var i = 0; i < multas.length; i++) {
    console.log(
      multas[i].data + "\t" +
      multas[i].placa + "\t" +
      multas[i].codigo + "\t" +
      multas[i].quantidade + "\t" +
      multas[i].valor.toFixed(2)
    );
  }

  console.log("Total arrecadado:", valorArrecadado.toFixed(2));
}

