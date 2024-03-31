const express = require("express");
const router = express.Router();

const benefitController = require('../../app/controllers/shine-member/BenefitController')

router.get("/", benefitController.showAll);
router.get("/:id", benefitController.show);
router.post("/", benefitController.create);
router.put("/:id", benefitController.update);
router.delete("/:id", benefitController.delete);

module.exports = router;
