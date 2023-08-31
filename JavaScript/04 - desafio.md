  ## Desafio 04

- Vamos criar um cadastro de pessoa com os seguintes dados: nome, salário, idade e se possui diploma. Antes de começar a codificação, identifiquem os tipos de cada variável. Em seguida, desenvolvam o código utilizando exemplos para cada variável que respeitem os tipos identificados. Certifiquem-se de que os valores correspondam aos tipos de dados corretos.

### Resposta

````js


// Variável anoAtual recebe ano corrente.
let anoAtual = new Date().getFullYear();

// Criado a classe pessoa com construtor contendo os dados: nome, salário, ano de nascimento, se possui diploma e idade.
class Pessoa {
    constructor(nome, salario, anoNascimento, diploma){
        this.nome = nome;
        this.salario = salario;
        this.anoNascimento = anoNascimento;
        this.diploma = diploma;
        this.#calcularIdade();
    }
// Função calcular idade, recebe ano corrente e subtrai o ano de nascimento.
    #calcularIdade() {
        this.idade = anoAtual - this.anoNascimento;
    }
    
}

var pessoas = [];

pessoa1 = new Pessoa('Sivirino Ambroino da Silveira', 1320.18, 2002, false);
pessoas.push(pessoa1);

console.log(typeof(pessoa1.nome), typeof(pessoa1.salario),  typeof(pessoa1.idade), typeof(pessoa1.diploma));
console.table(pessoas);


````
