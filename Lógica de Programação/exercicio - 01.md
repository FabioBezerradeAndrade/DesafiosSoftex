`````js
// declara uma variável chamada "minhaVar" sem valor

var minhaVar ;

// Após declarar, atribua o valor 10 à variável "minhaVar"

minhaVar = (10);

// Declare uma nova variável chamada "soma", e adicione uma instrução somando os valores 15 e 8.

var soma ;
soma = 15 + 8;

// Atribua à variável "soma" todo valor dela, somando 1, usando o operador de soma abreviado.

soma++;

// Atribua à variável "soma" todo valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.

soma *= 3;

// Qual o valor da variável "soma" até aqui?

console.log(soma);
// 72

// Declare uma variável chamada "fazSol", atribuindo a ela o valor boleano que representa "verdadeiro".

var fazSol ;
fazSol = true;

// Declare uma variável chamada 'comida', que receba o array com os valores "arroz", "feijão" e "ovo".

var comida = [ ];
comida = ['arroz', 'feijão', 'ovo'];

// Digite a instrução que imprima o valor de "feijão", que está na variável comida.
 
console.log(comida[1]);

// Digite o código que verifica se a variável "soma" é igual a variável "minhaVar" (testandotambé o tipo).

console.log (soma === minhaVar);

// Digite o código que verifica se a variável "minhaVar" é menor ou igual a variável "soma"

console.log( minhaVar <= soma);

// Crei uma função chamada "divisao" que receba como parâmetros dois números, e retorne o resultado da divisão entre eles.

function divisao (n1 , n2){
    return n1 / n2
}

// Invoque a função criada acima, passando os parametros 10 e 2.

console.log (divisao(10 , 2));
