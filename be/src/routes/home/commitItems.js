const express = require("express");
const router = express.Router();

const commitItemController = require('../../app/controllers/home/CommitItemController')

router.get("/", commitItemController.showAll);
router.get("/:id", commitItemController.show);
router.post("/", commitItemController.create);
router.put("/:id", commitItemController.update);
router.delete("/:id", commitItemController.delete);

module.exports = router;
