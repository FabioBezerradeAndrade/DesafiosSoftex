const readline = require('readline-sync');
let geradorMatricula = null;
const alunos = [];
const found = false;
const novaIteracao = false;

function cont() {
    readline.question('Aperte "Enter" para continuar!!!');
}

function menu() {
    console.log('***** SISTEMA DE GESTÃO DE ALUNOS ******');
    console.log('***************** MENU *****************');
    console.log('0 - Sair do sistema');
    console.log('1 - Listar todos alunos');
    console.log('2 - Fazer novo cadastro de aluno');
    console.log('3 - Buscar um aluno');
    console.log('4 - Alterar um cadastro de aluno');
    console.log('5 - Excluir um cadastro de aluno');
    console.log('****************************************');
}

function menuCadastro() {
    console.log('********* CADASTRO DE ALUNO(A) *********');
    console.log('**************** OPÇÃO *****************');
    console.log('1 - Fazer um novo cadastro');
    console.log('2 - Voltar');
    console.log('****************************************');
}

function menuProcurar() {
    console.log('********** BUSCA DE ALUNO(A) ***********');
    console.log('**************** OPÇÃO *****************');
    console.log('1 - Fazer uma nova busca');
    console.log('2 - Voltar');
    console.log('****************************************');
}

function menuAlterar() {
    console.log('***** ALTERAR CADASTRO DE ALUNO(A) *****');
    console.log('**************** OPÇÃO *****************');
    console.log('1 - Fazer uma nova alteração');
    console.log('2 - Voltar');
    console.log('****************************************');
}

function menuExcluir() {
    console.log('***** EXCLUIR CADASTRO DE ALUNO(A) *****');
    console.log('**************** OPÇÃO *****************');
    console.log('1 - Fazer uma nova exclução');
    console.log('2 - Voltar');
    console.log('****************************************');
}

function calcularIdade() {
    let anoAtual = new Date().getFullYear();
    this.idade = anoAtual - this.anoNascimento;
}

function listarAlunos() {
    for (const a of alunos) {
        console.log(`Matricula: ${a.matricula}`);
        console.log(`Nome: ${a.nome}`);
        for (let i = 0; i < a.notas.length; i++) {
            console.log(`\t- Nota ${i + 1}: ${a.notas[i]}`);
        }
    }
}

function adicionarAluno() {
    console.clear()
    console.log('********* CADASTRO DE ALUNO(A) *********');
    let nomeAluno = readline.question('Digite o nome do Aluno(a): ');
    let notasAluno = [];
    for (i = 0; i < 3; i++) {
        notasAluno[i] = readline.questionFloat(`Entre com a nota ${i + 1}: `);
    }
    geradorMatricula++;
    const aluno = {
        nome: nomeAluno,
        notas: notasAluno,
        matricula: geradorMatricula,
    }
    alunos.push(aluno);
    console.clear();
    console.log(`Cadastro do ${nomeAluno} realizado!!!`);
    cont()
}

function procurarAluno() {
    console.clear()
    this.found = found;
    console.log('********** BUSCA DE ALUNO(A) ***********');
    let searchAluno = readline.questionInt('Digite a matrícula do Aluno(a): ');
    for (const a of alunos) {
        if (a.matricula == searchAluno) {
            this.found = true;
            console.log(`Matricula: ${a.matricula}`);
            console.log(`Nome: ${a.nome}`);
            for (let i = 0; i < a.notas.length; i++) {
                console.log(`\t- Nota ${i + 1}: ${a.notas[i]}`);
            }
            cont()
            console.clear()
        }
    }
    if (!this.found) {
        console.log('Matricula não encontra');
        cont()
        console.clear()
    }
}

