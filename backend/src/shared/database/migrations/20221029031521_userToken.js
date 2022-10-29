/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users_token', table => {
    table.increments('id').primary();
    table.text('token').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('id').inTable('users');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users_token');
};
