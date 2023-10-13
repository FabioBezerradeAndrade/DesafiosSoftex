## Desafio 11

Crie um código com um objeto chamado "Banco". Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.
Observações:
- buscar saldo deve retornar o valor atual do saldo; - para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
-para o saque, você deverá passar um valor como parâmetro e subtrai-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta.

  ### Resposta

````js

class Banco {
    constructor(conta, saldo, tipoConta, agencia) {
        this.conta = conta;
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.agencia = agencia;
    }

    // Retorna número da conta
    numConta(dado) {
        let encontrado
        for (let i of bancos) {
            if (dado == i.conta) {
                console.log(`Número Conta:\n  \tTipo:${i.tipoConta} \n\tAgencia:${i.agencia}\n\tNúmero da Conta:${i.conta}`);
             } 
        }
    }

    buscarSaldo() {
        console.log(`Saldo Conta:\n  \tTipo:${this.tipoConta} \n\tAgencia:${this.agencia}\n\tNúmero da Conta:${this.conta} \nO saldo é de: R$ ${this.saldo.toFixed(2)} `);
    }

    // Método deposito
    deposito(valor) {
        // Verifica se o valor é válido. 
        if (valor < 0 || isNaN(valor)) {
            console.log("Erro: Valor inválido. O valor deve ser números positivos.");
            return;
        }

        // Adiciona o valor do deposito e é apresentado mensagem de deposito realizado.
        this.saldo += valor;
        //.transacoes.push(`Depósito de R$ ${valor.toFixed(2)}`); // Registra a transação na lista de transações.
        console.log(`Depósito Conta:\n  \tTipo:${this.tipoConta} \n\tAgencia:${this.agencia}\n\tNúmero da Conta:${this.conta} \nRealizado deposito de R$ ${valor.toFixed(2)} com sucesso.`);
    }

    // Método de saque
    saque(valor) {
        // Verifica se o valor é válido. 
        if (valor < 0 || isNaN(valor)) {
            console.log("Erro: Valor inválido. O valor deve ser números positivos.");
            return;
        }

        // Verifica se o saldo é suficiente para a transação de saque. Caso positivo realiza o saque, caso contrário, emite erro.
        if (valor <= this.saldo) {
            this.saldo -= valor;
            //this.transacoes.push(`Saque de R$ ${valor.toFixed(2)}`); // Registra a transação na lista de transações.
            console.log(`Saque Conta:\n  \tTipo:${this.tipoConta} \n\tAgencia:${this.agencia}\n\tNúmero da Conta:${this.conta} \nRealizado saque de R$ ${valor.toFixed(2)} com sucesso.`);
        } else {
            console.log("Erro: Saldo insuficiente para realizar o saque.");
        }

    }
}

let banco = new Banco();

const bancos = [];
const banco01 = new Banco(10001, 0, 'CC', 34);
bancos.push(banco01);
const banco02 = new Banco(10002, 0, 'CP', 1);
bancos.push(banco02);
const banco03 = new Banco(10003, 0, 'CC', 1);
bancos.push(banco03);


banco01.deposito(1000.00)
banco01.saque(500)
banco01.buscarSaldo()
banco.numConta(10002)


 ````
