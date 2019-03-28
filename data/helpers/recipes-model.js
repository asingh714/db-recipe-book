const db = require("../dbConfig");

module.exports = {
  getRecipes,
  addRecipes
};

function getRecipes() {
  return db("recipes")
    .select("recipes.name as Recipe", "dishes.name as Dish")
    .join("dishes", "dishes.id", "recipes.dish_id");
}

function addRecipes(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(ids => ({ id: ids[0] }));
}
