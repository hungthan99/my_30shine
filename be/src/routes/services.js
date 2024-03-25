const express = require("express");
const router = express.Router();

const serviceController = require('../app/controllers/ServiceController')

router.get("/", serviceController.showAll);
router.get("/:id", serviceController.show);
router.post("/", serviceController.create);
router.put("/:id", serviceController.update);
router.delete("/:id", serviceController.delete);

module.exports = router;
