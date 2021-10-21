
exports.up = function(knex) {
    return knex.schema.createTable("servico", function (table){
        table.uuid('servico_id').primary().nullable();
        table.string('nome').notNullable();
        table.string('especificacoes').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("servico");
};
