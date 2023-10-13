## Desafio 12

Com base no que estudamos, escolha dois objetos materiais e dois abstratos. Em seguida, faça uma lista com, pelo menos, três atributos e três métodos para cada tipo de objeto. Para finalizar, demonstre esses objetos em JavaScript e exemplifique as suas características e ações.


### Resposta



Objetos Materiais


````js

class Ventilador {
    constructor(tipo, marca, modelo, tensao, cor, tamanho) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.tensao = tensao;
        this.cor = cor;
        this.tamanho = tamanho;

        this.powerOn = false;
        this.velocidade = 0;
    }

    ligar() {
        this.powerOn = true;
        console.log("Ventilador Ligado!");
    }

    desligar() {
        this.isLigado = false;
        console.log("Ventilador Desligado!");
    }

    ajustarVelodicade(velocidade) {
        this.velocidade = velocidade;
        if (velocidade > 0) {
            console.log(`Velodicade: ${velocidade}`);
        } else {
            console.log('ventilador Desligado!');
        }
    }
}
const ventiladores = []
const ventilador01 = new Ventilador('teto', 'arno', 'ultra silence force', '220v', 'preta', '40cm')
ventiladores.push(ventilador01)
ventilador01.ligar()
ventilador01.desligar()
ventilador01.ajustarVelodicade(0)


class Televisao {
    constructor(tipo, marca, modelo, tamanho, tensao, cor) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.tamanho = tamanho;
        this.tensao = tensao;
        this.cor = cor;

        this.powerOn = false;
        this.canal = 2;
    }

    ligar() {
        this.powerOn = true;
        console.log("TV Ligada!");
    }

    desligar() {
        this.isLigado = false;
        console.log("TV Desligada!");
    }

    mudarCanal(canal) {
        this.canal = canal;
        console.log(`Canal: ${canal}`);
    }
}

const televisores = []
const tv01 = new Televisao('Oled', 'LG', '42LB6200', '42"', 'Bivolt', 'preta')
televisores.push(tv01)
tv01.ligar()
tv01.desligar()
tv01.mudarCanal(4)

````

Objetos Abstratos


````js

class PlayList {
    constructor() {
        this.list = [];
    }

    adicionarMusica(nomeMusica) {
        this.list.push(nomeMusica)
        console.log(`Adicionado a música "${nomeMusica}"  com sucesso!`);
    }

    removerMusica(nomeMusica) {
        let indice = this.list.indexOf(nomeMusica)
        this.list.splice(indice, 1)
        console.log(`Removido "${nomeMusica}" da lista de música!`);
    }

    exibirPlayList() {
        console.log(this.list);
    }
}

const lista01 = new PlayList()
lista01.adicionarMusica('O que sobrou do céu.')
lista01.adicionarMusica('Resposta.')
lista01.adicionarMusica('psicocumbia')
lista01.removerMusica('O que sobrou do céu.')
lista01.exibirPlayList()

class ListaAFazer {
    constructor() {
        this.tarefas = [];
    }

    criarTarefa(tarefa) {
        this.tarefas.push(tarefa)
        console.log('Adicionado tarefa');
    }

    removerTarefa(tarefa) {
        let indice = this.tarefas.indexOf(tarefa)
        this.tarefas.splice(indice, 1)
        console.log(`Removido "${tarefa}" da lista de coisas a fazer!!!`);
    }

    exibirAgenda() {
        console.log(this.tarefas);
    }
}

const agenda01 = new ListaAFazer()
agenda01.criarTarefa('Aula de TypeScrip com o Prof. Waldeck Jr.')
agenda01.criarTarefa('Fazer desafios do joyclass de js poo ate as 23:59h da data 13/10/23')
agenda01.criarTarefa('Deixar filho na escola')
agenda01.criarTarefa('Dentista as 10:00')
agenda01.criarTarefa('Buscar filho na escola')
agenda01.removerTarefa('Dentista as 10:00')
agenda01.exibirAgenda()

````
