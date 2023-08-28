## Desafio 20

- Crie uma lista encadeada em que cada elemento representa uma pessoa.
- Ela precisa conter informações como nome, idade e referência ao filho dela.

### Resposta

````js

// Variavel anoAtual recebe ano corrente.
let anoAtual = new Date().getFullYear();


// Nó com o construtor
class Pessoa {
   constructor(nome , anoNascimento , filho) {
       this.nome = nome;
       this.anoNascimento = anoNascimento;
       this.filho = filho;
       this.#calcularIdade();
       this.next = null;
   }

   // função para calcular a idade 
   #calcularIdade() {
       this.idade = anoAtual - this.anoNascimento;
      }
} 

// Lista vinculada com o construtor e funções de manipulação.
class ListaEncadeada{
    constructor() {
        this.head = null;
    }
    
// Adiciona um novo elemento no inicio da lista
    addFist(nome , anoNascimento , filho) {
        const newPessoa = new Pessoa(nome, anoNascimento ,  filho);
        newPessoa.next = this.head;
        this.head = newPessoa;
    }

// Adiciona um novo elemento no final da lista
    addLast(nome , anoNascimento , filho) {
        const newPessoa = new Pessoa(nome, anoNascimento , filho);
        if (!this.head) {
            this.head = newPessoa;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newPessoa;
        }
    }
// Remove o primeiro elemento da lista e retorna informação do elemento removido
    removeFirst() {
        if (!this.head) {
            return 'Lista vazia';
        }
        const removePessoa = this.head;
        this.head = this.head.next;
        removePessoa.next = null;
        return `Removido: ${removePessoa.nome}`;
    }

// Remove o ultimo elemento da lista e retorna infomação do elemento removido
    removeLast() {
        if (!this.head) {
            return 'Lista vazia';
        }
        if (!this.head.next) {
            const removePessoa = this.head;
            this.head = null;
            return removePessoa.nome;
        }
        let current = this.head;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        return `Removido: ${current.nome}`;
    }
// Procura um elemento(nome) na lista
    search(nome) {
        let current = this.head;
        while (current) {
            if (current.nome === nome) {
                return current;
            } 
            current = current.next;
        }
        return 'Não encontrado';    
    }

// Retorna o tamanho da lista
    size() {
        let count= 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
}

````
