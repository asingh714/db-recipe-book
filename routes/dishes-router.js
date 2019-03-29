const express = require("express");

const dishes = require("../data/helpers/dishes-model");
const router = express.Router();

router.get("/", (req, res) => {
  dishes
    .getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(error => {
      res.status(500).json({ error: "The dishes could not be retrieved. " });
    });
});

router.post("/", (req, res) => {
  const dish = req.body;
  if (!dish.name) {
    res.status(400).json({ error: "Please provide a name for the dish." });
  } else {
    dishes
      .addDish(dish)
      .then(id => {
        res.status(201).json(id);
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while saving the dish to the database."
        });
      });
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  dishes
    .getDish(id)
    .then(dish => {
      if (dish) {
        res.status(200).json(dish);
      } else {
        res
          .status(404)
          .json({ error: "The dish with the specified ID does not exist. " });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "The dish with the specified ID could not be retrieved."
      });
    });
});

module.exports = router;
