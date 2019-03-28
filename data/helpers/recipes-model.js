const db = require("../dbConfig");

module.exports = {
  getRecipes
}

function getRecipes() {
  return db("recipes")
  .select("recipes.name as Recipe", "dishes.name as Dish")
  .join("dishes", "dishes.id", "recipes.dish_id")
}