const { question } = require('readline-sync');

//1 Faça um programa que leia o nome do aluno, três notas e mostre o nome e a média(aritmética) do aluno.
// let n1 = 0 , n2 = 0 , n3 = 0 , media = 0;

// const aluno = require('readline-sync').question('Digite o nome do aluno(a): \n');
// n1 = parseInt(require('readline-sync').question('Digite a primeira nota do aluno: \n'));
// n2 = parseInt(require('readline-sync').question('Agora digite a segunda nota do aluno(a)\n'));
// n3 = parseInt(require('readline-sync').question('E agora digite a terceira nota do aluno(a) \n'));
// media = (n1 + n2 + n3) / 3;
// console.log(`A média do aluno(a) ${aluno} é: ${media.toFixed(2)}`);

//2 Faça um programa com Javascript para verificar se um determinado ano, fornecido pelo usuário, é bissexto. 
//Um ano é bissexto se for divisível por 400 ou se for divisível por 4 e não for divisível por 100.Exemplos: 1988, 1992, 1996, 2000. Repare que 1900 não é bissexto.

// anoAtual  = parseInt(require('readline-sync').question('Digite o ano para verificar se é bisexto: \n'));

// if (anoAtual%400===0 || anoAtual%4===0 && anoAtual%100!==0) {
//     console.log(`O ano ${anoAtual} é bissexto!!!`);
// } else {
//     console.log(`O ano ${anoAtual} não é Bissexto!!!`);
// }

// 3 Uma determinada empresa vende seus produtos em quatro diferentes estados. Cada
// estado possui uma taxação de imposto diferente sobre o produto (MG: 7%; SP: 12%; RJ:
// 15%; MS: 8%). Faça um programa em Javascript, que o usuário entre com o valor e o
// estado destino do produto e o programa retorne o preço final do produto acrescido do
// imposto correspondente ao estado onde será vendido. O programa deve mostrar uma
// mensagem de erro caso o estado fornecido não esteja na lista de estados válidos.

// uf = 0 , valorProduto = 0 , valorFinal = 0 ;

// valorProduto = parseInt(require('readline-sync').question('Entre com o valor do produto: \n'));
// uf = parseInt(require('readline-sync').question('Escolha o Estado de destino: \n 1 => MG\n 2=> SP \n 3 => RJ \n 4 => MS \n'));

// switch (uf) {
//     case 1:
//         valorFinal = valorProduto*0.07 + valorProduto;
//         break;
//     case 2:
//         valorFinal = valorProduto*0.12 + valorProduto;
//         break;
//     case 3:
//         valorFinal = valorProduto*0.15 + valorProduto;
//         break;
//     case 4:
//         valorFinal = valorProduto*0.08 + valorProduto;
//     default:
//         console.log('Estado invalido');
//         break;
// }

// console.log(valorFinal);

// 4 Faça um programa que calcule e mostre a soma dos 50 primeiros números pares.
// Faça três versões desse programa, cada uma usando uma estrutura de repetição
// diferente (for, while, do-while). Qual das três estruturas é a mais adequada para este
// programa? Por que?
// soma = 0;
// for (let i = 0; i <= 100 ; i++ ) {
//     if (i%2 === 0){
//         soma = soma + i;
//     }
// }
// console.log(soma);

// let cont = 1 , soma = 0;

// while(cont <= 100){
//     if (cont % 2 === 0) {
//         soma  = soma + cont;
//     } 
//     cont++;
// }
//  console.log(soma);

// let cont = 1 , soma = 0;

// do {
//     if (cont % 2 === 0) {
//         soma  = soma + cont;
//     } 
//     cont++;
// } while(cont <= 100)
//  console.log(soma);

// 5 Faça um programa em Javascript que receba do usuário um número N e depois
// imprima os N primeiros números naturais ímpares.

// let num = parseInt(require('readline-sync').question('Digite um valor: \n'));
// for (let i = 0; i <= num; i++) {
//     if (i%2 === 1 ){
//         console.log(i);
//     }
// }

// 6 Uma empresa contrata um encanador a R$ 30,00 por dia. Crie um programa que
// solicite o número de dias trabalhados pelo encanador e imprima a quantia líquida que
// deverá ser paga, sabendo-se que são descontados 8% para pagamento de impostos e

// diasTrabalhado = parseInt(require('readline-sync').question('Quantos dias trabalhado? \n'))
// console.log((diasTrabalhado - diasTrabalhado*0.08)*30);

// 7. Faça um programa para ler um horário (hora:minuto:segundo) de início e a duração,
// em segundos, de uma experiência biológica. O programa deve informar o horário
// (hora:minuto:segundo) de término da mesma.



// 8. Uma empresa paga R$ 10,00 por hora normal trabalhada e R$ 15,00 por hora extra.
// Escreva um programa que leia o total de horas normais e o total de horas extras
// trabalhadas por um empregado em um ano e calcule o salário anual deste trabalhador.

