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

            return response.status(500).json({notification: "erro interno do servidor ao tentar criar o comentario"});
        }
    },

    async getById(request, response){
        try {
            const {comentario_id} = request.params;
            const result = await comentarioModels.getById(comentario_id);
 
             return response.status(200).json(result);
 
         } catch (error) {
             console.warn("comentario getById falhou" + error);
 
             return response.status(500).json({notification: "erro interno do servidor ao tentar visualizar o comentario"});
         }
    },

    async update(request, response) {
        try {
            const {comentario_id} = request.params;
            const newComentario = request.body;
            await comentarioModels.updateById(comentario_id, newComentario);

            return response.status(200).json({notification: "Comentario updated sucessfully"});
        }   catch (error) {
            console.warn("comentario update falhou" + error);
 
             return response.status(500).json({notification: "erro interno do servidor ao tentar update comentario"});
        }
    },

    async delete(request, response) {
        try {
            const {comentario_id} = request.params;
            await comentarioModels.deleteById(comentario_id);

            return response.status(200).json({notification: "Comentario deletado com sucesso"});
        }   catch (error) {
            console.warn("comentario delete falhou" + error);
 
             return response.status(500).json({notification: "erro interno do servidor ao tentar deletar o comentario"});
        }
    },
    
};