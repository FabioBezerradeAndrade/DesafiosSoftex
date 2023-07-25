let carta1P1 , carta2P1 , somaP1 ;
let carta1Banca, carta2Banca, carta3Banca, carta4Banca, somaBanca ; 

carta1P1 = 11 ;
carta2P1 = 11 ; 

carta1Banca = 2
carta2Banca = 3
carta3Banca = 4
carta4Banca = 5

somaP1 = carta1P1 + carta2P1 ;
somaBanca = carta1Banca + carta2Banca + carta3Banca + carta4Banca ;

if ((somaP1 & somaBanca)> 21) {
    console.log('não hoouve ganhador');
} 
if ((somaBanca > somaP1) & (somaBanca)) {
    console.log('A banca venceu');
} else {
    console.log('Jogador 1 ganhou');
}
//console.log('A soma das cartas é: ' , soma);

//if((somaBanco>21 || somaP1<=21) && somap1>somaBanco)