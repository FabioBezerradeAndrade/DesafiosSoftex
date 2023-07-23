// declara uma variável 'minhaVar', sem valor.

var minhaVar;

// após declara, atribua o valor 10 à variável 'minhaVar'.

minhaVar = 10;

// Declare uma nova variável chamada 'soma', e adicione uma instrução somando os valores 15 e 8,

var soma;

soma = 15 + 8;

// Atribua à variável 'soma' todo o valor dela, somando 1, usando o operador de soma abreviado.

soma += 1

// Atribua à variável 'soma' todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.

soma *= 3

// Qual o valor da variável 'soma'  até aqui?

console.log(soma); 
//24

// Declare uma variável chamada 'fazSol', atribuindo à ela o valor boleano que representa 'verdadeiro'

var fazSol = true
console.log(fazSol);

// Declare uma variável chamada 'comida' que receba um array com os valores 'arroz', 'feijão' e 'ovo'.

var comida = ['arroz', 'feijão', 'ovo'];

// Digite a instrução que imprime o valor 'feijão', que está na variável 'comida'.

console.log(comida[1]);

// Digite o código que verifica se a variável 'soma' é igual a variável 'minhaVar' (testando também o tipo).

console.log(soma === minhaVar);

// Digite o código que verifica se a variável 'minhaVar' é menor igual à variável 'soma'

console.log(minhaVar <= soma);

// Crie uma função chamada 'divisao' que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.

function divisao(n1 , n2){
    return n1 / n2;
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.

console.log(divisao(10, 2));


