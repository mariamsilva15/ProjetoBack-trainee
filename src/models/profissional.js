const { v4 : uuid} = require('uuid');

const connection = require("../database/connection")

module.exports = {

    async create(profissional) {
        const profissionais_id = uuidv4();
        profissional.profissionais_id = profissionais_id;

        const result = await connection("profissional")
        .insert(profissional);
        return result;
    },

    async getById(profissionais_id, servico_id){
        const result = await connection("profissional")
        .where({profissionais_id, servico_id})
        .select("*");
        return result;
    },

    async updateById(profissionais_id, servico_id){
        const result = await connection("profissional")
        .where(profissionais_id)
        .update(profissional);
        return result;
    },

    async deleteById(profissionais_id){
        const result = await connection("profissional")
        .where({ profissionais_id })
        .delete();
        return result;
    }
} 