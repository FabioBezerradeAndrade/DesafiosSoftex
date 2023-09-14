const readline = require('readline-sync');
let geradorID = null;
const livros = [];
const found = false;
const novaIteracao = false;
let controleMenu

function cont() {
    console.log('****************************************');
    readline.question('Aperte "Enter" para continuar!!!');
}

function menu() {
    console.log('***** SISTEMA DE GESTAO DE LIVROS ******');
    console.log('***************** MENU *****************');
    console.log('0 - Sair do sistema');
    console.log('1 - Listar todos Livros');
    console.log('2 - Cadastrar um novo Livro');
    console.log('3 - Buscar Livro');
    console.log('4 - Alterar cadastro de um Livro');
    console.log('5 - Excluir um cadastro de Livro');
    console.log('****************************************');
}

function subMenu() {
    switch (controleMenu) {
        case 2:
            console.log('********* CADASTRO DE LIVROS ***********');
            console.log('**************** OPCAO *****************');
            console.log('1 - Fazer um novo cadastro');
            break;
        case 3:
            console.log('************ BUSCAR LIVRO **************');
            console.log('**************** OPCAO *****************');
            console.log('1 - Fazer uma nova busca');
            break;
        case 4:
            console.log('***** ALTERAR CADASTRO DE UM LIVRO *****');
            console.log('**************** OPCAO *****************');
            console.log('1 - Fazer uma nova alteracao');
            break;
        case 5:
            console.log('***** EXCLUIR CADASTRO DE UM LIVRO *****');
            console.log('**************** OPCAO *****************');
            console.log('1 - Fazer uma nova exclucao');
            break;
        default:
            break;
    }
    console.log('2 - Voltar');
    console.log('****************************************');
}

// Create

function adicionarLivro() {
    console.clear()
    console.log('********* CADASTRO DE LIVROS ***********');
    let tituloLivro = readline.question('Digite o titulo / nome do Livro: ');
    let autorLivro = readline.question('Digite o Autor: ');
    let numPaginas = readline.questionInt('Entre com o numero de paginas: ')
    geradorID++;
    const livro = {
        titulo: tituloLivro,
        autor: autorLivro,
        paginas: numPaginas,
        id: geradorID,
    }
    livros.push(livro);
    console.clear();
    console.log(`Cadastro do Livro "${tituloLivro}" realizado!!!`);
    cont()
}

// Read

function listarLivros() {
    console.clear()
    console.log('********* TODOS LIVROS CADASTRADOS ***********');
    for (const l of livros) {
        console.log('_______________________________________________');
        console.log(`ID: ${l.id} => Titulo: ${l.titulo}`);
        console.log(`\t- Autor: ${l.autor}`);
        console.log(`\t- Pag: ${l.paginas}`);
    }
}

function procurarLivro() {
    console.clear()
    this.found = found;
    console.log('********** BUSCAR LIVRO ***********');
    let searchLivro = readline.questionInt('Digite ID do Livro: ');
    for (const l of livros) {
        if (l.id == searchLivro) {
            this.found = true;
            console.log(`ID: ${l.id} => Titulo: ${l.titulo}`);
            console.log(`\t- Autor: ${l.autor}`);
            console.log(`\t- Pag: ${l.paginas}`);
            cont()
            console.clear()
        }
    }
    if (!this.found) {
        console.log('Livro nao encontrado');
        cont()
        console.clear()
    }
}

// Update

function alterarLivro() {
    console.clear()
    this.found = found;
    console.log('***** ALTERAR CADASTRO DE UM LIVRO *****');
    let change = readline.questionInt(`Digite o ID do livro a ser alterado: `)
    for (const l of livros) {
        if (l.id == change) {
            this.found = true;
            console.log('Registro atual: ');
            console.log(`Titulo: ${l.titulo}`);
            console.log(`\t- Autor: ${l.autor} | número de pag: ${l.paginas}`);
            console.log('\nEntre com os novos dados: \n');
            l.titulo = readline.question('Digite o titulo: ');
            l.autor = readline.question('Digite o nome do Autor(a): ');
            l.paginas = readline.questionInt('Digite quantidade de paginas: ');
            console.clear()
            console.log('***** ALTERAR CADASTRO DE UM LIVRO *****');
            console.log('Dados alterados: \n');
            console.log(`Titulo: ${l.titulo}`);
            console.log(`\t- Autor: ${l.autor}`);
            console.log(`\t- pag: ${l.paginas}`);
            cont()
            console.clear()
        }
    }
    if (!this.found) {
        console.log('Livro nao encontrado!!!');
        cont()
        console.clear()
    }
}

// Delete

function excluirLivro() {
    console.clear()
    this.found = found;
    console.log('***** EXCLUIR CADASTRO DE UM LIVRO *****');
    let excluirLivro = readline.questionInt(`Digite o ID do Livro a ser excluido: `)
    for (const l of livros) {
        if (l.id == excluirLivro) {
            this.found = true;
            let indice = livros.indexOf(l)
            console.log(`O registro do "${l.titulo}" foi excluido!!!`);
            livros.splice(indice, 1)
            cont()
            console.clear()
        }
    }
    
    if (!this.found) {
        console.log('ID nao encontrado!!!');
        cont()
        console.clear()
    }
}

let loop = true;

do {
    console.clear()
    menu();
    let opcaoMenu = readline.questionInt('Escolha uma opcao: ');
    controleMenu = opcaoMenu;
    switch (opcaoMenu) {
        case 0:
            console.clear();
            console.log('Saindo do sistema!!!');
            loop = false;
            break;
        case 1:
            if (geradorID == null) {
                console.clear()
                console.log('Nao ha registro!!!');
                cont()
                console.clear()
                break
            } else {
                listarLivros();
                cont()
                console.clear()
                break;
            }
        case 2:
            console.clear()
            adicionarLivro();
            do {
                console.clear()
                subMenu()
                this.novaIteracao = novaIteracao;
                opcaoMenu2 = readline.questionInt('Escolha uma opcao: ');
                switch (opcaoMenu2) {
                    case 1:
                        this.novaIteracao = true;
                        adicionarLivro()
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
            procurarLivro();
            do {
                subMenu()
                this.novaIteracao = novaIteracao;
                opcaoMenu2 = readline.questionInt('Escolha uma opcao: ');
                switch (opcaoMenu2) {
                    case 1:
                        this.novaIteracao = true;
                        procurarLivro()
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
            alterarLivro();
            do {
                subMenu()
                this.novaIteracao = novaIteracao;
                opcaoMenu2 = readline.questionInt('Escolha uma opcao: ');
                switch (opcaoMenu2) {
                    case 1:
                        this.novaIteracao = true;
                        alterarLivro()
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
            excluirLivro();
            do {
                subMenu()
                this.novaIteracao = novaIteracao;
                opcaoMenu2 = readline.questionInt('Escolha uma opcao: ');
                switch (opcaoMenu2) {
                    case 1:
                        this.novaIteracao = true;
                        excluirLivro()
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
            console.log('Opcao invalida');
            break;
    }
} while (loop);
