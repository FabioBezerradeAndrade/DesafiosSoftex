## Desafio 14


### Resposta

https://blockly-demo.appspot.com/static/demos/code/index.html?lang=en#dn8kaf

<img src="img/calculadora.png">

````

var n1, n2, opt, simbol, num1, num2, resultado;

// Descreva esta função...
function calc(n1, n2) {
  if (opt == 1) {
    return n1 + n2;
  }
  if (opt == 2) {
    return n1 - n2;
  }
  if (opt == 3) {
    return n1 * n2;
  }
  if (opt == 4) {
    return n1 / n2;
  }
}


while (opt != 0) {
  opt = Number(window.prompt('Escolha opção: 1 Adição, 2 Subtração, 3 Multiplicação, 4 Divisão e 0 Sair'));
  while (opt < 0 || opt > 4) {
    if (opt < 0 || opt > 4) {
      window.alert('Essa opção não existe');
      opt = Number(window.prompt('Escolha opção: 1 Adição, 2 Subtração, 3 Multiplicação, 4 Divisão e 0 Sair'));
    }
  }
  if (opt == 1) {
    simbol = ' + ';
  }
  if (opt == 2) {
    simbol = ' - ';
  }
  if (opt == 3) {
    simbol = ' * ';
  }
  if (opt == 4) {
    simbol = ' / ';
  }
  if (opt == 0) {
    window.alert('programa encerrado.');
  } else {
    num1 = Number(window.prompt('Entre com o 1º número: '));
    num2 = Number(window.prompt('Entre com o 2º número: '));
    resultado = calc(num1, num2);
    window.alert(['O resultado de ',num1,simbol,num2,' = ',resultado].join(''));
  }
}

````
