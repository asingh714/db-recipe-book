const db = require("../dbConfig");

module.exports = {
  getRecipes,
  addRecipe
}

function getRecipes() {
  return db("recipes")
  .select("recipes.name as recipe", "dish.name as dish")
  .join("dish", "dish.id", "recipes.dish_id")
}