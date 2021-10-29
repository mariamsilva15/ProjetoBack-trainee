const express = require('express');
const routes = express.Router();



// const comentarioController = require("./controllers/comentarioController");
const profissionalController = require("./controllers/profissionalController");
const servicoController = require("./controllers/servicoController");
const profissionalValidator = require("./validators/profissionalValidator");

//servico
routes.get('/servico/:servicoId', servicoController.getById);
routes.post('/servico', servicoController.create);
routes.put('/servico/:servicoId', servicoController.update);
routes.delete('/servico/:servicoId', servicoController.delete);

//profissional
routes.get('/profissional/:profissionais_id',profissionalValidator.getById, profissionalController.getById);
routes.post('/profissional',profissionalValidator.create, profissionalController.create);
routes.put('/profissional/:profissionais_id',profissionalValidator.update, profissionalController.update);
routes.delete('/profissional/:profissionais_id',profissionalValidator.delete, profissionalController.delete);

// //comentario
// routes.get('/comentario/:comentarioId', comentarioController.getById);
// routes.post('/comentario', comentarioController.create);
// routes.put('/comentario/:comentarioId', comentarioController.update);
// routes.delete('/comentario/:comentarioId', comentarioController.delete);

module.exports = routes;

