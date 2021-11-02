const { v4 : uuidv4 } = require('uuid');

const connection = require("../database/connection")

module.exports = {

    async create(profissional, profissional_servico_id) {
        const profissionais_id = uuidv4();
        profissional.profissionais_id = profissionais_id;
        profissional.profissional_servico_id = profissional_servico_id;

        console.log(profissional_servico_id);
        await connection("profissional").insert(profissional);
        

        return profissionais_id;
    },

    /*async getById(profissionais_id){
        const result = await connection("profissional")
        .where({profissionais_id})
        .select("*");
        return result;
    },*/
    async getByServicoWithFilters(profissional_servico_id, {servicoSelecionado}){
        const filter = {"profissional.profissional_servico_id":profissional_servico_id};
        // como faço para diferenciar um nome do outro?
        
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