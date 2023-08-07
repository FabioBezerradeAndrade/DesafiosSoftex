## Desafio 18

Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.


`### Resposta

````js

function animal( nome , especie , idade){
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
}

let tigreBengala = new animal('Richard Parker' , 'Panthera tigris tigris' , 9);
let touro = new animal('Huracan' , 'Bos taurus' , 6);
let cavalo = new animal('Pé de pano' , 'Equus ferus' , 11);

let animais = [ tigreBengala , touro , cavalo ];

console.table(animais);

````
