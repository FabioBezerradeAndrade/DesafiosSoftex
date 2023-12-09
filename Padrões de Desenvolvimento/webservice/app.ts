const express = require('express')
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => res.send('Bem vindo ao meu web service!!!'))
app.listen(port, () => console.log(`Funcionando na porta ${port}!`))