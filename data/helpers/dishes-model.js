const db = require("../dbConfig");

module.exports = {
  getDishes,
  addDish,
  getDish
};

function getDishes() {
  return db("dishes");
}

function addDish(dish) {
  return db("dishes")
    .insert(dish)
    .then(ids => ({ id: ids[0] }));
}

function getDish(id) {
  return db("dishes")
    .select("dishes.name as Dish_Name", "recipes.name as Recipe_Name")
    .join("recipes", "dishes.id", "recipes.dish_id")
    .where({ "dishes.id": id });
}
