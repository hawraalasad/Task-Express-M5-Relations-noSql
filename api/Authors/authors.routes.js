const express = require("express");
const {
  authorsCreate,
  authorsGet,
  authorsDelete,
  authorsUpdate,
} = require("./authors.controllers");
const authorRoutes = express.Router();

authorRoutes.get("/", authorsGet);
authorRoutes.post("/", authorsCreate);

authorRoutes.delete("/:authorId", authorsDelete);

authorRoutes.put("/:authorId", authorsUpdate);

module.exports = authorRoutes;