// let horasNormal , horasExtras, salarioAnual;

// horasNormal = parseInt(require('readline-sync').question('Entre com as horas normais trabalhada: \n'));
// horasExtras = parseInt(require('readline-sync').question('Agora digite as horas extras: \n'));
// salarioAnual = (horasNormal * 10) + (horasExtras * 15);
// console.log(`O valor a ser pago é: R$${salarioAnual}`);

// 9. Elabore um programa em JS para que leia três números e mostre-os em ordem crescente.

// let num1, num2, num3, numeros;
// num1 = parseInt(require('readline-sync').question('Entre com o primeiro número: \n'));
// num2 = parseInt(require('readline-sync').question('Digite o segundo número: \n'));
// num3 = parseInt(require('readline-sync').question('E agora entre com o terceiro número: \n'));
// numeros = [num1 , num2, num3];
// numeros.sort(function(a, b){
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// });
// console.log(numeros);

// 10. Crie um programa de conversão entre as temperaturas Celsius, Farenheit e Kelvin
// usando funções para isso. O programa deve ler a opção escolhida pelo usuário, que
// escolhe uma determinada conversão entre escalas termométricas e, em seguida, o
// programa solicita a temperatura a ser convertida. As opções de conversão são as
// seguintes: utilize o switch case

// 1. de Celsius para Fahrenheit.
// 2. de Celsius para Kelvin.
// 3. de Fahrenheit para Celsius.
// 4. de Fahrenheit para Kelvin.
// 5. de Kelvin para Celsius.
// 6. de Kelvin para Fahrenheit

// let escalaConverao = 0 , temp = 0 , tempConvertida = 0 , escala ;

// escalaConverao = parseInt(require('readline-sync').question('Escolha a conversão, sendo: \n 1. de Celsius para Fahrenheit.\n 2. de Celsius para Kelvin. \n 3. de Fahrenheit para Celsius. \n 4. de Fahrenheit para Kelvin. \n 5. de Kelvin para Celsius. \n 6. de Kelvin para Fahrenheit \n'));
// temp = parseInt(require('readline-sync').question('Agora dgite a temperatura: \n'));

// switch (escalaConverao){
//     case 1:
//         escala = 'ºF';
//         tempConvertida = (temp * 9/5) + 32;
//         break;
//     case 2:
//         escala = 'ºK';
//         tempConvertida = temp +  273,15;
//         break;
//     case 3:
//         escala = 'ºC';
//         tempConvertida = (temp - 32) * 5/9;
//         break;
//     case 4:
//         escala = 'ºK';
//         tempConvertida = (temp - 32) * 5/9 + 273,15;
//         break;
//     case 5:
//         escala = 'ºC'
//         tempConvertida = temp - 273,15;
//         break;
//     case 6:
//         escala = 'ºF'
//         tempConvertida = (temp - 273,15) * 9/5 + 32;
//         break;
//     default:
//         return 'Opção invalida'
// }
// console.log(tempConvertida,escala);


// 11. Fazer uma função que recebe um mês e um ano como parâmetros e retorna o
// número de dias daquele mês daquele ano. Dica: um ano é bissexto quando é múltiplo de
// 4 e não múltiplo de 100, ou também quando é múltiplo de 400.

function checkBissexto(anoAtual) {
    return new Date(anoAtual, 1, 29).getMonth() == 1
}

const mesAno = {
    '1': 'Janeiro',
    '2': 'Fevereiro',
    '3': 'Março',
    '4': 'Abril',
    '5': 'Maio',
    '6': 'Junho',
    '7': 'Julho',
    '8': 'Agosto',
    '9': 'Setembro',
    '10': 'Oututro',
    '11': 'Novembro',
    '12': 'Desembro'
};
const readline = require('readline-sync');

mes = readline.question('Entre com numero do mes: \n');
anoAtual  = readline.questionInt('Digite o ano: \n');

if (checkBissexto(anoAtual)) {
    if (mes == 2) {
        console.log(`O ano ${anoAtual} é bissexto!!! e o mes é Fevereiro, logo esse mês tem 29 dias!!!`);
    } 
} else {
    switch (mes) {
        case '2':
            console.log( `O ano ${anoAtual} não é Bissexto!!! e o mes é ${mesAno[mes]}, logo esse mês tem 28 dias!!!`);
            break;
        case '1' :
        case '3':
        case '5':
        case  '7':
        case  '8':
        case  '10':
        case  '12':
            console.log('O ano '+ anoAtual +' não é Bissexto!!! e o mes é '+ mesAno[mes] + ', logo esse mês tem 31 dias!!!');
            break;
        case  '4':
        case  '6':
        case  '9':
        case  '11':
            console.log('O ano'+ anoAtual +'não é Bissexto!!! e o mes é'+ mesAno[mes] + ', logo esse mês tem 30 dias!!!');
            break;
        default:
            console.error('Mes inválido');
            break;
    }
}
