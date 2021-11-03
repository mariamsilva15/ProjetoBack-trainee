
const Firebase = require("../utils/Firebase");

const connection = require("../database/connection")

module.exports = {

    async create(profissional) {
        const profissionais_id = profissional.firebase_id;
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

    async get(){
        const result = await connection("profissional")
        .select("*");
        return result;
    },

    async getByServicoWithFilters(profissional_servico_id, {servicoSelecionado}){
        const filter = {"profissional.profissional_servico_id":profissional_servico_id};
        
        if(servicoSelecionado) filter["servico.nome"] = servicoSelecionado;

        const result = await connection("profissional")
        .innerJoin("servico", "profissional.profissional_servico_id","servico.servico_id")
        .where(filter)
        .select("profissional.*");
    
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