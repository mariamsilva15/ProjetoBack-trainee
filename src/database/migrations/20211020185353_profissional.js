
exports.up = function(knex) {
  return knex.schema.createTable("profissional", function (table){
    table.string('profissionais_id').primary().notNullable();
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.string('estado').notNullable();
    table.string('cidade').notNullable();
    table.string('descricao').notNullable();
    table.string('senha').notNullable();
    table.string('contato').notNullable();

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("profissional");
};
