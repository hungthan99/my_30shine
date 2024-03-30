const express = require("express");
const router = express.Router();

const districtController = require('../../app/controllers/system-salon/DistrictController')

router.get("/", districtController.showAll);
router.get("/:id", districtController.show);
router.post("/", districtController.create);
router.put("/:id", districtController.update);
router.delete("/:id", districtController.delete);

module.exports = router;
