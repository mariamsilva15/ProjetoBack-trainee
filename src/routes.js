const express = require('express');
const routes = express.Router();

const comentarioController = require("./controllers/comentarioController");
const profissionalController = require("./controllers/profissionalController");
const servicoController = require("./controllers/servicoController");

//servico
routes.get('/servico/:servicoId', servicoController.getById);
routes.post('/servico', servicoController.create);
routes.put('/servico/:servicoId', servicoController.update);
routes.delete('/servico/:servicoId', servicoController.delete);

//profissional
routes.get('/profissional/:profissionalId', profissionalController.getById);
routes.post('/profissional', profissionalController.create);
routes.put('/profissional/:profissionalId', profissionalController.update);
routes.delete('/profissional/:profissionalId', profissionalController.delete);

 //comentario
routes.get('/comentario/:comentario_id', comentarioController.getById);
routes.post('/comentario', comentarioController.create);
routes.put('/comentario/:comentario_id', comentarioController.update);
routes.delete('/comentario/:comentario_id', comentarioController.delete);

module.exports = routes;

