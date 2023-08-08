// function exibirSaudacao(nome, diaAtual){
//     this.diaAtual = new Date(Date.now()).toLocaleString().split(',')[0];
//     this.nome = require('readline-sync').question('Digite o seu nome: \n');
//     console.log(`Bom dia ${this.nome} \nHoje são ${this.diaAtual}!!!`);
// }
// // exibirSaudacao();

// function saudacao(){
//     console.log('Ola Mundo!!!');
// }
// saudacao();

// function dobro(num){
//     console.log(num = num * 2);
// }
// dobro(3);

// function mostrarNumeros(n1 , n2) {
//     if(n1 === n2){
//         console.log('os numeros são iquais');
//     }else if(n1 < n2){
//         for (let i=n1; i <= n2; i++ ){
//             console.log(i)
//         }

//     }else{
//         for (let i=n1; i >= n2; i-- ){
//             console.log(i)
//     }
// }
// }

// mostrarNumeros(10 , 1);

// function verificarPar(num){
//     num = parseInt(require('readline-sync').question('Digite um numero: \n'));
//         if (num % 2 === 0){
//             console.log(`O número ${num} é par`);
//         } else {
//             console.log(`O número ${num} não é par`);
//         }
// }
// // verificarPar();
let lista = [];
function imprimaLista(){
    lista = require('readline-sync').question('Digite o item que deseja inserir na lista: \n');
    
    continuar = require('readline-sync').question('Continuar  Qualquer tecla para Sim e  "n" para não \n');
}
imprimaLista();
