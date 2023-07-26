## Desafio 12

Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.

### Resposta

https://blockly-demo.appspot.com/static/demos/code/index.html?lang=en#4p98q4


<img src = '/img/detonador.png'>

````

var i;


i = Number(window.prompt('Digite o tempo em segundos para detonação do explosivo: '));
window.alert('Começar contagem regressiva!!!');
while (i != 0) {
  window.alert(['Detonação em ',i,'!!!'].join(''));
  i = i - 1;
}
window.alert('BUM!');

````
