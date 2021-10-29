const { v4 : uuidv4} = require('uuid');

const connection = require("../database/connection")

module.exports = {

    async create(comentario) {
        const comentario_id = uuidv4();
        comentario.comentario_id = comentario_id;
        
        const result = await connection("comentario").insert(comentario);
        return result;
    },

    async getById({comentario_id, servico_id}){
        const result = await connection("comentario")
        .where({comentario_id, servico_id})
        .select("*");
        return result;
    },

    async updateById(comentario_id, servico_id){
        const result = await connection("comentario")
        .where({comentario_id})
        .update(comentario);
        return result;
    },

    async deleteById(comentario_id){
        const result = await connection("comentario")
        .where({ comentario_id })
        .delete();
        return result;
    }
} 