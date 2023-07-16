## Desafio 4
Elabore um algoritmo que representa um cadastro. Ele deve ler os seguintes dados fornecidos pelo usuário:

- Nome
- Endereço
- Cidade
- CPF
- RG
- Idade
- Nome do pai
- Nome da mãe
- Peso
- Renda bruta

Apresente as informações solicitadas no final do cadastro.

### Resposta

````
Algoritmo "cadastro"
var
   nome , endereco , cidade , cpf , rg , nome_pai , nome_mae : caractere
   idade  : inteiro
   peso , renda_bruta   : real

Inicio
   escreva ("Digite o seu nome: ")
   leia (nome)
   escreva ("Agora digite o seu endereço: ")
   leia (endereco)
   escreva ("Em qual cidade você reside? ")
   leia (cidade)
   escreva ("E qual o número do seu CPF? ")
   leia (cpf)
   escreva ("E qual o seu RG? ")
   leia (rg)
   escreva ("Agora me informe a sua idade: ")
   leia (idade)
   escreva ("Qual o nome do seu Pai? ")
   leia (nome_pai)
   escreva ("E qual o nome de sua mãe? ")
   leia (nome_mae)
   escreva ("E qual o seu peso atual? ")
   leia (peso)
   escreva ("E qual a sua renda bruta? ")
   leia (renda_bruta)
   limpatela
   
   escreval ("Aqui estão os seus dados: ")
   escreval ("Nome: ", nome)
   escreval ("Endereço: ", endereco , " Cidade: ", cidade)
   escreval ("CPF: ", cpf , " RG: ", rg)
   escreval ("A sua idade atual é: ", idade)
   escreval ("O nome de seu pai é: ", nome_pai)
   escreval ("O nome de sua mãe é: ", nome_mae)
   escreval ("O seu peso é: ", peso)
   escreval ("E a sua renda bruta é: ", renda_bruta:5:2)

fimalgoritmo

Obs: As variáveis "cpf" e "rg" estão como caracteres pois há cpf que começa com zero e nesse caso se fosse real
ou inteiro o zero inicial seria desconciderado. Já o rg existem estados que usam letras além da numeração.
````
