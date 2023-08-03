// cont = 1;
// do{
//     console.log(cont);
//     cont++
// }while (cont <= 10 )

// var cont = 0 , soma = 0; 
// do {
//     cont++
//     soma = soma + cont;
// }while (cont <100)
// console.log(soma);

// let cont = 1 , par = 0 , soma = 0;

// while(cont <= 50){
//     if (cont % 2 === 0) {
//         par = cont;
//         console.log(par);
//         soma  = soma + par;
//     } 
//     cont++;
// }
//  console.log(soma);

// let x = 12;
//  while (x <=1000){
//     x = x * 2 ; 

//  }
//  console.log(x);

let i = 1 , j = 2 , soma = 0;

while (i < 100) {
    j = 2
    while (j < i) {
        if (i % j == 0) {
            j = i + 1;
        } else {
            j = j + 1;
        }
    }
    if (j == i) {
        console.log(i)
        soma = soma + i;
    }
    i = i + 1;
}


// var senha;
// while (senha !='password'){
//     senha = require('readline-sync').question('Digite a senha \n ');
//     if (senha != 'password'){
//         console.log('senha errada \n ');
//     }
// }
// console.log('Acertou misseravi');

// let x = 0;
// while (x < 30 ){
//     x = x + 3;
//     console.log(x);
// }




// let x = 10;

// while (x > 0 ) {
//     console.log(x);
//     x--;
// }

