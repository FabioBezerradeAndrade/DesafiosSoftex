## Desafio 04

Crie um adaptador que permita que um objeto do tipo Pato seja usado como se fosse um objeto do tipo
Galinha.
Siga o exemplo apresentado no Hipertexto 4 e crie as classes AdaptadorPato e AdaptadorPatoDemo para demonstrar o uso da classe AdaptadorPato.


### Resposta

````ts

class Galinha {
    cacarejar() {
        console.log("Emitindo som: có có có!");
    }
}

class Pato {
    nadar() {
        console.log("Nadando");
        
    }
    voar() {
        console.log("Voando");
    }
    grasnar() {
        console.log("Emitindo som: Quack!");
    }

}

// Adaptador
class AdaptadorPato extends Galinha {
    constructor(pato) {
        super();
        this.pato = pato;
    }

    grasnar() {
        this.galinha.cacarejar();
    }
}

// Uso do código

const pato = new Pato();
const galinha = new Galinha();
const adaptadorPato = new AdaptadorPato(galinha);

console.log(Galinha);
galinha.cacarejar();
console.log(Pato);
pato.nadar();
pato.voar();
pato.grasnar();
console.log("Uso do adaptador:");
adaptadorPato.cacarejar();


````
