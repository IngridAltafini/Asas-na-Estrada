/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('asas', table => {
    table.increments('id').primary();
    table.text('model').notNullable();
    table.text('color').notNullable();
    table.integer('fabrication').notNullable();
    table.boolean('travel').notNullable().defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('asas');
};
