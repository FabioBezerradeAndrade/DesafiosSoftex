## Desafio 16 

Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. 

### Resposta

````js


let candX = 0, candY = 0, candZ = 0, branco = 0, voto = 0, continuar, vitorioso ;
function totalVotos() {
    return candX + candY + candZ + branco;
}

console.log('Votação iniciada');

do {
    voto = parseInt(require('readline-sync').question('Escolha o seu candidado: \n candX => 889 \n candY => 847 \n candZ => 515 \n Branco => 0 \n'));
    if (isNaN(voto) === true) {
        console.log('Digite somente números!!!');
    } else {
        continuar = require('readline-sync').question('Continuar votação?\n Qualquer tecla para Sim e  "n" para não \n');
    }

    switch (voto) {
        case 889:
            candX++;
            break;

        case 847:
            candY++;
            break;

        case 515:
            candZ++;
            break;
        default:
            branco++;
            break;
    }

} while (continuar !== 'n');

if (candX > candY && candX > candZ) {
    vitorioso = 'Candidato X';
} else if (candY > candX && candY > candZ) {
    vitorioso = 'Candidato Y';
} else if (candZ > candX && candZ > candY) {
    vitorioso = 'Candidato Z';
} else if (candX == candY || candX == candZ || candY == candZ || candX == candY == candZ) {
    vitorioso = 'empate';
}
console. clear() 
console.log(`O ganhador desta eleição é: \n\n *************  ${vitorioso}  *************\n`);
console.log(`${totalVotos()} votos totalizados, sendo: \n\n Candidato X ${candX} votos.\n Candidato Y ${candY} votos.\n Candidato Z ${candZ} votos. \n Brancos e nulos ${branco} votos. \n `);


````
