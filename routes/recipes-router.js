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

module.exports = router;