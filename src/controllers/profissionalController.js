const connection = require("../database/connection");
const profissionalModels = require("../models/profissionalModels");

module.exports = {
    async create(request, response){
        try {
            const newProfissional = request.body;
            const {profissional_servico_id} = request.body;
            const result = await profissionalModels.create(newProfissional, profissional_servico_id);

            return response.status(200).json(result);

        } catch (error) {
            console.warn("criacao do profissional falhou", error);

            return response.status(500).json({notification: "erro interno do servidor ao tentar criar o profissional",})
        }
    },

    async getById(request, response){
        try {
            const { profissionais_id } = request.params;
            const result = await profissionalModels.getById(profissionais_id );

            return response.status(200).json(result);

         } catch (error) {
            console.log("profissional getById falhou" + error);
             
            return response.status(500).json({notification: "erro interno do servidor ao tentar visualizar o profissional",})
         }
    },

    async update(request, response){
        try {
            const newProfissional = request.body;
            const { profissionais_id } = request.params;
            await profissionalModels.updateById(profissionais_id, newProfissional);

            

             return response.status(200).json({notification: "profissional alterado com sucesso"});
 
         } catch (error) {
             console.warn("profissional update falhou", error);
 
             return response.status(500).json({notification: "erro interno do servidor ao tentar dar update o profissional"});
         }
    },

    async delete(request, response){
        try {
            const { profissionais_id } = request.params;
            await profissionalModels.deleteById(profissionais_id);


 
            return response.status(200).json({notification: "profissional deletado com sucesso"});
         } catch (error) {
             console.warn("profissional delete falhou", error);
 
             return response.status(500).json({notification: "erro interno do servidor ao tentar deletar o profissional"});
         }
    },
    
};