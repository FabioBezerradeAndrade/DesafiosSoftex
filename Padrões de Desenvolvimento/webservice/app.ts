import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json());
const port = 3000

app.get('/', (req: Request, res: Response) => res.send('Bem vindo ao meu web service!!!'))
app.listen(port, () => console.log(`Funcionando na porta ${port}!`))

const usuarios = [
    {nome: 'Fulano', id: 01},
    {nome: 'Beltrano', id: 02}
]


// adicionar novo usuario
app.post('/usuarios', (req: Request, res: Response) => {

    try {
        const newUser = {
            nome: req.body.nome,
            id: usuarios.length +1
        }

        usuarios.push(newUser);
        res.status(201).json(newUser);
        
    } catch (error: any) {
        res.status(400).json({mensagem: 'Erro em cadastrar novo usuário!'})   
    }
});


// Listar usuarios
app.get('/usuarios',(req: Request, res: Response) => {
    try {
        res.send(usuarios)
    } catch (error: any) {
        res.status(404).json({mensagem: 'Lista não encontra!'})
    }
});

// buscar usuario por id
app.get('/usuarios/:id', (req: Request, res: Response) => {
    const usuario = usuarios.find((idUsuario) => idUsuario.id === parseInt(req.params.id));

    if (usuario) {
        res.send(usuario)
        
    } else {
        res.status(404).json({mensagem: 'Usuário não encontrado!'})
    }
});


// atualizar  usuario
app.put('/usuarios/:id', (req: Request, res: Response) => {

    const usuarioIndex = usuarios.findIndex((idUsuario) => idUsuario.id === parseInt(req.params.id));

    if (usuarioIndex === -1) {
        res.status(404).json({mensagem: 'Erro!'})
    } else {
        usuarios[usuarioIndex] = {
            nome: req.body.nome,
            id: usuarios[usuarioIndex].id
        }
        res.status(201).json(usuarios[usuarioIndex])
    }
});


// Excluir usuario
app.delete('/usuarios/:id', (req: Request, res: Response) => {

    const usuarioIndex = usuarios.findIndex((idUsuario) => idUsuario.id === parseInt(req.params.id));

    if (usuarioIndex === -1) {
        res.status(404).json({mensagem: 'Erro!'})
    } else {
        usuarios.splice(usuarioIndex, 1);

        res.json({mensagem: "Usuário excluido com sucesso!"})
    }
})

