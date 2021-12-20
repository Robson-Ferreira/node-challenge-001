
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('userEmail').notNullable().unique();
    table.string('userPassword').notNullable();
    table.string('passwordSalt').notNullable();
    table.boolean('active');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
