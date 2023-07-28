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

window.alert('programa imc')
rodar = true;
while (rodar){
    try{
        var peso = parseFloat(window.prompt('insira peso'));
        var altura = parseFloat(window.prompt('insira altura'));
        var imc = imc_function(peso, altura);
        window.alert(imc);
        rodar = false;
    }catch(error){
        window.alert('dados incorretos');
    }
}
window.alert('finalizado');