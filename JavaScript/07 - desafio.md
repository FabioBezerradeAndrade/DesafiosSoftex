## Desafio 07

Com os conceitos aprendidos, crie um programa de calculadora que:
- receba dois valores, que devem ser salvos em variáveis;
- o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos;
- com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado;
- se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma.

### Resposta

````js

let readline = require('readline-sync');
let opcao , num1, num2 , operador , check = true;

function menuOperador() {
    console.log('*********************************');
    console.log('Escolha o operador matematico: ');
    console.log('*********************************');
    console.log('+ para Adicao');
    console.log('- para subtracao');
    console.log('* para multiplicacao');
    console.log('/ para divisao');
    console.log('*********************************');
}

do {
    opcao = readline.question('Entre com o primeiro valor : ');
    if (isNaN(opcao)) {
        console.log('Digite um numero valido!!!');
    } else {
        num1 = parseFloat(opcao);

    }
} while (isNaN(opcao));
do {
    opcao = readline.question('Entre com o segundo valor: ');
    if (isNaN(opcao)) {
        console.log('Digite um numero valido!!!');
    } else {
        num2 = parseFloat(opcao);
    }
} while (isNaN(opcao));

do {
    menuOperador();
    operador = readline.question();
    if (operador == '+' || operador == '-' || operador == '*' || operador == '/') {
        check = false;
    }
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;        
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;                
        default:
            console.clear();
            console.log('Opcao invalida, Tente novamente!!!');
            break;
    }
} while (check);

if (operador == '/') {
    console.log(`O resultado de ${num1} ${operador} ${num2} = ${parseInt(num1/num2)}`);
    if ((num1%num2) != 0) {
        console.log(`E o resto é ${num1 % num2}`);
    } 
} else {
    console.log(`O resultado de ${num1} ${operador} ${num2} = ${resultado}`);
}

````
