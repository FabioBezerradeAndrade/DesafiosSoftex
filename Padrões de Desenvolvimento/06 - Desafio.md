## Desafio 06
Aplique o padrão de projeto Observer para criar um simples editor de texto. Considere a solução apresentada no Hipertexto 6 e utilize o código visto para implementar novas classes. Os requisitos para avaliar o projeto são:
- implementar uma subclasse da classe Editor chamada TextEditor, - aplicar o método insertLine, que recebe os parâmetros lineNumber e text,
inserir o texto na ordem correspondente a lineNumber e deslocar as linhas posteriores se necessário;
aplicar o método removeLine, que recebe lineNumber como parâmetro, deleta o texto da linha correspondente e desloca as linhas posteriores se necessário;
instanciar um TextEditor e disparar o evento "open";
- receber as linhas de texto, que serão inseridas no objeto textEditor, do usuário até que ele envie o texto "EOF", que não deve ser inserido no objeto textEditor,
- por fim, o textEditor deve disparar o evento "save" para que o conteúdo seja salvo no arquivo configurado e imprimir todo o conteúdo do arquivo na tela.

### Resposta

````ts

const readlineSync = require('readline-sync');

// Classe Observer

class Observer {
  update() {}
}

// Classe Subject

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify() {
    this.observers.forEach(observer => observer.update());
  }
}

// Classe Editor (Subject)

class Editor extends Subject {
  open() {
    console.log("Editor aberto");
    this.notify();
  }
}

// Subclasse TextEditor

class TextEditor extends Editor {
  constructor() {
    super();
    this.lines = [];
  }

  insertLine(lineNumber, text) {
    this.lines.splice(lineNumber, 0, text);
  }

  removeLine(lineNumber) {
    this.lines.splice(lineNumber, 1);
  }

  saveToFile() {
    console.log("Arquivo salvo");
  }

  displayContent() {
    console.log("Foi Digitado:");
    this.lines.forEach(line => console.log(line));
  }
}

const textEditor = new TextEditor();

textEditor.addObserver({
  update() {
    console.log('"open"');
  }
});

textEditor.open();

// Adiciona as linhas de texto
let lineNumber = 0;
let userInput;
while ((userInput = readlineSync.question("Digite uma linha de texto (ou 'EOF' para finalizar):")) !== 'EOF') {
  textEditor.insertLine(lineNumber++, userInput);
}
lineNumber--;

textEditor.removeObserver(textEditor.observers[0]);

// Salva e exibe o conteúdo
textEditor.saveToFile();
textEditor.displayContent();


````
