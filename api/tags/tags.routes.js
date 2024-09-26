const express = require("express");
const { tagsGet, tagsCreate } = require("./tags.controllers");
const tagRoutes = express.Router();

tagRoutes.get("/", tagsGet);
tagRoutes.post("/:authorId", tagsCreate);

module.exports = tagRoutes;
