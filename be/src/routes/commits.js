const express = require("express");
const router = express.Router();

const commitController = require('../app/controllers/CommitController')

router.get("/", commitController.showAll);
router.get("/:id", commitController.show);
router.post("/", commitController.create);
router.put("/:id", commitController.update);
router.delete("/:id", commitController.delete);

module.exports = router;
