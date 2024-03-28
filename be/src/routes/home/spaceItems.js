const express = require("express");
const router = express.Router();

const spaceItemController = require('../../app/controllers/home/SpaceItemController')

router.get("/", spaceItemController.showAll);
router.get("/:id", spaceItemController.show);
router.post("/", spaceItemController.create);
router.put("/:id", spaceItemController.update);
router.delete("/:id", spaceItemController.delete);

module.exports = router;
