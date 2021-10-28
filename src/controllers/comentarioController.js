const connection = require("../database/connection");
const comentarioModels = require("../models/comentarioModels");

module.exports = {
    async create(request, response){
        try {
           const newComentario = request.body;
           const {comentario_servico_id} = request.body;
           const result = await comentarioModels.create(newComentario, comentario_servico_id);

            return response.status(200).json(result);

        } catch (error) {
            console.warn("criacao do comentario falhou", error);

            return response.status(500).json({notification: "erro interno do servidor ao tentar criar o comentario",})
        }
    },

    async getByComment(request, response){
        try {
            const {comentario_id} = request.params;
            const result = await comentarioModels.getById(comentario_id);
 
             return response.status(200).json(result);
 
         } catch (error) {
             console.warn("comentario getById falhou" + error);
 
             return response.status(500).json({notification: "erro interno do servidor ao tentar visualizar o comentario",})
         }
    },
    
};