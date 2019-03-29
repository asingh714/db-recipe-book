const express = require("express");

const recipes = require("../data/helpers/recipes-model");
const router = express.Router();

router.get("/", (req, res) => {
  recipes
    .getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json({ error: "The recipes could not be retrieved. " });
    });
});

router.post("/", (req, res) => {
  const recipe = req.body;
  if (!recipe.name) {
    res.status(400).json({ error: "Please provide a name for the recipe." });
  } else if (!recipe.instructions){
    res.status(400).json({ error: "Please provide instructions for the recipe." });
  } else if (!recipe.dish_id){
    res.status(400).json({ error: "Please provide a dish_id for the recipe." });
  } else {
    recipes
      .addRecipes(recipe)
      .then(id => {
        res.status(201).json(id);
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while saving the recipe to the database."
        });
      });
  }
});

module.exports = router;