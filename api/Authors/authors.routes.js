const express = require("express");
const {
  authorsCreate,
  authorsGet,
  authorsDelete,
  authorsUpdate,
} = require("./authors.controllers");
const router = express.Router();

router.get("/", authorsGet);
router.post("/", authorsCreate);

router.delete("/:authorId", authorsDelete);

router.put("/:authorId", authorsUpdate);

module.exports = router;
