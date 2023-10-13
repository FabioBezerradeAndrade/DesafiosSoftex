## Desafio 13

Utilizando a linguagem JavaScript, crie uma situação matemática na qual os números precisam ser informados pelo usuário. Além disso, deve ocorrer uma exceção dentro do código. 
Utilize os métodos try(), catch()e finally() para realizar a captura e o tratamento dessa exceção.

### Resposta

````js

import readline from 'readline-sync';

let dividendo, divisor, quociente;

console.log('Calcular Divisão de dois valores:\n');

try {
    // Requisita inserção de valores para as variavéis.
    dividendo = readline.question('Digite o primeiro número: ')
    divisor = readline.question('Digite o segundo número: ')

    // Verifica se os valores digitados são números.
    if (isNaN(dividendo) || isNaN(divisor)) {
        throw new Error("Somente números são premitidos.");
    }
        
    // Verifica se divisor é zero.
    if (divisor == 0) {
        throw new Error("O divisor não pode ser zero. Não tem como dividir qualquer valor por zero.");
    }

    // Calcula a operação e atribui o resutado a variável quociente
    quociente = dividendo / divisor;

    console.log(`O resultado da divisão de ${dividendo} por ${divisor} é: ${quociente.toFixed(2)}`);
} catch (error) {
    console.clear()
    console.error(`Ocorreu um erro: ${error.message}`);
} finally {
    console.log("Operação finalizada.");
}

````
