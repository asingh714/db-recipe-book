exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe-ingredients", table => {
    table.increments();

    table
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.float("quantity").notNullable();

    table.string("unitOfMeasure", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {};
