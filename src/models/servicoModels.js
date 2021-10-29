const { v4 : uuidv4} = require('uuid');

const connection = require("../database/connection");

module.exports = {
    
    async create(servico) {
        const servico_id = uuidv4();
        servico.servico_id = servico_id;

        await connection("servico").insert(servico);

        return servico_id;
    },

    async getById(servico_id){
        const result = await connection("servico")
        .where({servico_id})
        .select("*")
        return result;
    },

    async updateById(servico_id, servico){
        const result = await connection("servico")
        .where({servico_id})
        .update(servico)
        return result;
    },

    async deleteById(servico_id){
        const result = await connection("servico")
        .where({ servico_id })
        .delete();
        return result;
    }
} 