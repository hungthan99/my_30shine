const express = require("express");
const router = express.Router();

const cityController = require('../../app/controllers/system-salon/CityController')

router.get("/", cityController.showAll);
router.get("/:id", cityController.show);
router.post("/", cityController.create);
router.put("/:id", cityController.update);
router.delete("/:id", cityController.delete);

module.exports = router;
