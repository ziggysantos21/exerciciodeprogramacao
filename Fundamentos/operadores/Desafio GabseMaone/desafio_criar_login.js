
const prompt = require("prompt-sync")();

const usuarios = []; // Objeto para armazenar os usuários e senhas cadastrados


function criarLogin() {
  const usuario = prompt("Digite o nome de usuário: ");
  const senha = prompt("Digite a senha: ");


  usuarios.push({ usuario, senha });

  console.log("Login criado com sucesso! ");
}

function fazerLogin() {
  const usuario = prompt("Digite o nome do usuario: ");
  const senha = prompt("Digite a senha: ");


  const loginEncontrado = usuarios.find((user) => {
    return user.usuario === usuario && user.senha === senha;
  });

  if (loginEncontrado) {
    console.log("Acesso Liberado");
  } else {
    console.log("Usuário(a) ou Senha inválida");
    console.log("Tente Novamente");
    fazerLogin();
  }
}


// Loop principal do programa
let opcao;
while (opcao !== '3') {

  opcao = prompt(" Menu:\n1 - Criar Login\n2 - Logar\n3 - Sair\nDigite o número da opção desejada: ");

  switch (opcao) {
    case "1":
      console.log("***Seja Bem vindo ao Desafio***");
      criarLogin();
      break;
    case "2":
      fazerLogin();
      break;
    case "3":
      console.log("Saindo do programa... ");
      console.log("Obrigado por visitar o nosso Sistema");
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
      break;
  }
}