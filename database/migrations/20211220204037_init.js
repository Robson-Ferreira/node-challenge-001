
exports.up = function(knex) {
    return knex.schema.createTable('authors', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.string('image').notNullable();
        table.boolean('active');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('authors');
};
