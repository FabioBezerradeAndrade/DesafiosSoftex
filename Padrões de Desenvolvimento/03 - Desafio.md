## Desafio 03
Aplique o padrão de projeto decorator para criar um sanduíche de frango assado com pepperoni e queijo mussarela ralado. O projeto deve seguir os seguintes critérios:
- deve imprimir no console: Sanduíche de Carne, Bacon, QueijoMussarelaRalado custa $7,49. - o sanduíche de
frango assado custa
$4,50.- o ingrediente - o ingrediente adicional queijo mussarela ralado - crie as classes necessárias: custa $2,00.
adicional pepperoni custa $0,99. FrangoAssado, Pepperoni e QueijoMussarelaRalado.

### Resposta


````ts

// Interface que define o componente base
interface Sanduiche {
    cost(): number;
    description(): string;
  }
  
  // Classe concreta que implementa o componente base
  class SanduicheDeFrango implements Sanduiche {
    cost() {
      return 4.50;
    }
  
    description() {
      return "Sanduíche de Frango assado";
    }
  }
  
  // Decorator abstrato
  abstract class SanduicheDecorator implements Sanduiche {
    protected decoratedSanduiche: Sanduiche;
  
    constructor(sanduiche: Sanduiche) {
      this.decoratedSanduiche = sanduiche;
    }
  
    cost() {
      return this.decoratedSanduiche.cost();
    }
  
    description() {
      return this.decoratedSanduiche.description();
    }
  }
  
  // Decorator concreto que adiciona pepperoni
  class PepperoniDecorator extends SanduicheDecorator {
    cost() {
      return this.decoratedSanduiche.cost() + 0.99;
    }
  
    description() {
      return this.decoratedSanduiche.description() + " + pepperoni";
    }
  }
  
  // Decorator concreto que adiciona queijo mussarela ralado
  class QueijoMussarelaRaladoDecorator extends SanduicheDecorator {
    cost() {
      return this.decoratedSanduiche.cost() + 2.00;
    }
  
    description() {
      return this.decoratedSanduiche.description() + " + queijo mussarela ralado";
    }
  }
  
  // Uso dos decoradores
  let sanduiche: Sanduiche = new SanduicheDeFrango();
  console.log(`Lanche: ${sanduiche.description()} - Preço: $${sanduiche.cost()}`);
  
  sanduiche = new PepperoniDecorator(sanduiche);
  console.log(
    `Lanche: ${sanduiche.description()} - Preço: $${sanduiche.cost()}`
  );
  
  sanduiche = new QueijoMussarelaRaladoDecorator(sanduiche);
  console.log(
    `Lanche: ${sanduiche.description()} - Preço: $${sanduiche.cost()}`
    );


````
