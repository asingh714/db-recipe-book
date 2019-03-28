const express = require("express");

const dishes = require("../data/helpers/dishes-model");
const router = express.Router();


router.get("/", (req, res) => {
  dishes.getDishes()
  .then(dishes => {
    res.status(200).json(dishes)
  })
  .catch(error => {
    res.status(500).json({ error: "The dishes could not be retrieved. "})
  })
})


module.exports = router;