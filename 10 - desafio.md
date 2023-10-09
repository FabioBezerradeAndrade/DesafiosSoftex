## Desafio 10


Crie um programa que contenha os seguintes tipos de funções:
1. uma função tradicional com a palavra reservada "Function" e sem nenhum parâmetro; 
2. uma função tradicional com parâmetros e um retorno de valor; 
3. uma arrow function com parâmetros e que retorne um valor.
Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.


### Resposta

````js


// Classe Carro e seus atributos
class Carro {
    constructor (fabricante, modelo, anoFabricacao, ano, preco, pintura){
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
        this.ano = ano;
        this.preco = preco;
        this.pintura =  pintura;
    }
}
let precoPintura = 0;
const carros = [];
let carroMaisCarro = {
    preco: 0,
    modelo: '',
};

// função para adicionar o preço do tipo de pintura do veliculo 

function acessorioPintura ( carro) {
    if (carro.pintura == 'metalica') {
        carro.preco = carro.preco + 1500.00;
    }
    if (carro.pintura == 'perolada') {
        carro.preco = carro.preco + 3500.00;
    }
    precoPintura = carro.preco;
    console.log(`O Carro ${carro.modelo} com a pintura ${carro.pintura} fica no valor de ${precoPintura}`);
}

// função para verrificar o preço do carro mais carro

function precoMaisCarro () {
    carros.forEach(carro => {
        if ( carroMaisCarro.preco < carro.preco) {
            carroMaisCarro.preco = carro.preco;
            carroMaisCarro.modelo = carro.modelo
        }
    });
}

const carro01 = new Carro('honda', 'HRV', 2020, 2021, 190092.38, 'solida' )
const carro02 = new Carro('FIAT', 'Chronos', 2022, 2023, 99852.37, 'solida')
const carro03 = new Carro('Koenigsegg', 'Jesko', 2023, 2024, 16000000.05, 'perolada')
const carro04 = new Carro('Volvo', 'XC90', 2023, 2024, 519950.01, 'perolada')
const carro05 = new Carro('Toyota', 'Corolla', 2022, 2023, 148990.75, 'metalica')
carros.push(carro01, carro02, carro03, carro04)
precoMaisCarro(carros)
console.log(carroMaisCarro);
acessorioPintura(carro03);


````
