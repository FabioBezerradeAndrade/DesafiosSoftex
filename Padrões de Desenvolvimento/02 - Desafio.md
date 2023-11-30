## Desafio 02
Crie uma fábrica de veículos utilizando o padrão Prototype com base no exemplo apresentado no Hipertexto 2.
Os requisitos do projeto devem ser:
- implemente uma classe abstrata Veículo com um construtor padrão e os métodos clone e represent;
- o construtor da classe Veículo deve receber modelo, marca, cor e numeroRodas como parâmetros; - crie pelo menos duas subclasses da classe Veiculo, que acrescentem um ou mais atributos, por exemplo: carro que tem dois campos a mais, como numeroRodas e numeroPortas,
- desenvolva uma classe Aplicação que deve criar um array com seis veículos com dois tipos de veículos diferentes (subclasses), utilizando o método clone dos objetos para preencher o array,
- na classe Aplicação, implemente um método que retorne um array com o mesmo tamanho do array de veículos, onde cada elemento deve ser um clone dos elementos do array veículos;
- no final, deve imprimir na tela o retorno da função represent de cada elemento desse novo array de clones de veículos.

### Resposta

````ts

// Classe abstrata
class Veiculo {
    constructor(private modelo: string , private marca: string , private cor: string , private numeroRodas: number) {}

    // Clona o objeto
    clone() {
        return new Veiculo (this.modelo, this.marca, this.cor, this.numeroRodas);
    }

    represent() {
        return Object.assign({}, this);
    }
}

// Subclasses
class Carro extends Veiculo {
    constructor(modelo: string, marca: string , cor: string , numeroRodas: number, private numeroPortas: number) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas
    }

    clone() {
        const carroClone = super.clone();
        carroClone.numeroPortas = this.numeroPortas;
        return carroClone;
    }

    represent() {
        return `${super.represent()}, Portas: ${this.numeroPortas}`;
    }
}

class Moto extends Veiculo {
    constructor(modelo: string , marca: string, cor: string , numeroRodas: number, private cilindradas: number) {
        super(modelo, marca, cor, numeroRodas);
    }

    clone() {
        const motoClone = super.clone();
        motoClone.cilindradas = this.cilindradas;
        return motoClone;
    }

    represent() {
        return `${super.represent()}, Cilindradas: ${this.cilindradas}`;
    }
}

// Classe Aplicação
class Aplicacao {
    static vetorDeVeiculos() {
        const veiculos = [];
        veiculos.push(new Carro("Focus", "Ford", "Azul Bebe", 4, 4));
        veiculos.push(new Carro("UP TSI", "VolksWagen", "Vermelho Pimenta", 4, 4));
        veiculos.push(new Carro("Chronus", "FIAT", "Branco Gelo", 4, 4));
        veiculos.push(new Moto("R15 v4", "Yamaha", "Marron Chocolate", 2, 155));
        veiculos.push(new Moto("Biz", "Honda", "Verde Abacate", 2, 125));
        veiculos.push(new Moto("Ninja 1000 Tourer", "Kawasaki", "Rosa Langerie", 2, 1000));
        return veiculos;
    }

    static clonarVeiculos(veiculos) {
        const veiculosClonados = veiculos.map(veiculo => veiculo.clone());
        return veiculosClonados;
    }
}

// Uso do código

const veiculos = Aplicacao.vetorDeVeiculos();
const veiculosClonados = Aplicacao.clonarVeiculos(veiculos);

veiculosClonados.forEach(veiculo => {
    console.log(veiculo.represent());
});

````
