const middleware = require("../config/middleware");
const express = require("express");
const server = express();
middleware(server);

const dishesRouter = require("../routes/dishes-router");

server.use("/api/dishes", dishesRouter);

module.exports = server;
