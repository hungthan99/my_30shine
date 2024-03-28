const express = require("express");
const router = express.Router();

const missionController = require('../../app/controllers/about/MissionController')

router.get("/", missionController.showAll);
router.get("/:id", missionController.show);
router.post("/", missionController.create);
router.put("/:id", missionController.update);
router.delete("/:id", missionController.delete);

module.exports = router;
