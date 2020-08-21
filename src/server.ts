import express from 'express';

const app = express();

app.use(express.json());

// GET = Buscar e Listagem
// PUT = Atualização
// POST = Criação
// DELETE = Exclusão

//Resquest (Corpo) = Dados para criação ou atualização de um registro
    // Route Params = Identificar qual recurso que eu quero atualizar ou deletar
    // Query Params = Paginação, Filtros, Ordenações

app.get('/', (request, response) => {
    return response.json({ message: 'Hello Everybody'});
});

app.listen(3333);