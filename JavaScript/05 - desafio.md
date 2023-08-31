## Desafio 05

A atividade que faremos é a da "calculadora de média". Para isso, você deve criar um programa JavaScript que calcule a média de três notas inseridas pelo usuário e exiba o resultado no console.
Primeiro, solicite que o usuário insira três notas (entre 0 e 10) usando a função prompt(). Elas devem ser armazenadas em variáveis adequadas, por exemplo, nota1, nota2 e nota3, com o tipo de dado Number. Depois, some- as e divida por três. O resultado deste cálculo será o valor da média, que deve ser armazenado em uma variável chamada media. Por fim, exiba esse valor no console usando a função console.log().

### Resposta

````js

// Declarado as variáveis das três notas e a média. 
let nota1, nota2, nota3 , media;
// Variáveis que verificarão se as notas digitadas são números (recebem valor inicial falso).
let checkNota1 = false, checkNota2 = false, checkNota3 = false;

// Enquanto variável checkNota estiver com valor falso e a variável nota com valor maior que 10 ou menor que 0, será emitido mensagem do erro e o laço continuará solicitando um valor válido.
// Caso valor seja válido, a variável checkNota receberá valor true e o valor digitado será armazenado na variável nota e, o laço termina, pasando para o próximo.
while(checkNota1 == false) {
    try {
        nota1 = parseFloat(require('readline-sync').question('Digite a primeira nota: \n'));
        if (isNaN(checkNota1) == false) {
            if (nota1 >= 0 && nota1 <= 10) {
                checkNota1 = true;
                console.log(`1º nota adicionada: ${nota1} \n`);
            } else {
                checkNota1 = false;
                throw new Error();
            }
        }
    } catch(error) {
        console.log('Nota inválida, valor deve ser entre 0 e 10. Digite novamente a nota!!!');
    }
}

while (checkNota2 == false) {
    try {
        nota2 = parseFloat(require('readline-sync').question('Ditige a segunda nota: \n'));
        if (isNaN(checkNota2) == false) {
            if (nota2 >= 0 && nota2 <= 10) {
                checkNota2 = true;
                console.log(`2º nota adicionada: ${nota2} \n`);
            } else {
                checkNota2 = false;
                throw new Error();
            }
        }
    } catch(error) {
        console.log('Nota inválida, valor deve ser entre 0 e 10. Digite novamente a nota!!!');
    }
}

while (checkNota3 == false) {
    try {
        nota3 = parseFloat(require('readline-sync').question('Ditige a terceira nota: \n'));

        if (isNaN(checkNota3) == false) {
            if (nota3 >= 0 && nota3 <= 10){
                checkNota3 = true;
                console.log(`3º nota adicionada: ${nota3} \n`);
            } else {
                checkNota3 = false;
                throw new Error();

            }
        }
    } catch(error) {
        console.log('Nota inválida, valor deve ser entre 0 e 10. Digite novamente a nota!!!');
    }
}

// Cálcula e informa a média alcançada.
media = (nota1 + nota2 + nota3) / 3;
console.log(`A média é: ${media.toFixed(2)}`);

````
