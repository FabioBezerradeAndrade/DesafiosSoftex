## Desafio 07

Um aluno do ensino fundamental precisa fazer como tarefa de casa a tabuada de alguns números inteiros, como nos exemplos em anexo.

Para ajudar esse aluno, você deve elaborar um algoritmo que solicite que seja digitado um número inteiro e que no final imprima o resultado da tabuada desse número.

### Resposta

````

algoritmo "Tabuada"                                  
var                                                  
   cont , num: inteiro                               
                                                     
inicio                                               
   escreva ("Qual tabuada você quer estudar? ")      
   leia (num)                                        
   limpatela                                         
   escreval ("Tabuada do " , num)                    
   cont <- 0                                         
   enquanto (cont <= 10) faca                        
      escreval (num * cont)                          
      cont <- cont + 1                               
   fimenquanto                                       
                                                     
fimalgoritmo                                         

````
