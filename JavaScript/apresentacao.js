const readline = require('readline-sync');


class SistemaDeGestaoDeLivros {
    constructor() {
        this.geradorID = null;
        this.livros = [];
        this.found = false;
        this.novaIteracao = false;
        this.opcaoMenu;
        this.numPaginas;
    }
    gerarID() {
        return Math.floor(Math.random() * 10000) + 1; //// Gera um número inteiro aleatório entre 1 e 10000 (ou o intervalo desejado)
    }

    cont() {
        console.log('**************************************');
        readline.question('Aperte "Enter" para continuar!!!');
    }

    menu() {
        console.log('***** SISTEMA DE ACERVO DE LIVROS ****');
        console.log('***************** MENU ***************');
        console.log('0 - Sair do sistema');
        console.log('1 - Listar todos Livros');
        console.log('2 - Cadastrar um novo Livro');
        console.log('3 - Buscar Livro');
        console.log('4 - Alterar cadastro de um Livro');
        console.log('5 - Excluir um cadastro de Livro');
        console.log('**************************************');
    }

    subMenu() {
        switch (this.opcaoMenu) {
            case 2:
                console.clear()
                console.log('********* CADASTRO DE LIVROS *********');
                console.log('**************** OPCAO ***************');
                console.log('1 - Fazer um novo cadastro');
                break;
            case 3:
                console.clear()
                console.log('************ BUSCAR LIVRO ************');
                console.log('**************** OPCAO ***************');
                console.log('1 - Fazer uma nova busca');
                break;
            case 4:
                console.clear()
                console.log('***** ALTERAR CADASTRO DE UM LIVRO ***');
                console.log('**************** OPCAO ***************');
                console.log('1 - Fazer uma nova alteracao');
                break;
            case 5:
                console.clear()
                console.log('***** EXCLUIR CADASTRO DE UM LIVRO ***');
                console.log('**************** OPCAO ***************');
                console.log('1 - Fazer uma nova exclucao');
                break;
            default:

                break;
        }
        console.log('2 - Voltar');
        console.log('**************************************');
    }

    menuAlterarLivro() {
        console.log('***** ALTERAR CADASTRO DE UM LIVRO ***');
        console.log('**************** OPCAO ***************');
        console.log('1 - Alterar titulo');
        console.log('2 - Alterar Autor');
        console.log('3 - Alterar numero de paginas');
        console.log('**************************************');
    }

    adicionarLivro() {
        console.clear();
        console.log('********* CADASTRO DE LIVROS *********');
        this.geradorID = this.gerarID();
        let tituloLivro, autorLivro, numPaginas;

        tituloLivro = readline.question('Digite o titulo / nome do Livro: ');
        autorLivro = readline.question('Digite o Autor: ');

        while (true) {
            numPaginas = readline.questionInt('Entre com o numero de paginas: ', { limitMessage: 'Digite um numero valido' });
            if (!isNaN(numPaginas)) {
                numPaginas = parseInt(numPaginas);
                break;
            } else {
                console.log('Digite um número válido!. ');
            }
        }
        const livro = {
            titulo: tituloLivro,
            autor: autorLivro,
            paginas: numPaginas,
            id: this.geradorID,
        };
        this.livros.push(livro);
        console.clear();
        console.log(`Cadastro do Livro realizado!!!`);
        console.log(`Titulo: ${tituloLivro}`);
        console.log(`\t-Autor: ${autorLivro}`);
        console.log(`\t-Paginas: ${numPaginas}`);
        console.log(`\t-ID: ${this.geradorID}`);
        this.cont();
    }

    listarLivros() {
        console.clear()
        console.log('********* TODOS LIVROS CADASTRADOS *********');
        for (const l of this.livros) {
            console.log('_______________________________________________');
            console.log(`ID: ${l.id} => Titulo: ${l.titulo}`);
            console.log(`\t- Autor: ${l.autor}`);
            console.log(`\t- Pag: ${l.paginas}`);
        }
    }

    procurarLivro() {
        console.clear()
        this.found = false;
        let searchLivro;
        console.log('********** BUSCAR LIVRO *********');
        searchLivro = readline.question('Digite TÍTULO, AUTOR ou ID do livro: ');
        console.clear()

        for (const l of this.livros) {
            const searchLower = searchLivro.toLowerCase(); // Converter a entrada do usuário para minúsculas
            const tituloLower = l.titulo.toLowerCase(); // Converter o título do livro para minúsculas
            const autorLower = l.autor.toLowerCase(); // Converter o autor do livro para minúsculas
            if (l.id == searchLivro || autorLower == searchLower || tituloLower == searchLower) {
                this.found = true;
                console.log('************ ENCONTRADO(S) ***********');
                console.log(`ID: ${l.id} => Titulo: ${l.titulo}`);
                console.log(`\t- Autor: ${l.autor}`);
                console.log(`\t- Pag: ${l.paginas}`);
            }
        }

        if (!this.found) {
            console.clear()
            console.log('Livro não encontrado');
        }
        this.cont()

    }

