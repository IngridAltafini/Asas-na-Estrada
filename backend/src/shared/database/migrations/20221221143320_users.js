/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('email').notNullable();
    table.text('password').notNullable();
    table.text('provider_id');
    table.text('telephone');
    table.text('cep');
    table.text('andress');
    table.text('neighborhood');
    table.integer('genre');
    table.text('city');
    table.text('avatar');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
