## Desafio 05

Considerando a solução apresentada no Hipertexto 5, aplique o padrão de projeto Strategy para criar uma simples calculadora. Os requisitos para avaliar o - implementar uma interface Strategy projeto são:
com o método abstrato execute(). Deve haver três classes concretas que implementam a Strategy para realizar as operações de Soma, Subtração e Multiplicação de números inteiros; - o método execute() deve receber dois números inteiros como parâmetros e retornar o resultado também como número inteiro;
- como input do usuário, a aplicação deve receber o primeiro valor, depois o segundo e, por último, a operação matemática que deve realizar, no final, a aplicação deve
definir qual Strategy será usada, com base na operação informada, e imprimir o resultado da operação.
### Resposta


````ts

const readlineSync = require('readline-sync');

//Strategy
class OperationStrategy {
    execute(num1: number, num2: number) { }
}

// Classes que implementam a Strategy
class AdditionStrategy extends OperationStrategy {
    execute(num1: number, num2: number) {
        return num1 + num2;
    }
}

class SubtractionStrategy extends OperationStrategy {
    execute(num1: number, num2: number) {
        return num1 - num2;
    }
}

class MultiplicationStrategy extends OperationStrategy {
    execute(num1: number, num2: number) {
        return num1 * num2;
    }
}

class DivisionStrategy extends OperationStrategy {
    execute(num1: number, num2: number) {
        return num1 / num2;

    }
}

// Contexto que utiliza a Strategy
class Calculator {
    constructor(strategy)  {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculate(num1: number, num2: number) {
        return this.strategy.execute(num1, num2);
    }
}

let strategy;
const num1 = parseInt(readlineSync.question("Digite o primeiro número:"));
const num2 = parseInt(readlineSync.question("Digite o segundo número:"));
const operation = readlineSync.question("Escolha o operador: +, -, * ou /:");
switch (operation) {
    case '+':
        strategy = new AdditionStrategy();
        break;
    case '-':
        strategy = new SubtractionStrategy();
        break;
    case '*':
        strategy = new MultiplicationStrategy();
        break;
    case '/':
        strategy = new DivisionStrategy();
        break;
    default:
        console.log("Operação inválida");
        break;
}

if (strategy) {
    const calculator = new Calculator(strategy);
    const result = calculator.calculate(num1, num2);
    console.log(`O resultado é: ${result}`);
}

````
