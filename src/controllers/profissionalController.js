const connection = require("../database/connection");
const profissionalModels = require("../models/profissionalModels");
const Firebase = require("../utils/Firebase");


module.exports = {
    async create(request, response){
        try {
            console.log(request.body);
            const newProfissional = request.body;
            
            
            const uid = await Firebase.createNewUser(newProfissional.email, newProfissional.senha);
        
            delete newProfissional.senha;
            delete newProfissional.confirmarSenha;
            newProfissional.firebase_id = uid;
            
            const result = await profissionalModels.create(newProfissional);
            
            return response.status(200).json(result);
            

        } catch (error) {
            console.warn("criacao do profissional falhou", error);

            return response.status(500).json({notification: "erro interno do servidor ao tentar criar o profissional"});
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

    async get(request, response){
        try {
            const result = await profissionalModels.get();

            return response.status(200).json(result);

         } catch (error) {
            console.log("profissional getById falhou" + error);
             
            return response.status(500).json({notification: "erro interno do servidor ao tentar visualizar o profissional",})
         }
    }, 

    async getByServico(request, response){
        try {
            const { profissional_servico_id } = request.params;
            const result = await profissionalModels.getByServicoWithFilters(profissional_servico_id, request.query);
 
             return response.status(200).json(result);
 
         } catch (error) {
             console.warn("getByServico falhou", error);
 
             return response.status(500).json({notification: "erro interno do servidor ao tentar visualizar o profissional"});
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