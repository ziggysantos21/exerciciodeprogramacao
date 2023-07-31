/*Faça um programa em Javascript que receba um usuário e uma senha e caso ele acerte o programa irá imprimir a mensagem "Acesso liberado" e irá sair do programa. 
Já se ele não acertar, o sistema irá enviar a mensagem "Usuário ou senha inválidos. Tente novamente" e irá pedir novamente para o mesmo digitar, até que ele acerte.

Considerando usuário válido:
Usuário: TIVIC 
Senha: 433UQM!*/

const prompt = require("prompt-sync")();


while (true) {
    let usuario = prompt("Enter usuário: ");
    let senha = prompt("Enter Senha: ");
    let usuarioCorreto = 'TIVIC';
    let senhaCorreta = '433UQM!';

    if (usuario == usuarioCorreto && senha == senhaCorreta) {
        console.log('Acesso liberado');
        break;

    } else {
        console.log('Usuário ou senha inválidos: Tente Novamente');

    }
}
//  let texto = 'Lorem Ipsum is simply Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
//  let usuario = prompt ('Digite uma palavra');
//  texto = texto.toUpperCase();
//  usuario = usuario.toUpperCase();
// console.log(usuario);
// console.log(texto);

