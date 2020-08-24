import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();

const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;


// GET = Buscar e Listagem
// PUT = Atualização
// POST = Criação
// DELETE = Exclusão

//Resquest (Corpo) = Dados para criação ou atualização de um registro
    // Route Params = Identificar qual recurso que eu quero atualizar ou deletar
    // Query Params = Paginação, Filtros, Ordenações