
exports.up = function(knex) {
    return knex.schema.createTable("comentario", function (table){
        table.uuid('comentario_id').primary().notNullable();
        table.uuid('comentario_servico_id').nullable();
        table.foreign('comentario_servico_id').references('servico_id').inTable("servico").onDelete('set null');
        table.string('corpo').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("comentario");
};
