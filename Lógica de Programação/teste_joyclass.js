// var numero_inteiro = 5
// var numero_float = 5.7
// var texto = "este é um texto"
// var booleano = false;
// console.log("Este é um tipo:");
// console.log( typeof numero_inteiro)
// console.log("Este é um tipo:");
// console.log(typeof numero_float)
// console.log("Este é um tipo:")
// console.log(typeof texto)
// console.log("Este é um tipo:")
// console.log(typeof booleano)

// window.alert('programa imc')
// rodar = true;
// while (rodar){
//     try{
//         var peso = parseFloat(window.prompt('insira peso'));
//         var altura = parseFloat(window.prompt('insira altura'));
//         var imc = imc_function(peso, altura);
//         window.alert(imc);
//         rodar = false;
//     }catch(error){
//         window.alert('dados incorretos');
//     }
// }
// window.alert('finalizado');

// Você deve criar três listas em JavaScript:

// 1. para guardar os nomes de dez pessoas;
// 2. para guardar as suas idades;
// 3. para guardar as suas cores favoritas.

// Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. 
//Ao terminar, imprima novamente todas as informações das três listas.


// let nome = ['Albert' , 'Bernardete' , 'Creuza' , 'Diego' , 'Estevão' , 'Fábio' ,  'Geraldo' , 'Heitor' , 'Igor' , 'Jeremias'];
// let idade = [15 , 20 , 17 , 68 , 55 , 60 , 45 , 74 , 99 , 7 ];
// let cor_favorita = ['azul' , 'verde' , 'amarela' , 'verde' , 'marrom' , 'preta' , 'laranja' , 'roxa' , 'azul' , 'branca' ];

// console.log(nome , idade , cor_favorita);

// idade.splice(8 , 1 , 47);
// cor_favorita.splice(1 , 1 , 'rosa');

// console.log(nome , idade , cor_favorita);


let anoAtual = new Date().getFullYear();

class Pessoa {
   constructor(nome , anoNascimento , filho) {
       this.nome = nome;
       this.anoNascimento = anoNascimento;
       this.filho = filho;
       this.#calcularIdade();

   }
   #calcularIdade() {
       this.idade = anoAtual - this.anoNascimento;
      }
} 

var pessoas = [];

pessoa1 = new Pessoa('Francisco', 1992, 0);
pessoas.push(pessoa1);

pessoa2 = new Pessoa('Chiquinha' , 1899, 10);
pessoas.push(pessoa2);

pessoa3 = new Pessoa('Humberto', 1985, 1)
pessoas.push(pessoa3);

console.log(pessoas);
