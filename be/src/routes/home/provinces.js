const express = require("express");
const router = express.Router();

const provinceController = require('../../app/controllers/home/ProvinceController')

router.get("/", provinceController.showAll);
router.get("/:id", provinceController.show);
router.post("/", provinceController.create);
router.put("/:id", provinceController.update);
router.delete("/:id", provinceController.delete);

module.exports = router;
