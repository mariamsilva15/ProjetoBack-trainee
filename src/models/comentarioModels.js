const { v4 : uuidv4} = require('uuid');

const connection = require("../database/connection")

module.exports = {

    async create(comentario, comentario_servico_id) {
        const comentario_id = uuidv4();
        comentario.comentario_id = comentario_id;
        comentario.comentario_servico_id = comentario_servico_id;
        
        await connection("comentario").insert(comentario);
        return comentario_id;
    },

    async getById(comentario_id){
        const result = await connection("comentario")
        .where({comentario_id})
        .select("*");
    
        return result;
    },

    async deleteById(comentario_id){
        const result = await connection("comentario")
        .where({ comentario_id })
        .delete();
        return result;
    }
} 