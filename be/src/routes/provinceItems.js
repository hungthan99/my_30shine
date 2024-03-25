const express = require("express");
const router = express.Router();

const provinceItemController = require('../app/controllers/ProvinceItemController')

router.get("/", provinceItemController.showAll);
router.get("/:id", provinceItemController.show);
router.post("/", provinceItemController.create);
router.put("/:id", provinceItemController.update);
router.delete("/:id", provinceItemController.delete);

module.exports = router;
