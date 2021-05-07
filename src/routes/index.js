const express = require("express");
const { index, add, del } = require("../controller/booksController");

const routes = express.Router();

routes.get("/books", index);
routes.post("/books", add);
routes.delete("/books/:id", del);

module.exports = routes;
