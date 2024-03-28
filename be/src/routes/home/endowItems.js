const express = require("express");
const router = express.Router();

const endowItemController = require('../../app/controllers/home/EndowItemController')

router.get("/", endowItemController.showAll);
router.get("/:id", endowItemController.show);
router.post("/", endowItemController.create);
router.put("/:id", endowItemController.update);
router.delete("/:id", endowItemController.delete);

module.exports = router;
