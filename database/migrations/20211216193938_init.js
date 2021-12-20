
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('user_email').notNullable().unique();
    table.string('user_password').notNullable();
    table.string('password_salt').notNullable();
    table.boolean('active');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
