## Desafio 13

Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

### Resposta
````

function calc (num1 , num2 , operador){
    switch (operador){
        case 1:
            return simbol = '+' , num1 + num2;
            break;
        case 2:
            return simbol = '-', num1 - num2;
            break;
        case 3:
            return simbol = '*', num1 * num2;
            break;
        case 4:
            return simbol = '/', num1 / num2;
            break;
        default:
            return (0);
    }
} 

var simbol
var operador = parseFloat(require('readline-sync').question('Escolha o operador matemático de acordo com o numero correspondente da operação \n 1. Soma \n 2. Subtração \n 3. Multiplicação \n 4. Divisão \n'))
var valor1 = parseFloat(require('readline-sync').question('Digite o primeiro valor!!! \n'));
var valor2 = parseFloat(require('readline-sync').question('Digite o segundo valor!!! \n'));
var resultado = calc(valor1, valor2, operador);

if (calc(operador) == 0){
    console.log('0, você não escolheu uma operação matématica válida')
} else {
console.log(`O resultado da operação: ${valor1} ${simbol} ${valor2} = ${resultado}`);
}

````
