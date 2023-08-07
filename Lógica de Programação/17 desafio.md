## Desafio 17

Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.

### Resposta

````js

let nome = ['Albert' , 'Bernardete' , 'Creuza' , 'Diego' , 'Estevão' , 'Fábio' ,  'Geraldo' , 'Heitor' , 'Igor' , 'Jeremias'];
let idade = [15 , 20 , 17 , 68 , 55 , 60 , 45 , 74 , 99 , 7 ];
let cor_favorita = ['azul' , 'verde' , 'amarela' , 'verde' , 'marrom' , 'preta' , 'laranja' , 'roxa' , 'azul' , 'branca' ];

console.log(nome , idade , cor_favorita);

idade.splice(8 , 1 , 47);
cor_favorita.splice(1 , 1 , 'rosa');

console.log(nome , idade , cor_favorita);

````
