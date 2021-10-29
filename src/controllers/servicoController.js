const servicoModels = require("../models/servicoModels");

module.exports = {
    async create(request, response){
        try {
           const newServico = request.body;
           const result = await servicoModels.create(newServico);

            return response.status(200).json(result);

        } catch (error) {
            console.warn("criacao do servico falhou", error);

            return response.status(500).json({notification: "erro interno do servidor ao tentar criar o servico",})
        }
    },

    async getById(request, response){
        try {
            const { servico_id } = request.params;
            const result = await servicoModels.getById(servico_id);
 
             return response.status(200).json(result);
 
         } catch (error) {
             console.log("servico getById falhou" + error);
 
             return response.status(500).json({notification: "erro interno do servidor ao tentar visualizar o servico",})
         }
    },

    async update(request, response){
        try {
            const { servico_id } = request.params;
            const result = await servicoModels.updateById(servico_id);
 
             return response.status(200).json(result);
 
         } catch (error) {
             console.log("servico update falhou" + error);
 
             return response.status(500).json({notification: "erro interno do servidor ao tentar dar update o servico",})
         }
    },

    async delete(request, response){
        try {
            const { servico_id } = request.params;
            const result = await servicoModels.deleteById(servico_id);
 
             return response.status(200).json(result);
 
         } catch (error) {
             console.log("servico delete falhou" + error);
 
             return response.status(500).json({notification: "erro interno do servidor ao tentar deletar o servico",})
         }
    },
    
};