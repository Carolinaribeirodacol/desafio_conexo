
exports.up = knex => knex.schema.createTable('projects', table => {
  table.increments('id')
  table.text('title');

  // 1 - n
  table.integer('user_id')
    .references('users.id')
    .notNullTable()
    .onDelete('CASCADE')

  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('projects');
