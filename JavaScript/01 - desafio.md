## Desafio 01

- Estamos rodeados por dados no nosso cotidiano e, nas aulas, aprendemos sobre os seus diversos tipos. Agora, vamos criar variáveis do tipo boolean, Bigint, string e symbol. No primeiro momento, após declará-las, precisamos exibir seus conteúdos, que devem ser UNDEFINED. Em seguida, vamos deixar essas variáveis com valores nulos e imprimir. Por fim, cada uma deve receber um dos tipos como atribuição e os seus respectivos valores devem ser impressos na tela.

### Resposta

````js

var boli
var numGrandaum
var alfanumerico
var meuSimbolo
console.log(boli, numGrandaum, alfanumerico , meuSimbolo);

boli = null , numGrandaum = null , alfanumerico = null , meuSimbolo = null;

console.log(boli, numGrandaum, alfanumerico , meuSimbolo);

boli = true , numGrandaum = BigInt(1000000000000000048346692115553659057528394845890514255872) ;
alfanumerico = 'Aqui é uma string' , meuSimbolo = Symbol();

console.log(`${boli} \n ${numGrandaum} \n ${alfanumerico}`);
console.log(meuSimbolo);
console.log(typeof(boli), typeof(numGrandaum), typeof(alfanumerico) , typeof(meuSimbolo));

````
