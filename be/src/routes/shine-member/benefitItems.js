const express = require("express");
const router = express.Router();

const benefitItemController = require('../../app/controllers/shine-member/BenefitItemController')

router.get("/", benefitItemController.showAll);
router.get("/:id", benefitItemController.show);
router.post("/", benefitItemController.create);
router.put("/:id", benefitItemController.update);
router.delete("/:id", benefitItemController.delete);

module.exports = router;
