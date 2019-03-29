const middleware = require("../config/middleware");
const express = require("express");
const server = express();
middleware(server);

const dishesRouter = require("../routes/dishes-router");
const recipesRouter = require("../routes/recipes-router");


server.use("/api/dishes", dishesRouter);
server.use("/api/recipes", recipesRouter);


module.exports = server;
