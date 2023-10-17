
// class Pessoa {
//   nome: string;
//   idade: number;
//   email: string;

//   constructor(nome: string, idade: number, email: string) {
//     this.nome = nome;
//     this.idade = idade;
//     this.email = email;
//   }
// }

// const pessoa1 = new Pessoa('Marillia', 39, 'marillia@gmail.com')

// console.log(pessoa1);


// class Aluno extends Pessoa {
//   matricula: number;

//   constructor(nome: string, idade: number , email: string , matricula: number) {
//     super(nome, idade, email)
//     this.matricula = matricula;
//   }
// }

// const aluno01 = new Aluno ('fabio', 42, "fabio@gmail.com", 202313)
// console.log(aluno01);


// class Retangulo {
//   largura: number;
//   altura: number;

//   constructor(largura: number, altura: number) {
//     this.largura = largura;
//     this.altura = altura;
//   }
//   area () {
//     console.log(this.largura * this.altura);
//   }

//   perimetro() {
//     console.log(this.largura*2 + this.altura*2);
//   }
// }

// const retangulo = new Retangulo(12, 4);


// retangulo.area()
// retangulo.perimetro()

class Circulo {
  raio: number;

  constructor(raio: number) {
    this.raio = raio;
  }

  area (){
    console.log(3.14*(this.raio*this.raio));
  }

  circunferencia() {
    console.log(2*3.14*this.raio);
    
  }
}

const redondo = new Circulo(7)

redondo.area()
redondo.circunferencia()
