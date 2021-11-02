
exports.up = function(knex) {
  return knex.schema.createTable("profissional", function (table){
    table.uuid('profissionais_id').primary().notNullable();
    table.uuid('profissional_servico_id').notNullable();
    table.foreign('profissional_servico_id').references('servico_id').inTable("servico").onDelete('set null');
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.string('estado').notNullable();
    table.string('cidade').notNullable();
    table.string('descricao').notNullable();
    table.string('contato').notNullable();
    table.string('firebase_id').notNullable();

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("profissional");
};