function alterarAluno() {
    console.clear()
    this.found = found;
    console.log('***** ALTERAR CADASTRO DE ALUNO(A) *****');
    let change = readline.questionInt(`Digite a Matricula do Aluno a ser alterado: `)
    for (const a of alunos) {
        if (a.matricula == change) {
            this.found = true;
            console.log('Aqui está o registro: ');
            console.log(`Nome: ${a.nome}`);
            for (let i = 0; i < a.notas.length; i++) {
                console.log(`\t- Nota ${i + 1}: ${a.notas[i]}`);
            }
            console.log('\nEntre com os novos dados: \n');
            a.nome = readline.question('Digite o nome do Aluno(a): ');
            for (i = 0; i < 3; i++) {
                a.notas[i] = readline.questionFloat(`Entre com a nota ${i + 1}: `);
            }
            console.clear()
            console.log('***** ALTERAR CADASTRO DE ALUNO(A) *****');
            console.log('Dados alterados: \n');
            console.log(`Nome: ${a.nome}`);
            for (let i = 0; i < a.notas.length; i++) {
                console.log(`\t- Nota ${i + 1}: ${a.notas[i]}`);
            }
            cont()
            console.clear()
        }
    }
    if (!this.found) {
        console.log('Matricula não encontrada!!!');
        cont()
        console.clear()
    }
}

function excluirAluno() {
    console.clear()
    this.found = found;
    console.log('***** EXCLUIR CADASTRO DE ALUNO(A) *****');
    let delAluno = readline.questionInt(`Digite a Matricula do Aluno a ser excluido: `)
    for (const a of alunos) {
        if (a.matricula == delAluno) {
            this.found = true;
            let indice = alunos.indexOf(a)
            console.log(`O registro do ${a.nome} foi excluido!!!`);
            alunos.splice(indice, 1)
            cont()
            console.clear()
        }
    }
    
    if (!this.found) {
        console.log('Matricula não encontrada!!!');
        cont()
        console.clear()
    }
}


let loop = true;

do {
    console.clear()
    menu();
    let opcaoMenu = readline.questionInt('Escolha uma opção: ');
    switch (opcaoMenu) {
        case 0:
            console.clear();
            console.log('Saindo do sistema!!!');
            loop = false;
            break;
        case 1:
            if (geradorMatricula == null) {
                console.clear()
                console.log('Não há cadastro!!!');
                cont()
                console.clear()
                break
            } else {
                console.log('Listando todos alunos cadastrados');
                console.log('---------------------------------');
                listarAlunos();
                cont()
                console.clear()
                break;
            }
        case 2:
            console.clear()
            adicionarAluno();
            do {
                console.clear()
                menuCadastro()
                this.novaIteracao = novaIteracao;
                opcaoMenu2 = readline.questionInt('Escolha uma opção: ');
                switch (opcaoMenu2) {
                    case 1:
                        this.novaIteracao = true;
                        adicionarAluno()
                        break;
                    case 2:
                        menu()
                        break;
                    default:
                        break;
                }
            } while (this.novaIteracao);
            console.clear();
            break;
        case 3:
            console.clear()
            procurarAluno();
            do {
                menuProcurar()
                this.novaIteracao = novaIteracao;
                opcaoMenu2 = readline.questionInt('Escolha uma opção: ');
                switch (opcaoMenu2) {
                    case 1:
                        this.novaIteracao = true;
                        procurarAluno()
                        break;
                    case 2:
                        menu()
                        break;
                    default:
                        break;
                }
            } while (this.novaIteracao);
            console.clear();
            break;
        case 4:
            console.clear()
            alterarAluno();
            do {
                menuAlterar()
                this.novaIteracao = novaIteracao;
                opcaoMenu2 = readline.questionInt('Escolha uma opção: ');
                switch (opcaoMenu2) {
                    case 1:
                        this.novaIteracao = true;
                        alterarAluno()
                        break;
                    case 2:
                        menu()
                        break;
                    default:
                        break;
                }
            } while (this.novaIteracao);
            console.clear();
            break;
        case 5:
            console.clear()
            excluirAluno();
            do {
                menuExcluir()
                this.novaIteracao = novaIteracao;
                opcaoMenu2 = readline.questionInt('Escolha uma opção: ');
                switch (opcaoMenu2) {
                    case 1:
                        this.novaIteracao = true;
                        excluirAluno()
                        break;
                    case 2:
                        menu()
                        break;
                    default:
                        break;
                }
            } while (this.novaIteracao);
            console.clear();
            break;
        default:
            console.log('Opção invalida');
            break;
    }

} while (loop);


