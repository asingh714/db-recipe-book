exports.seed = function(knex, Promise) {
  return knex("recipe-ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 3, unitOfMeasure: "whole" },
    { recipe_id: 1, ingredient_id: 2, quantity: 1, unitOfMeasure: "lbs" },
    { recipe_id: 1, ingredient_id: 4, quantity: 2, unitOfMeasure: "tablespoons" },
    { recipe_id: 1, ingredient_id: 5, quantity: 0.5, unitOfMeasure: "cups" },
    { recipe_id: 1, ingredient_id: 6, quantity: 3, unitOfMeasure: "tablespoons" },
    { recipe_id: 2, ingredient_id: 1, quantity: 3, unitOfMeasure: "whole" },
    { recipe_id: 2, ingredient_id: 3, quantity: 1, unitOfMeasure: "lbs" },
    { recipe_id: 2, ingredient_id: 4, quantity: 2, unitOfMeasure: "tablespoons" },
    { recipe_id: 2, ingredient_id: 5, quantity: 0.5, unitOfMeasure: "cups" },
    { recipe_id: 2, ingredient_id: 6, quantity: 3, unitOfMeasure: "tablespoons" },
    { recipe_id: 3, ingredient_id: 7, quantity: 1, unitOfMeasure: "whole" },
    { recipe_id: 3, ingredient_id: 8, quantity: 2, unitOfMeasure: "cups" },
    { recipe_id: 3, ingredient_id: 9, quantity: 3.5, unitOfMeasure: "cups" },
    { recipe_id: 3, ingredient_id: 5, quantity: 1, unitOfMeasure: "cups" },
    { recipe_id: 3, ingredient_id: 10, quantity: 1, unitOfMeasure: "cups" },
    { recipe_id: 4, ingredient_id: 7, quantity: 1, unitOfMeasure: "whole" },
    { recipe_id: 4, ingredient_id: 8, quantity: 2, unitOfMeasure: "cups" },
    { recipe_id: 4, ingredient_id: 9, quantity: 3.5, unitOfMeasure: "cups" },
    { recipe_id: 4, ingredient_id: 11, quantity: 1, unitOfMeasure: "cups" },
  ]);
};
