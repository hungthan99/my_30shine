const express = require("express");
const router = express.Router();

const visionItemController = require('../../app/controllers/about/VisionItemController')

router.get("/", visionItemController.showAll);
router.get("/:id", visionItemController.show);
router.post("/", visionItemController.create);
router.put("/:id", visionItemController.update);
router.delete("/:id", visionItemController.delete);

module.exports = router;
