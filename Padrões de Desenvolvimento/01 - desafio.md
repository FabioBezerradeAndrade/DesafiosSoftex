## Desafio 01

Considere que:
- os produtos devem implementar uma interface comum;
- o cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface; - todo computador deve ter, com getters, os atributos: ram, hdd, cpu e type;
- há dois tipos de computadores: pc e server; - RAM e HD devem estar em GB;
- CPU deve estar em GHz;
através do tipo informado, a fábrica decide qual tipo de computador irá instanciar,
- quando o método .toString() for aplicado a um computador, ele deve imprimir seus atributos.


### Resposta

````ts
// Interface que define o Computador

interface Computador {
    getType(): string;
    getRAM(): number;
    getHDD(): number;
    getCPU(): number;
    toString(): string;
}

// Classes concretas que implementam apartir da interface Computador

class Pc implements Computador {
    constructor(public ram: number, public hdd: number, public cpu:  number){

    }
    getRAM() {
        return this.ram;
    }
    getHDD(){
        return this.hdd;
    }
    getCPU(){
        return this.cpu;
    }
    getType() {
        return "PC";
    }
    toString() {
        return `Type: PC,\t\n RAM: ${this.ram}GB,\n HDD: ${this.hdd}GB,\n CPU: ${this.cpu}GHz.\n`;
    };
}

class Server implements Computador {
    constructor(public ram: number, public hdd: number, public cpu:  number){

    }
    getRAM() {
        return this.ram;
    }
    getHDD(){
        return this.hdd;
    }
    getCPU(){
        return this.cpu;
    }
    getType() {
        return "SERVER";
    }
    toString() {
        return `Type: PC,\t\n RAM: ${this.ram}GB,\n HDD: ${this.hdd}GB,\n CPU: ${this.cpu}GHz.\n`;
    };
}

// Metodo Factory para instanciar computador

class ComputadorFactory {
    static createComputador(type: string, ram: number, hdd: number, cpu: number) {
        if (type.toUpperCase() === "SERVER") {
            return new Server(ram, hdd, cpu);
        } else if (type.toUpperCase() === "PC") {
            return new Pc(ram, hdd, cpu);
        } else {
            throw new Error("Não há esse modelo para criação");
        }
    }
}

// Uso do padrão Factory

const pc1 = ComputadorFactory.createComputador("pc", 32, 1024, 3.4);
const server = ComputadorFactory.createComputador("Server", 128, 10240, 3.8);


console.log(pc1.toString());
console.log(server.toString()); 

````
