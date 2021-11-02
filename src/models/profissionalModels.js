const { v4 : uuidv4 } = require('uuid');

const connection = require("../database/connection")

module.exports = {

    async create(profissional) {
        const profissionais_id = uuidv4();
        profissional.profissionais_id = profissionais_id;
        profissional.profissional_servico_id = profissional.profissional_servico_id;

        console.log(profissional.profissional_servico_id);
        await connection("profissional").insert(profissional);
        

        return profissionais_id;
    },

    async getByFields(fields) {
        const result = await connection("profissional")
        .where(fields)
        .select("*")
        .first();
        return result;
    },

    async getById(profissionais_id){
        const result = await connection("profissional")
        .where({profissionais_id})
        .select("*");
        return result;
    },

    async updateById(profissionais_id, profissional){
        const result = await connection("profissional")
        .where({ profissionais_id })
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