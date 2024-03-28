const express = require("express");
const router = express.Router();

const visionController = require('../../app/controllers/about/VisionController')

router.get("/", visionController.showAll);
router.get("/:id", visionController.show);
router.post("/", visionController.create);
router.put("/:id", visionController.update);
router.delete("/:id", visionController.delete);

module.exports = router;
