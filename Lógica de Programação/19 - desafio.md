## Desafio 19

Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

### Resposta.

````js

// ******  Fila  ******

 let x=[3 , 7 ,9 , 1 , 0];
 x.shift();
console.log(x);

/* Em fila o primeiro a entrar é o primeiro a sair (FIFO: First-In-First-Out), usando o comando x.shift(),
a remoção começa do indice 0 até o indice 4. ficando desta forma a cada remoção:
[7 , 9 , 1 , 0]
[9 , 1 , 0]
[1 , 0]
[0]
[]
*/

// ******  Lista  ******

let y=[3 , 7 ,9 , 1 , 0];
 y.splice(0);
console.log(y);

/* Já em lista podemos remover qualquer item, mais de um deles ou todos eles. No exemplo usando o comando
y.splice(0) removemos todos elementos da lista, retornoando:
[]
*/

// ******  Pilhas  ******

 let z=[3 , 7 ,9 , 1 , 0];
 z.pop();
console.log(z);

/* Em pilhas o último item adicionado é o primeiro a ser removido, Last-In-First-Out (LIFO), usando o comando
 z.pop();a remoção começa do indice 4 até o indice 0, ficando desta forma a cada remoção:
[3 , 7 , 9 , 1]
[3 , 7 , 9]
[3 , 7]
[3]
[]
*/

````
