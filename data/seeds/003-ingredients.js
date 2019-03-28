exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { name: "Tortillas" },
    { name: "Chorizo" },
    { name: "Steak" },
    { name: "Cilantro" },
    { name: "Onions" },
    { name: "Avocado Sauce" },
    { name: "Dough" },
    { name: "Marinara Sauce" },
    { name: "Cheese" },
    { name: "Peppers" },
    { name: "Pepperoni" }
  ]);
};
