## Desafio 06

Levando em consideração os aprendizados sobre as estruturas condicionais, elabore um algoritmo que possa descobrir, através de perguntas e respostas, qual é o meio de transporte que o usuário está considerando. O usuário deverá escolher uma das seguintes opções:

- trator; 
- moto; 
- bicicleta. 

Para chegar ao resultado, as perguntas precisam ser respondidas apenas com "Sim" ou "Não".

Exemplo:
É terrestre? Sim.
Cabe apenas uma pessoa? Sim.
É pesado? Não.
Tem pedal? Sim.
Então, o transporte escolhido foi a bicicleta.

Para chegar ao resultado de cada uma das opções, use o modelo em anexo.
### Resposta

````js

algoritmo "Adivinhar transporte"                                                              
var                                                                                           
   resposta : caractere                                                                       
                                                                                              
inicio                                                                                        
   escreval("Escolha um desses três meios de transporte: ")                                   
   escreval("- Trator")                                                                       
   escreval("- Moto")                                                                         
   escreval("- Bicicleta")                                                                    
                                                                                              
   escreval("")                                                                               
                                                                                              
   escreval("É terrestre?")                                                                   
   leia(resposta)                                                                             
                                                                                              
   se resposta = "sim" entao                                                                  
      escreval ("Cabe apenas uma pessoa?")                                                    
      leia (resposta)                                                                         
      se resposta = "sim" entao                                                               
         escreval("É pesado?")                                                                
         leia(resposta)                                                                       
         se resposta = "sim" entao                                                            
            limpatela                                                                         
            escreval("Você escolheu o trator!!!")                                             
         senao                                                                                
            se resposta = "nao" entao                                                         
               escreval("Usa pedal?")                                                         
               leia(resposta)                                                                 
               se resposta = "sim"entao                                                       
                  limpatela                                                                   
                  escreval("Você escolheu a bicicleta!!!")                                    
               fimse                                                                          
            fimse                                                                             
         fimse                                                                                
      senao                                                                                   
         se resposta = "nao" entao                                                            
            escreval("Usa capacete?")                                                         
            leia(resposta)                                                                    
            se resposta = "sim" entao                                                         
               limpatela                                                                      
               escreval("Você escolheu a moto!!!")                                            
            fimse                                                                             
         fimse                                                                                
      fimse                                                                                   
   fimse                                                                                      
fimalgoritmo

````
