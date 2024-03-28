const express = require("express");
const router = express.Router();

const serviceItemController = require('../../app/controllers/home/ServiceItemController')

router.get("/", serviceItemController.showAll);
router.get("/:id", serviceItemController.show);
router.post("/", serviceItemController.create);
router.put("/:id", serviceItemController.update);
router.delete("/:id", serviceItemController.delete);

module.exports = router;
