exports.up = function(knex) {
  return knex.schema.createTable("apartments", (table) => {
    table.increments().index();

    table.text("title").notNullable();
    table.text("description");
    table.text("address");
    table.float("price");

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("apartments");
};
