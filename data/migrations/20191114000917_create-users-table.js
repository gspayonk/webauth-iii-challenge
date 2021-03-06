exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
      table.increments();
  
      table
        .string('username', 255)
        .notNullable()
        .unique();
  
      table.string('password', 255).notNullable();
      table.string('role', 255).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };