## Desafio 3

Em uma inscrição, o usuário informou os seguintes dados:

- Nome: José Almeida da Silva
- CPF: 12345678900
- RG: 9517530
- Altura: 1,78
- Endereço: Rua A, 380 – Centro – Recife/PE

No algoritmo, descreva como será:
1. A proposta das variáveis;
2. Elaborada a declaração das variáveis;
3. Utilizado o comando de atribuição.


<details> 
  <summary>Clique para visualizar a resposta</summary>

### Resposta

````
Algoritmo "cadastro"
var
	nome: caractere
	cpf: caractere
	rg: caractere
	altura: real
	endereco: caractere
Inicio
	nome <- "José Almeida da Silva"
	cpf <- "02345678900"
	rg <- "9517530"
	altura <- 1.78
	endereco <- "Rua A, 380 - Centro - Recife/PE"

fimalgoritmo 

Obs: As variáveis "cpf" e "rg" estão como caracteres pois há cpf que começa com zero e nesse caso se fosse real
ou inteiro o zero inicial seria desconciderado. Já o rg existem estados que usam letras além da numeração.
````
