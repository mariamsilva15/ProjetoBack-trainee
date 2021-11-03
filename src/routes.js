const express = require('express');
const routes = express.Router();

const auth = require("./middlewares/authentication");

const comentarioController = require("./controllers/comentarioController");
const profissionalController = require("./controllers/profissionalController");
const servicoController = require("./controllers/servicoController");
const profissionalValidator = require("./validators/profissionalValidator");
const servicoValidator = require('./validators/servicoValidator');
const comentarioValidator = require('./validators/comentarioValidator');

const sessionController = require('./controllers/sessionController');

//session
routes.post("/login", sessionController.signIn);


//servico
routes.get('/servico/tipos', servicoController.get);
routes.get('/servicoget/:servico_id',servicoValidator.getById, servicoController.getById);
routes.post('/servicopost',servicoValidator.create, auth.authenticateToken, servicoController.create);
routes.put('/servicoput/:servico_id',servicoValidator.update, auth.authenticateToken, servicoController.update);
routes.delete('/servicodelete/:servico_id',servicoValidator.delete, auth.authenticateToken, servicoController.delete);

//profissional
routes.get('/profissional/todos', profissionalController.get);
routes.get('/profissionalget/:profissionais_id', profissionalController.getById);
routes.get('/profissional/:profissional_servico_id',profissionalValidator.getById, profissionalController.getByServico);
routes.post('/profissional',profissionalValidator.create, profissionalController.create);
routes.put('/profissional/:profissionais_id',profissionalValidator.update, profissionalController.update);
routes.delete('/profissional/:profissionais_id',profissionalValidator.delete, profissionalController.delete);

 //comentario
routes.get('/comentario/:comentario_servico_id', comentarioValidator.getById, comentarioController.getByServico);
routes.post('/comentario', comentarioValidator.create, comentarioController.create);
routes.put('/comentario/:comentario_id', comentarioValidator.update, comentarioController.update);
routes.delete('/comentario/:comentario_id', comentarioValidator.delete, comentarioController.delete);

module.exports = routes;