    alterarLivro() {
        console.clear()
        this.found = false;
        console.log('***** ALTERAR CADASTRO DE UM LIVRO ***');
        const change = readline.questionInt('➥ Digite o ID do livro a ser alterado: ', { limitMessage: 'Digite um numero valido' });
        for (const l of this.livros) {
            if (l.id == change) {
                this.found = true;
                console.clear()
                console.log('Registro atual: ');
                console.log(`Titulo: ${l.titulo}`);
                console.log(`\t- Autor: ${l.autor}\n\t- número de pag: ${l.paginas}`);
                this.menuAlterarLivro()

                let opcaoAlterarLivro = readline.questionInt('Digite opcao desejada: ')
                if (!isNaN(opcaoAlterarLivro)) {
                    switch (opcaoAlterarLivro) {
                        case 1:
                            l.titulo = readline.question('Digite o titulo: ');
                            break;
                        case 2:
                            l.autor = readline.question('Digite o nome do Autor(a): ');
                            break;
                        case 3:
                            l.paginas = readline.questionInt('Digite quantidade de paginas: ', { limitMessage: 'Digite um numero valido' });
                            break;
                        case 4:
                            console.clear()
                            this.subMenu()
                        default:
                            break;
                    }
                } else {
                    return;

                }

                console.clear()
                console.log('***** ALTERAR CADASTRO DE UM LIVRO ***');
                console.log('Dados alterados: \n');
                console.log(`Titulo: ${l.titulo}`);
                console.log(`\t- Autor: ${l.autor}`);
                console.log(`\t- pag: ${l.paginas}`);
                this.cont()
                console.clear()
            }




        }
        if (!this.found) {
            console.log('Livro não encontrado!!!');
            this.cont()
            console.clear()
        }
    }

    excluirLivro() {
        console.clear()
        this.found = false;
        console.log('***** EXCLUIR CADASTRO DE UM LIVRO ***');
        const excluirLivro = readline.questionInt('➥ Digite o ID do Livro a ser excluido: ', { limitMessage: 'Digite um numero valido' });
        for (const l of this.livros) {
            if (l.id == excluirLivro) {
                this.found = true;
                const indice = this.livros.indexOf(l)
                console.log(`O registro do "${l.titulo}" foi excluido!!!`);
                this.livros.splice(indice, 1)
                this.cont()
                console.clear()
            }
        }

        if (!this.found) {
            console.log('Registro nao encontrado!!!');
            this.cont()
            console.clear()
        }
    }

    run() {
        let loop = true;

        do {
            console.clear()
            this.menu();
            this.opcaoMenu = readline.questionInt('Escolha uma opcao: ', { limitMessage: 'Digite um numero valido' });
            switch (this.opcaoMenu) {
                case 0:
                    console.clear();
                    console.log('Saindo do sistema!!!');
                    loop = false;
                    break;
                case 1:
                    if (this.geradorID === null) {
                        console.clear()
                        console.log('Nao ha registro!!!');
                        this.cont()
                        console.clear()
                        break
                    } else {
                        this.listarLivros();
                        this.cont()
                        console.clear()
                        break;
                    }
                case 2:
                    console.clear()
                    this.adicionarLivro();
                    do {
                        console.clear()
                        this.subMenu()
                        this.novaIteracao = false;
                        let opcaoMenu2 = readline.questionInt('Escolha uma opcao: ', { limitMessage: 'Digite um numero valido' });
                        switch (opcaoMenu2) {
                            case 1:
                                this.novaIteracao = true;
                                this.adicionarLivro()
                                break;
                            case 2:
                                this.menu()
                                break;
                            default:
                                break;
                        }
                    } while (this.novaIteracao);
                    console.clear();
                    break;
                case 3:
                    console.clear()
                    this.procurarLivro();
                    do {
                        this.subMenu()
                        this.novaIteracao = false;
                        let opcaoMenu2 = readline.questionInt('Escolha uma opcao: ', { limitMessage: 'Digite um numero valido' });
                        switch (opcaoMenu2) {
                            case 1:
                                this.novaIteracao = true;
                                this.procurarLivro()
                                break;
                            case 2:
                                this.menu()
                                break;
                            default:
                                break;
                        }
                    } while (this.novaIteracao);
                    console.clear();
                    break;
                case 4:
                    console.clear()
                    this.alterarLivro();
                    do {
                        this.subMenu()
                        this.novaIteracao = false;
                        let opcaoMenu2 = readline.questionInt('Escolha uma opcao: ', { limitMessage: 'Digite um numero valido' });
                        switch (opcaoMenu2) {
                            case 1:
                                this.novaIteracao = true;
                                this.alterarLivro()
                                break;
                            case 2:
                                this.menu()
                                break;
                            default:
                                break;
                        }

                    } while (this.novaIteracao);
                    console.clear();
                    break;
                case 5:
                    console.clear()
                    this.excluirLivro();
                    do {
                        this.subMenu()
                        this.novaIteracao = false;
                        let opcaoMenu2 = readline.questionInt('Escolha uma opcao: ', { limitMessage: 'Digite um numero valido' });
                        switch (opcaoMenu2) {
                            case 1:
                                this.novaIteracao = true;
                                this.excluirLivro()
                                break;
                            case 2:
                                this.menu()
                                break;
                            default:
                                break;
                        }
                    } while (this.novaIteracao);
                    console.clear();
                    break;
                default:
                    break;
            }
        } while (loop);
    }
}

const sistema = new SistemaDeGestaoDeLivros();
sistema.run();
