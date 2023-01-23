/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('travels', table => {
    table.increments('id').primary();
    table.text('state').notNullable();
    table.text('city').notNullable();
    table.text('type').notNullable();
    table.text('name').notNullable();
    table.text('address').notNullable();
    table.varchar('contact').notNullable();
    table.text('description').notNullable();
    table.text('picture');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('travels');
};
