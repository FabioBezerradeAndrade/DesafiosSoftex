## Desafio 08

Crie dois códigos de sistema de notas para uma escola. O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. Utilize, no minimo, um operador de atribuição e um operador ternario. O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota minima que ele deve tirar na próxima prova para poder passar com nota sete.

### Resposta

#### Verificar se o aluno foi aprovado
````js

//Verificar se o aluno foi aprovado

const readline = require('readline-sync');
let nota, nota1, nota2, nota3, media;

do {
    nota = readline.question('Digite a primeira nota: ')
    if (isNaN(nota)) {
        console.log('Não é um numero valido, digite novamente.');
    } else if (nota >= 0 && nota <= 10) {
        nota1 = parseFloat(nota);
        nota = false;
    } else {
        console.log('Valor da nota deve ser entre 0 e 10');
    }
} while (nota);

do {
    nota = readline.question('Digite a segunda nota: ')
    if (isNaN(nota)) {
        console.log('Não é um numero valido, digite novamente.');
    } else if (nota >= 0 && nota <= 10) {
        nota2 = parseFloat(nota);
        nota = false;
    } else {
        console.log('Valor da nota deve ser entre 0 e 10');
    }
} while (nota);

do {
    nota = readline.question('Digite a terceira nota: ')
    if (isNaN(nota)) {
        console.log('Não é um numero valido, digite novamente.');
    } else if (nota >= 0 && nota <= 10) {
        nota3 = parseFloat(nota);
        nota = false;
    } else {
        console.log('Valor da nota deve ser entre 0 e 10');
    }
} while (nota);

media = (nota1 + nota2 + nota3) / 3;
var statusAluno = (media >= 7) ? 'Aprovado' : 'Reprovado';
console.log(`A media do aluno foi "${media}", o aluno esta "${statusAluno}".`);

````

#### Calcular terceira nota

````js

//calcular terceira nota

const readline = require('readline-sync');
let nota, nota1, nota2 , nota3;

do {
    nota = readline.question('Digite a primeira nota: ')
    if (isNaN(nota)) {
        console.log('Não é um numero valido, digite novamente.');
    } else if (nota >= 0 && nota <= 10) {
        nota1 = parseFloat(nota);
        nota = false;
    } else {
        console.log('Valor da nota deve ser entre 0 e 10');
    }
} while (nota);

do {
    nota = readline.question('Digite a segunda nota: ')
    if (isNaN(nota)) {
        console.log('Não é um numero valido, digite novamente.');
    } else if (nota >= 0 && nota <= 10) {
        nota2 = parseFloat(nota);
        nota = false;
    } else {
        console.log('Valor da nota deve ser entre 0 e 10');
    }
} while (nota);

nota3 = 21 - nota1 - nota2;
console.log(`Voce deve tira no minino ${nota3.toFixed(2)} para ser aprovado.`);

````
