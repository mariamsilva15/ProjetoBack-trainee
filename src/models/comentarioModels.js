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

    /*async getById(comentario_id){
        const result = await connection("comentario")
        .where({comentario_id})
        .select("*");
    
        return result;
    },*/
    async getByServicoWithFilters(comentario_servico_id, {servicoSelecionado}){
        const filter = {"comentario.comentario_servico_id":comentario_servico_id};
        
        if(servicoSelecionado) filter["servico.nome"] = servicoSelecionado;

        const result = await connection("comentario")
        .innerJoin("servico", "comentario.comentario_servico_id","servico.servico_id")
        .where(filter)
        .select("comentario.*");
    
        return result;
    },

    async updateById(comentario_id, comentario){
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