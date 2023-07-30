## Desafio 15 

- Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

- Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

### Resposta

````

let nomeCompleto ,  anoNascimento , anoAtual  , verAnoNascimento;
anoAtual = new Date().getFullYear();
verAnoNascimento = false ;

function idade(){
    return anoAtual - anoNascimento ; 
}

nomeCompleto = require('readline-sync').question('entre com o seu nome: \n');
while(verAnoNascimento == false){
    try{
        anoNascimento = parseInt(require('readline-sync').question('entre com o ano do seu nascimento: \n'));
        if (isNaN(verAnoNascimento) == false){
            if (anoNascimento >= 1922 && anoNascimento <= 2021){
                verAnoNascimento = true ; 
            } else {
                verAnoNascimento = false ;
                throw new Error('Ano nascimento inválido, deve ser entre 1922 e 2021. Digite novamente!!! \n')
            }
        }
    } catch(error){
        console.log(error);
        
    }
} 

console.log(`Seu nome é: ${nomeCompleto}, e em ${anoAtual} você está ou estará com  ${idade()}`);

````
