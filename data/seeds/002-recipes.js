exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    {
      name: "Chorizo Tacos",
      instructions:
        "Cook chorizo, heat tortilla, add chorizo to tortilla, add onions, cilantro and avocado sauce on top.",
      dish_id: 1
    },
    {
      name: "Carne Asada Tacos",
      instructions:
        "Cook steak, heat tortilla, add steak to tortilla, add onions, cilantro and avocado sauce on top.",
      dish_id: 1
    },
    {
      name: "Veggie Pizza",
      instructions:
        "Spread dough, put sauce and cheese on dough, cut up veggies and add on top, bake for 25 minutes at 400 degrees.",
      dish_id: 2
    },
    {
      name: "Pepperoni Pizza",
      instructions:
        "Spread dough, put sauce and cheese on dough, top with pepperoni, bake for 25 minutes at 400 degrees.",
      dish_id: 2
    }
  ]);
};
