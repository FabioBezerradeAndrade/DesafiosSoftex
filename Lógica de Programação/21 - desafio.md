## Desafio 21

Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.

### Solução

Como é um pequeno vetor e não ordenado, podemos usar a solução de busca linear, mas deixarei as duas soluções.

#### Usando método de busca linear 
````js 

function buscaLinear(array , elementoBuscado) {
    for (let i = 0; i <  array.length; i++) {
        // Verificar se o elemento atual é igualao que estamos buscando.
        if (array[i] === elementoBuscado) {
            // Retornar o indice onde o elemento foi encontrado.
            return i;
        }
    }
    // Caso o elemento não seja encontrado, retornar valor -1.
    return -1;
}

const numeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const numeroBuscar = 20;

const indiceEncontrado = buscaLinear(numeros , numeroBuscar);

if (indiceEncontrado !== -1) {
    console.log(`O elemento ${numeroBuscar} foi encontrado na posição ${indiceEncontrado}`);
} else {
    console.log(`O elemento ${numeroBuscar} não foi encontrado na lista`);
}


````

#### Usando método de busca binária

````js

function buscaBinaria(array, elementoBuscado) {
    let inicio = 0;
    let fim = array.length -1;
    while (inicio <= fim) {
        // Calcular  o meio
        const meio = Math.floor((inicio + fim) / 2);

        //  Verificar se o elemento meio é igual ao que queremos buscar.
        if (array[meio] === elementoBuscado) {
            // Retornar o indice onde o elemento foi encontrato (posição).
            return meio;
        }
        // Descartar a metada à direita caso o elemento do meio for maior que o elemento buscado.
        if (array[meio] > elementoBuscado) {
            fim = meio -1;
        } else {
            // Se não, descartar a metade a esquerda.
            inicio = meio + 1;
        }
    }
    // Se o elemento não for encontrado, retornarvalor -1.
    return -1;
}

const numeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
// Não utilizei o método de ordenar o array (numeros.sort((a, b) => a - b);),  pois se o indice for necessário poderá haver mudança na posição caso haja mudança de valores no vetor.

const numeroBuscar = 20;
const indiceEncontrado = buscaBinaria(numeros, numeroBuscar);
if (indiceEncontrado !== -1) {
    console.log(`O elemento ${numeroBuscar} foi encontrado na posição ${indiceEncontrado}`);
} else {
    console.log(`O elemento ${numeroBuscar} não foi encontrado na lista`);
}
